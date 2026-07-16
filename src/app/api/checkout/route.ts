import { getPaidProduct } from "@/lib/products";

export const runtime = "nodejs";

type CheckoutPayload = {
  productId?: unknown;
};

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

export async function POST(request: Request) {
  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

  if (!accessToken) {
    return Response.json(
      {
        message:
          "O pagamento ainda nao esta configurado. Defina MERCADO_PAGO_ACCESS_TOKEN.",
      },
      { status: 503 },
    );
  }

  let payload: CheckoutPayload;

  try {
    payload = (await request.json()) as CheckoutPayload;
  } catch {
    return Response.json({ message: "Dados invalidos." }, { status: 400 });
  }

  const productId =
    typeof payload.productId === "string" ? payload.productId.trim() : "";
  const product = getPaidProduct(productId);

  if (!product) {
    return Response.json({ message: "Produto nao encontrado." }, { status: 404 });
  }

  const siteUrl = getSiteUrl();
  const preferenceResponse = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            id: product.id,
            title: product.name,
            description: product.description,
            quantity: 1,
            currency_id: "BRL",
            unit_price: product.priceInCents / 100,
          },
        ],
        external_reference: product.id,
        back_urls: {
          success: `${siteUrl}/compra/obrigado?status=approved`,
          pending: `${siteUrl}/compra/obrigado?status=pending`,
          failure: `${siteUrl}/produtos?status=failure`,
        },
        auto_return: "approved",
        notification_url: `${siteUrl}/api/mercado-pago/webhook`,
        statement_descriptor: "QUALITYPRO",
      }),
    },
  );

  const preference = (await preferenceResponse.json()) as {
    init_point?: string;
    sandbox_init_point?: string;
    message?: string;
  };

  if (!preferenceResponse.ok || !preference.init_point) {
    console.error("Mercado Pago preference error:", preference);
    return Response.json(
      { message: preference.message || "Nao foi possivel iniciar o pagamento." },
      { status: 502 },
    );
  }

  return Response.json({ checkoutUrl: preference.init_point });
}
