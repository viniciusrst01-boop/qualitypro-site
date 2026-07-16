import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MailCheck } from "lucide-react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Compra recebida | QualityPro Solutions",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CompraObrigadoPage() {
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
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Assim que o Mercado Pago confirmar o pagamento, enviaremos o link de
            download para o e-mail informado na compra. O link ficara disponivel
            por 3 dias.
          </p>
          <Link
            href="/produtos"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-cyan-400/50 px-5 py-3 text-sm font-black text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Voltar para materiais <ArrowRight size={17} />
          </Link>
        </section>
      </main>
    </>
  );
}
