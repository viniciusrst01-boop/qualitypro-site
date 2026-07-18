import type { Metadata } from "next";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  MonitorCog,
  PackageCheck,
} from "lucide-react";
import Header from "@/components/Header";
import ProductCheckoutButton from "@/components/ProductCheckoutButton";

export const metadata: Metadata = {
  title: "Teste de Compras | QualityPro Solutions",
  description:
    "Pagina oculta para testes internos de compra e entrega dos materiais da QualityPro Solutions.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const testProducts = [
  {
    id: "kit-auditoria-iso-9001",
    title: "Kit Auditoria ISO 9001",
    description:
      "Modelos profissionais para planejar, executar, registrar e acompanhar auditorias internas ISO 9001.",
    color: "blue",
    icon: ClipboardCheck,
    items: [
      "Plano e programa de auditoria",
      "Checklist ISO 9001 e gap analysis",
      "Relatorio de auditoria",
      "Qualificacao de auditores",
      "Manual pratico de auditoria interna",
    ],
  },
  {
    id: "kit-nao-conformidade-acao-corretiva",
    title: "Kit Nao Conformidade e Acao Corretiva",
    description:
      "Documentos e controles para registrar nao conformidades, tratar causas e verificar a eficacia das acoes.",
    color: "orange",
    icon: BadgeCheck,
    items: [
      "Relatorio de nao conformidade",
      "Controle de NC e eficacia",
      "Fluxo do processo de NC",
      "Procedimento de tratativa",
      "Acompanhamento de acoes corretivas",
    ],
  },
  {
    id: "combo-auditoria-nao-conformidade",
    title: "Combo Auditoria + Nao Conformidade",
    description:
      "Pacote combinado para estruturar auditorias internas e controlar nao conformidades em um unico conjunto.",
    color: "navy",
    icon: PackageCheck,
    items: [
      "Kit Auditoria ISO 9001",
      "Kit Nao Conformidade",
      "Fluxos, formularios e relatorios",
      "Controles de acompanhamento",
      "Materiais editaveis",
    ],
  },
  {
    id: "kit-controle-documentos",
    title: "Kit Controle de Documentos",
    description:
      "Modelos e controles para organizar documentos, registros e evidencias do Sistema de Gestao da Qualidade.",
    color: "green",
    icon: MonitorCog,
    items: [
      "Controle de documentos",
      "Listas mestras",
      "Controle de registros",
      "Modelo de procedimento",
      "Rotina de revisao e aprovacao",
    ],
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-600 text-white",
    title: "text-blue-700",
    line: "bg-blue-600",
    button:
      "border-blue-500 text-blue-700 hover:bg-blue-600 hover:text-white",
    check: "text-blue-600",
  },
  green: {
    icon: "bg-emerald-600 text-white",
    title: "text-emerald-700",
    line: "bg-emerald-600",
    button:
      "border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white",
    check: "text-emerald-600",
  },
  orange: {
    icon: "bg-orange-500 text-white",
    title: "text-orange-600",
    line: "bg-orange-500",
    button:
      "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
    check: "text-orange-500",
  },
  navy: {
    icon: "bg-slate-950 text-white",
    title: "text-slate-950",
    line: "bg-slate-950",
    button:
      "border-slate-800 text-slate-950 hover:bg-slate-950 hover:text-white",
    check: "text-slate-900",
  },
} as const;

export default function ProdutosTestePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-slate-50 pt-24 text-slate-950 sm:pt-28">
        <section className="relative overflow-hidden py-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.10),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.04),transparent_32%,rgba(14,165,233,0.06))]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-5">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                Pagina oculta de teste
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-normal text-slate-950 sm:text-6xl">
                Compras por R$ 0,01
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                Use esta pagina apenas para validar o pagamento, retorno do
                Mercado Pago e liberacao do download dos arquivos.
              </p>
              <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-sky-500" />
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {testProducts.map((product) => {
                const Icon = product.icon;
                const styles =
                  colorStyles[product.color as keyof typeof colorStyles];

                return (
                  <article
                    key={product.id}
                    className="relative flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-5 text-center shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/60"
                  >
                    <span className="absolute left-1/2 top-3 min-w-[11.75rem] -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-center text-[0.62rem] font-black uppercase tracking-[0.1em] text-cyan-700">
                      Teste interno
                    </span>
                    <div
                      className={`mx-auto mt-5 grid h-20 w-20 place-items-center rounded-full shadow-lg ${styles.icon}`}
                    >
                      <Icon size={38} strokeWidth={1.8} />
                    </div>
                    <h2
                      className={`mt-5 text-2xl font-black leading-tight ${styles.title}`}
                    >
                      {product.title}
                    </h2>
                    <span
                      className={`mx-auto mt-4 block h-1 w-14 rounded-full ${styles.line}`}
                    />
                    <p className="mt-5 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <ul className="mt-5 grid gap-2 text-left text-sm leading-5 text-slate-700">
                      {product.items.map((item) => (
                        <li key={item} className="grid grid-cols-[20px_1fr] gap-2">
                          <CheckCircle2
                            className={styles.check}
                            size={17}
                            strokeWidth={2.5}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ProductCheckoutButton
                      productId={product.id}
                      testMode
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-black uppercase tracking-wide transition ${styles.button}`}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
