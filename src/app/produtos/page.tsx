import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  DownloadCloud,
  Gem,
  GraduationCap,
  Headphones,
  MonitorCog,
  PackageCheck,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Header from "@/components/Header";
import ProductCheckoutButton from "@/components/ProductCheckoutButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Materiais de Apoio | QualityPro Solutions",
  description:
    "Materiais de apoio, modelos, planilhas e recursos profissionais para apoiar a Gestão da Qualidade, ISO 9001, auditorias, indicadores e padronização de processos.",
  alternates: {
    canonical: "/produtos",
  },
};

const productLines = [
  {
    title: "QualityPro Essentials",
    description:
      "Kits básicos para estruturar, organizar e manter o Sistema de Gestão da Qualidade.",
    color: "blue",
    icon: ClipboardCheck,
    items: [
      "Auditoria interna",
      "Não conformidade e ação corretiva",
      "Controles essenciais",
      "Organização do SGQ",
      "Documentos do SGQ",
    ],
  },
  {
    title: "QualityPro Systems",
    description:
      "Sistemas, controles e painéis para acompanhar a rotina do SGQ com mais clareza.",
    color: "green",
    icon: MonitorCog,
    items: [
      "Controle do SGQ",
      "Indicadores e dashboards",
      "Auditorias e planos de ação",
      "Fornecedores e calibração",
      "Rotinas de acompanhamento",
    ],
  },
  {
    title: "QualityPro Academy",
    description:
      "Treinamentos, apostilas e materiais editáveis para capacitar equipes.",
    color: "purple",
    icon: GraduationCap,
    items: [
      "Treinamentos em PPTX",
      "Apostilas e exercícios",
      "Materiais para instrutores",
      "Certificados editáveis",
      "Conteúdo adaptável",
    ],
  },
  {
    title: "QualityPro Consulting",
    description:
      "Ferramentas profissionais para consultores, auditores e líderes da qualidade.",
    color: "orange",
    icon: UserRound,
    items: [
      "Book de ideias",
      "Modelos de comunicação",
      "Propostas comerciais",
      "Contratos e documentos",
      "Ferramentas de consultoria",
    ],
  },
  {
    title: "QualityPro Premium",
    description:
      "Combos e pacotes completos para elevar a gestão da qualidade ao próximo nível.",
    color: "navy",
    icon: Gem,
    items: [
      "Combos especiais",
      "Packs profissionais",
      "Master pack QualityPro",
      "Soluções completas",
      "Conteúdo premium",
    ],
  },
];

const individualKits = [
  {
    id: "kit-auditoria-iso-9001",
    title: "Kit Auditoria ISO 9001",
    description:
      "Modelos profissionais para planejar, executar, registrar e acompanhar auditorias internas ISO 9001.",
    color: "blue",
    icon: ClipboardCheck,
    status: "Disponível",
    priceLabel: "R$ 97",
    items: [
      "Plano e programa de auditoria",
      "Checklist ISO 9001 e gap analysis",
      "Relatório de auditoria",
      "Qualificação de auditores",
      "Manual prático de auditoria interna",
    ],
  },
  {
    id: "kit-nao-conformidade-acao-corretiva",
    title: "Kit Não Conformidade e Ação Corretiva",
    description:
      "Documentos e controles para registrar não conformidades, tratar causas e verificar a eficácia das ações.",
    color: "orange",
    icon: BadgeCheck,
    status: "Disponível",
    priceLabel: "R$ 67",
    items: [
      "Relatório de não conformidade",
      "Controle de NC e eficácia",
      "Fluxo do processo de NC",
      "Procedimento de tratativa",
      "Acompanhamento de ações corretivas",
    ],
  },
  {
    id: "combo-auditoria-nao-conformidade",
    title: "Combo Auditoria + Não Conformidade",
    description:
      "Pacote combinado para estruturar auditorias internas e controlar não conformidades em um único conjunto.",
    color: "navy",
    icon: PackageCheck,
    status: "Disponível",
    priceLabel: "R$ 147",
    items: [
      "Kit Auditoria ISO 9001",
      "Kit Não Conformidade",
      "Fluxos, formulários e relatórios",
      "Controles de acompanhamento",
      "Materiais editáveis",
    ],
  },
  {
    id: "kit-controle-documentos",
    title: "Kit Controle de Documentos",
    description:
      "Modelos e controles para organizar documentos, registros e evidências do Sistema de Gestão da Qualidade.",
    color: "green",
    icon: MonitorCog,
    status: "Disponível",
    priceLabel: "R$ 100",
    items: [
      "Controle de documentos",
      "Listas mestras",
      "Controle de registros",
      "Modelo de procedimento",
      "Rotina de revisão e aprovação",
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
  purple: {
    icon: "bg-violet-600 text-white",
    title: "text-violet-700",
    line: "bg-violet-600",
    button:
      "border-violet-500 text-violet-700 hover:bg-violet-600 hover:text-white",
    check: "text-violet-600",
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

const benefits = [
  {
    title: "Conteúdo editável",
    text: "Personalize conforme a identidade e a rotina da empresa.",
    icon: ShieldCheck,
  },
  {
    title: "Download imediato",
    text: "Acesse os materiais e comece a aplicar com rapidez.",
    icon: DownloadCloud,
  },
  {
    title: "Desenvolvido por especialistas",
    text: "Materiais criados com experiência prática em SGQ.",
    icon: BadgeCheck,
  },
  {
    title: "Suporte especializado",
    text: "Conte com orientação para aplicar os recursos.",
    icon: Headphones,
  },
];

export default function ProdutosPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-slate-50 pt-24 text-slate-950 sm:pt-28">
        <section className="relative overflow-hidden py-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.10),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.04),transparent_32%,rgba(14,165,233,0.06))]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-5">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                Soluções para Gestão da Qualidade
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-normal text-slate-950 sm:text-6xl">
                Materiais de Apoio
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
                Materiais, sistemas e recursos profissionais desenvolvidos para
                facilitar a rotina, organizar o SGQ e apoiar melhores decisões.
              </p>
              <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-sky-500" />
            </div>

            <div className="mt-9">
              <div className="flex flex-col gap-2 text-center">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                  Kits individuais
                </p>
                <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                  Materiais prontos para apoiar a rotina da qualidade
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {individualKits.map((product) => {
                  const Icon = product.icon;
                  const styles =
                    colorStyles[product.color as keyof typeof colorStyles];

                  return (
                    <article
                      key={product.title}
                      className="relative flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-5 text-center shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/60"
                    >
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
                          <li
                            key={item}
                            className="grid grid-cols-[20px_1fr] gap-2"
                          >
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
                        priceLabel={product.priceLabel}
                        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-black uppercase tracking-wide transition sm:mt-0 ${styles.button}`}
                      />
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8">
              <div className="flex flex-col gap-2 text-center">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  Pacotes e linhas futuras
                </p>
                <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                  Combos QualityPro Solutions
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {productLines.map((product) => {
                const Icon = product.icon;
                const styles =
                  colorStyles[product.color as keyof typeof colorStyles];

                return (
                  <article
                    key={product.title}
                    className="relative flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-5 text-center shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/60"
                  >
                    <span className="absolute right-0 top-5 z-10 rotate-45 bg-slate-950 px-8 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-white shadow-md">
                      Em breve
                    </span>
                    <div
                      className={`mx-auto grid h-20 w-20 place-items-center rounded-full shadow-lg ${styles.icon}`}
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

                    <span
                      aria-disabled="true"
                      className={`mt-4 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-black uppercase tracking-wide opacity-80 sm:mt-auto ${styles.button}`}
                    >
                      Em breve
                    </span>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-7 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ title, text, icon: Icon }) => (
                <div key={title} className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sky-50 text-sky-600">
                    <Icon size={32} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-black text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-10 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Quer entender qual produto combina com sua rotina?
              </p>
              <h2 className="mt-3 max-w-3xl text-2xl font-black sm:text-3xl">
                A QualityPro Solutions pode orientar a escolha conforme a
                maturidade do seu SGQ.
              </h2>
            </div>
            <Link
              href="/#contato"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/15"
            >
              Fale conosco <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
