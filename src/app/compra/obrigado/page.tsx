import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, MailCheck } from "lucide-react";
import Header from "@/components/Header";
import { createDownloadToken } from "@/lib/download-token";
import { getPaidProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Compra recebida | QualityPro Solutions",
  robots: {
    index: false,
    follow: false,
  },
};

type CompraObrigadoPageProps = {
  searchParams: Promise<{
    collection_id?: string;
    payment_id?: string;
    status?: string;
    preference_id?: string;
  }>;
};

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

async function getApprovedDownloadUrl(paymentId: string) {
  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

  if (!accessToken || !paymentId) {
    return null;
  }

  const paymentResponse = await fetch(
    `https://api.mercadopago.com/v1/payments/${paymentId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    },
  );

  if (!paymentResponse.ok) {
    console.error(
      "Mercado Pago return payment lookup failed:",
      await paymentResponse.text(),
    );
    return null;
  }

  const payment = (await paymentResponse.json()) as MercadoPagoPayment;

  if (payment.status !== "approved") {
    return null;
  }

  const product = getPaidProduct(payment.external_reference || "");
  const email = payment.payer?.email || "cliente@qualityprosolutions.com.br";

  if (!product) {
    return null;
  }

  const token = createDownloadToken(product.id, email);

  return {
    productName: product.name,
    url: `${getSiteUrl()}/api/download/${encodeURIComponent(token)}`,
  };
}

export default async function CompraObrigadoPage({
  searchParams,
}: CompraObrigadoPageProps) {
  const params = await searchParams;
  const paymentId = params.payment_id || params.collection_id || "";
  const download = await getApprovedDownloadUrl(paymentId);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 pt-28 text-white">
        <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
            <MailCheck size={34} strokeWidth={1.8} />
          </span>
          <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Pedido recebido
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Obrigado pela compra
          </h1>
          {download ? (
            <>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Pagamento aprovado. Seu material{" "}
                <strong className="text-white">{download.productName}</strong>{" "}
                ja esta liberado para download. O link tambem pode ser enviado
                por e-mail e fica disponivel por 3 dias.
              </p>
              <a
                href={download.url}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 shadow-[0_18px_45px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300"
              >
                Baixar material <Download size={17} />
              </a>
            </>
          ) : (
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Assim que o Mercado Pago confirmar o pagamento, enviaremos o link
              de download para o e-mail informado na compra. O link ficara
              disponivel por 3 dias.
            </p>
          )}
          <Link
            href="/produtos"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-cyan-400/50 px-5 py-3 text-sm font-black text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Voltar para materiais <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </>
  );
}
