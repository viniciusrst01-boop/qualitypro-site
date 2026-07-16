import { Resend } from "resend";
import { createDownloadToken } from "@/lib/download-token";
import { getPaidProduct } from "@/lib/products";

export const runtime = "nodejs";

type MercadoPagoPayment = {
  status?: string;
  external_reference?: string;
  payer?: {
    email?: string;
  };
};

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

function getPaymentId(request: Request, body: unknown) {
  const url = new URL(request.url);
  const queryId =
    url.searchParams.get("data.id") ||
    url.searchParams.get("id") ||
    url.searchParams.get("payment_id");

  if (queryId) {
    return queryId;
  }

  if (
    body &&
    typeof body === "object" &&
    "data" in body &&
    body.data &&
    typeof body.data === "object" &&
    "id" in body.data
  ) {
    return String(body.data.id);
  }

  return "";
}

async function sendDownloadEmail({
  email,
  productName,
  downloadUrl,
}: {
  email: string;
  productName: string;
  downloadUrl: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "QualityPro Solutions <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing for product delivery.");
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: `Seu material QualityPro Solutions - ${productName}`,
    text: [
      "Obrigado pela compra.",
      "",
      `Material: ${productName}`,
      "Seu link de download fica disponivel por 3 dias:",
      downloadUrl,
      "",
      "QualityPro Solutions",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h1 style="font-size: 22px;">Obrigado pela compra</h1>
        <p>Seu material <strong>${productName}</strong> esta pronto para download.</p>
        <p>O link abaixo fica disponivel por <strong>3 dias</strong>:</p>
        <p>
          <a href="${downloadUrl}" style="display:inline-block;background:#0ea5e9;color:#ffffff;padding:12px 18px;border-radius:8px;text-decoration:none;font-weight:700;">
            Baixar material
          </a>
        </p>
        <p style="font-size: 13px; color: #475569;">Se o botao nao funcionar, copie e cole este link no navegador:<br />${downloadUrl}</p>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

  if (!accessToken) {
    return Response.json({ ok: false }, { status: 503 });
  }

  let body: unknown = null;

  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const paymentId = getPaymentId(request, body);

  if (!paymentId) {
    return Response.json({ ok: true });
  }

  const paymentResponse = await fetch(
    `https://api.mercadopago.com/v1/payments/${paymentId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!paymentResponse.ok) {
    console.error("Mercado Pago payment lookup failed:", await paymentResponse.text());
    return Response.json({ ok: false }, { status: 502 });
  }

  const payment = (await paymentResponse.json()) as MercadoPagoPayment;

  if (payment.status !== "approved") {
    return Response.json({ ok: true });
  }

  const productId = payment.external_reference || "";
  const product = getPaidProduct(productId);
  const email = payment.payer?.email;

  if (!product || !email) {
    console.error("Approved payment missing product or payer email:", {
      productId,
      email,
    });
    return Response.json({ ok: true });
  }

  const token = createDownloadToken(product.id, email);
  const downloadUrl = `${getSiteUrl()}/api/download/${encodeURIComponent(token)}`;

  try {
    await sendDownloadEmail({
      email,
      productName: product.name,
      downloadUrl,
    });
  } catch (error) {
    console.error("Product delivery email failed:", error);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
