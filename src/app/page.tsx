import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import DashboardChart from "@/components/DashboardChart";
import Image from "next/image";

const services = [
  {
    title: "Consultoria ISO 9001",
    text: "Implementação e adequação dos processos aos requisitos da norma.",
    icon: ClipboardCheck,
  },
  {
    title: "Auditoria Interna",
    text: "Avaliação completa para identificar riscos, falhas e oportunidades.",
    icon: ShieldCheck,
  },
  {
    title: "Indicadores e KPIs",
    text: "Dashboards e métricas para acompanhar a qualidade em tempo real.",
    icon: BarChart3,
  },
  {
    title: "Mapeamento de Processos",
    text: "Fluxos claros, responsabilidades definidas e padronização.",
    icon: Workflow,
  },
  {
    title: "Treinamentos",
    text: "Capacitação prática para equipes operacionais e lideranças.",
    icon: Users,
  },
  {
    title: "Melhoria Contínua",
    text: "Planos de ação para reduzir perdas e elevar resultados.",
    icon: TrendingUp,
  },
];

const cases = [
  ["NC", "Reduzir não conformidades com análise de causa"],
  ["OEE", "Acompanhar eficiência e disponibilidade operacional"],
  ["KPIs", "Criar indicadores claros para a rotina de gestão"],
  ["PDCA", "Manter ciclos de melhoria contínua documentados"],
];

const differentials = [
  "Método alinhado à ISO 9001",
  "Estruturação de SGQ",
  "Dashboards e indicadores",
  "Foco em processo",
  "Atendimento personalizado",
  "Visão industrial e operacional",
];

const workSteps = [
  ["Diagnóstico", "Entendimento dos processos, riscos e pontos críticos."],
  ["Planejamento", "Priorização das ações, responsáveis e prazos."],
  ["Implantação", "Documentação, indicadores, rotinas e treinamentos."],
];

function Header() {
  return (
    <>
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-cyan-950/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4">
        <a href="#inicio" className="block">
          <Image
            src="/logo.png"
            alt="QualityPro Solutions"
            width={1245}
            height={451}
            priority
            className="h-auto w-32 sm:w-44"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 lg:flex">
          <a
             href="#inicio"
             className="transition hover:text-cyan-300"
>
  Início
</a>
          <a
             href="#sobre"
             className="transition hover:text-cyan-300"
>
  Sobre
</a>
          <a
             href="#servicos"
             className="transition hover:text-cyan-300"
>
  Serviços
</a>
          <a
             href="#dashboards"
             className="transition hover:text-cyan-300"
>
  Dashboards
</a>
          <a
             href="#cases"
             className="transition hover:text-cyan-300"
>
  Indicadores
</a>
          <a
             href="#contato"
             className="transition hover:text-cyan-300"
>
  Contato
</a>
        </nav>

        <a
          href="#contato"
          className="rounded-md bg-amber-400 px-2 py-2 text-[9px] font-black uppercase leading-none text-slate-950 shadow-lg shadow-amber-500/15 sm:px-5 sm:py-3 sm:text-sm sm:normal-case sm:leading-normal"
        >
          <span className="sm:hidden">Solicitar Consultoria</span>
          <span className="hidden sm:inline">Solicitar Consultoria</span>
        </a>
      </div>
    </header>
    </>
  );
}

function Metric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-lg border border-sky-400/15 bg-slate-950/75 p-3 sm:p-4">
      <p className="text-xs uppercase text-slate-400">{label}</p>
      <strong className="mt-2 block text-2xl text-white sm:text-3xl">
        {value}
      </strong>
      <span className="text-xs text-cyan-300">{detail}</span>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="w-full max-w-[22rem] min-w-0 rounded-lg border border-sky-300/20 bg-slate-950 p-3 shadow-2xl shadow-sky-950/50 sm:max-w-none sm:p-4">
      <div className="mb-4 flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Dashboard Executivo
          </p>
          <h2 className="mt-1 text-lg font-bold sm:text-xl">
            Qualidade em tempo real
          </h2>
        </div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-sky-500" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Metric label="Eficiência" value="92,4%" detail="+7% no mês" />
        <Metric label="Não conformidades" value="23" detail="-18% no mês" />
        <Metric label="PPM" value="128" detail="-42% no ano" />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="min-w-0 rounded-lg border border-slate-800 bg-slate-900/80 p-3 sm:p-4">
          <p className="mb-3 text-sm font-semibold text-slate-200">
            Evolução dos indicadores
          </p>
          <DashboardChart />
        </div>
        <div className="grid gap-3">
          <Metric label="Plano de ação" value="16" detail="itens ativos" />
          <Metric label="Retrabalho" value="3,2%" detail="queda acumulada" />
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Header />

      <section
        id="inicio"
        className="relative min-h-[100svh] overflow-hidden border-b border-sky-400/10 bg-hero pt-24 sm:min-h-[100vh] sm:pt-28"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:pt-24 lg:pb-38">
          <div className="min-w-0 max-w-[22rem] sm:max-w-xl lg:max-w-none">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Gestão - Processos - Resultados
            </p>
            <h1 className="mt-5 max-w-full text-[1.95rem] font-black leading-[1.08] sm:text-5xl md:text-6xl">
              Excelência em{" "}
              <span className="block text-cyan-300 sm:inline">
                Sistemas de Gestão
              </span>{" "}
              da Qualidade
            </h1>
            <p className="mt-5 max-w-full text-base leading-7 text-slate-300 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-8">
              Estruturamos processos, indicadores e gestão para empresas que
              querem crescer com controle, clareza e confiança.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-3.5 font-bold sm:px-6 sm:py-4"
              >
                Fale conosco <ArrowRight size={18} />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3.5 font-bold sm:px-6 sm:py-4"
              >
                Conheça os serviços <ArrowRight size={18} />
              </a>
            </div>
          </div>


        </div>

        <div className="border-t border-white/10 bg-slate-950/60">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:grid-cols-2 sm:px-5 lg:grid-cols-4">
            {[
              ["Empresa nova", "com método claro"],
              ["Foco técnico", "ISO 9001"],
              ["Estruturação", "de SGQ"],
              ["Indicadores", "para decisão"],
            ].map(([title, subtitle]) => (
              <div key={title} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 text-cyan-300">
                  <ShieldCheck size={19} />
                </span>
                <p className="text-sm">
                  <strong className="block">{title}</strong>
                  <span className="text-slate-400">{subtitle}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-slate-50 py-14 text-slate-950 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="rounded-lg bg-white p-3 shadow-xl ring-1 ring-slate-200 sm:p-5">
            <div className="rounded-lg bg-office-panel p-3 sm:p-5">
              <div className="rounded-lg bg-slate-950 p-4 text-white shadow-lg sm:p-5">
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                      Roteiro ISO 9001
                    </p>
                    <h3 className="mt-2 text-xl font-black sm:text-2xl">
                      SGQ estruturado por etapas
                    </h3>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <ClipboardCheck size={28} />
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    ["01", "Diagnóstico", "Mapeamento de processos, lacunas e riscos."],
                    ["02", "Padronização", "Procedimentos, registros e responsabilidades."],
                    ["03", "Indicadores", "KPIs, metas, análise crítica e plano de ação."],
                    ["04", "Auditoria", "Verificação interna e melhoria contínua."],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="grid grid-cols-[40px_1fr] gap-3 rounded-lg border border-sky-300/15 bg-slate-900/80 p-3 sm:grid-cols-[48px_1fr] sm:gap-4 sm:p-4"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-md bg-sky-500/15 text-sm font-black text-cyan-300 sm:h-10 sm:w-10">
                        {number}
                      </span>
                      <div>
                        <strong className="block">{title}</strong>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Sobre a empresa"
              title="Excelência que começa com processo bem estruturado"
            />
            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              A QualityPro Solutions nasce para apoiar empresas na organização
              de Sistemas de Gestão da Qualidade, com consultoria ISO 9001,
              auditorias, indicadores e melhoria contínua aplicados de forma
              prática.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Missão", "Gerar valor por meio de soluções em gestão."],
                ["Visão", "Ser referência nacional em qualidade."],
                ["Valores", "Ética, compromisso e excelência."],
                ["Foco", "Resultados sustentáveis e melhoria contínua."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <Award className="text-sky-500" size={22} />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-slate-950 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Nossos serviços"
            title="Soluções completas para elevar a gestão da qualidade"
          />

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-sky-300/15 bg-slate-900/70 p-5 sm:p-6"
                >
                  <Icon className="text-cyan-300" size={32} />
                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    {service.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dashboards" className="bg-dashboard py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-5 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <div>
            <SectionTitle
              eyebrow="Dashboards visuais"
              title="Transformamos dados em decisões estratégicas"
            />
            <div className="mt-8 grid gap-3">
              {[
                "Dashboards Power BI",
                "KPIs industriais",
                "Indicadores ISO 9001",
                "Gestão de não conformidades",
                "Planos de ação",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-cyan-300" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <section id="cases" className="bg-slate-50 py-14 text-slate-950 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Indicadores de gestão"
            title="O que ajudamos sua empresa a acompanhar"
          />

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-4">
            {cases.map(([value, title]) => (
              <article
                key={title}
                className="rounded-lg bg-case-card p-5 text-white shadow-lg sm:p-6"
              >
                <p className="text-sm uppercase tracking-widest text-cyan-300">
                  Indicador
                </p>
                <h3 className="mt-4 text-lg font-bold md:min-h-20">{title}</h3>
                <strong className="mt-7 block text-4xl text-cyan-300 sm:mt-8 sm:text-5xl">
                  {value}
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Método de trabalho"
            title="Como conduzimos cada projeto"
          />

          <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-6">
            {workSteps.map(([title, text], index) => (
              <article
                key={title}
                className="rounded-lg border border-sky-300/15 bg-slate-900/70 p-5 sm:p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-sky-500/15 text-sm font-black text-cyan-300">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 text-slate-950 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que escolher a QualityPro Solutions?"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((item) => (
              <p key={item} className="flex items-center gap-3 font-bold">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Award size={20} />
                </span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-slate-900 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div>
            <SectionTitle
              eyebrow="Fale conosco"
              title="Leve sua gestão da qualidade para outro nível"
            />
            <p className="mt-5 leading-7 text-slate-300">
              Entre em contato e descubra como podemos transformar sua gestão em
              resultados reais.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <p className="flex items-center gap-3">
                <Phone className="text-cyan-300" size={20} /> (11) 99999-9999
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-cyan-300" size={20} />
                contato@qualitypro.com.br
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-cyan-300" size={20} /> Rio de Janeiro - RJ
              </p>
            </div>
          </div>

          <form className="grid gap-4 rounded-lg border border-sky-300/15 bg-slate-950/45 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Nome" className="input-field" />
              <input placeholder="E-mail" className="input-field" />
              <input placeholder="Telefone" className="input-field" />
              <input placeholder="Empresa" className="input-field" />
            </div>
            <textarea
              placeholder="Como podemos ajudar sua empresa?"
              rows={5}
              className="input-field resize-none"
            />
            <button
              type="button"
              className="w-full rounded-md bg-amber-400 px-6 py-3 font-bold text-slate-950 sm:w-fit"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-10 text-center text-sm text-slate-400">
        QualityPro Solutions - qualidade com propósito.
      </footer>
    </main>
  );
}
