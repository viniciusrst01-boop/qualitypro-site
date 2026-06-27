import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Blend,
  Headphones,
  HeartHandshake,
  Mail,
  MapPin,
  Monitor,
  SearchCheck,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import HeroQualityDashboard from "@/components/HeroQualityDashboard";
import HeroProcessRadar from "@/components/HeroProcessRadar";
import ServicesGrid from "@/components/ServicesGrid";
import TrackedLink from "@/components/TrackedLink";
import Link from "next/link";

const heroServices = [
  {
    title: "ISO 9001",
    text: "Implantação e adequação à norma com foco em resultados.",
    icon: BadgeCheck,
  },
  {
    title: "Auditoria Interna",
    text: "Avaliação imparcial para identificar oportunidades de melhoria.",
    icon: ClipboardCheck,
  },
  {
    title: "Consultoria de Manutenção",
    text: "Rotinas, controles e registros para maior confiabilidade.",
    icon: Wrench,
  },
  {
    title: "Diagnóstico SGQ",
    text: "Análise do sistema de gestão com plano de ação objetivo.",
    icon: SearchCheck,
  },
  {
    title: "Padronização de Processos",
    text: "Processos claros e responsabilidades bem definidas.",
    icon: Workflow,
  },
];

const differentials = [
  "Diagnóstico conectado à rotina da empresa",
  "Orientação direta e aplicável",
  "Controles proporcionais à necessidade",
  "Integração entre documentos, processos e resultados",
  "Comunicação clara com as equipes",
  "Apoio à digitalização dos controles",
  "Desenvolvimento das pessoas responsáveis",
  "Atendimento conforme a maturidade da empresa",
];

const clientBenefits = [
  "Rotinas mais organizadas",
  "Responsabilidades mais claras",
  "Menos falhas e retrabalho",
  "Registros fáceis de localizar",
  "Auditorias mais bem preparadas",
  "Equipes orientadas para executar",
  "Processos consistentes",
  "Dados úteis para decidir",
  "Melhor acompanhamento das ações",
  "Sistema sustentável no dia a dia",
];

const serviceModes = [
  {
    title: "Online",
    text: "Ideal para reuniões, análise documental, treinamentos, desenvolvimento de documentos, indicadores e suporte técnico remoto.",
    icon: Monitor,
  },
  {
    title: "Presencial",
    text: "Ideal para diagnósticos em campo, auditorias, treinamentos e acompanhamento da implantação dos processos.",
    icon: UsersRound,
  },
  {
    title: "Híbrido",
    text: "Combinação de atendimento online e presencial, oferecendo mais flexibilidade, melhor custo-benefício e proximidade.",
    icon: Blend,
  },
];

const workSteps = [
  {
    title: "Diagnóstico",
    text: "Leitura da rotina, riscos, documentos e pontos críticos.",
    icon: ClipboardCheck,
  },
  {
    title: "Planejamento",
    text: "Definição das prioridades, responsáveis e prazos.",
    icon: UsersRound,
  },
  {
    title: "Implantação",
    text: "Organização de documentos, controles e treinamentos.",
    icon: Workflow,
  },
  {
    title: "Acompanhamento",
    text: "Indicadores, ajustes e orientação para manter a evolução.",
    icon: Target,
  },
];

const qualityChallengeCards = [
  "O SGQ existe, mas falta controle e acompanhamento efetivo",
  "Documentos e registros estão espalhados e sem padrão",
  "Faltam indicadores claros para medir resultados",
  "Auditorias não geram melhorias concretas",
  "A certificação é mantida, mas o sistema não evolui",
  "As equipes não recebem treinamento adequado",
  "As mesmas não conformidades continuam surgindo",
  "Cada setor trabalha de uma forma diferente",
  "Os controles dependem de planilhas e processos manuais",
];

const teamHighlights = [
  "Formação multidisciplinar em qualidade, produção, liderança e engenharia",
  "Auditores Líderes ISO 9001, Lean Six Sigma e ferramentas da qualidade",
  "Vivência prática em SGQ, auditorias, inspeções, metrologia e indicadores",
  "Apoio à digitalização de controles, planilhas e rotinas operacionais",
];

const teamQualifications = [
  ["ISO 9001", "interpretação, aplicação e preparação para auditorias"],
  ["SGQ", "organização, manutenção e melhoria de sistemas de gestão"],
  ["Processos", "padronização, controles, checklists e evidências"],
  ["Tecnologia", "Sistemas aplicados à gestão e indicadores"],
];

function SectionTitle({
  eyebrow,
  title,
  singleLine = false,
  pill = false,
  strongEyebrow = false,
}: {
  eyebrow: string;
  title: string;
  singleLine?: boolean;
  pill?: boolean;
  strongEyebrow?: boolean;
}) {
  return (
    <div>
      <p
        className={
          pill
            ? "inline-flex rounded-full border border-cyan-300/60 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700"
            : `text-xs font-bold uppercase tracking-widest ${
                strongEyebrow ? "text-cyan-700" : "text-cyan-400"
              }`
        }
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-2xl font-black leading-tight sm:text-3xl md:text-4xl ${
          singleLine ? "max-w-none md:whitespace-nowrap" : "max-w-2xl"
        }`}
      >
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
        className="relative isolate min-h-[100svh] overflow-hidden border-b border-sky-400/10 bg-hero pt-24 sm:pt-24"
      >
        <HeroQualityDashboard />

        <div className="qhd-hero-content relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl items-start px-4 py-7 sm:min-h-[520px] sm:items-center sm:px-5 sm:py-8 lg:min-h-[500px] lg:py-6">
          <div className="qhd-hero-copy relative min-w-0 max-w-[22rem] sm:max-w-xl lg:top-[18px] lg:max-w-[30rem] xl:max-w-[34rem]">
            <p className="qhd-hero-kicker text-xs font-bold uppercase tracking-widest text-cyan-300 lg:w-max lg:max-w-none lg:whitespace-nowrap">
              ISO 9001 • Auditorias • Conformidade • Padronização • Melhoria
              Contínua
            </p>
            <h1 className="qhd-hero-title mt-5 max-w-full text-[2.15rem] font-black leading-[1.08] sm:text-5xl lg:text-[2.75rem] xl:text-5xl 2xl:text-[3.45rem]">
              SGQ estruturado para gerar{" "}
              <span className="text-cyan-300">conformidade e resultados</span>
            </h1>
            <p className="qhd-hero-description mt-5 max-w-full text-base leading-7 text-slate-300 sm:mt-6 sm:max-w-xl">
              Apoiamos sua empresa na implantação da ISO 9001, auditorias internas e padronização de processos.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <TrackedLink
                href="#contato"
                eventLabel="Fale conosco"
                eventLocation="hero"
                className="qhd-hero-button inline-flex items-center justify-center gap-2 rounded-md border border-sky-400 bg-sky-500 px-[1.1rem] py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/15 transition hover:border-sky-300 hover:bg-sky-400 sm:px-5 sm:py-3.5 sm:text-base"
              >
                Fale conosco <ArrowRight size={17} />
              </TrackedLink>
              <TrackedLink
                href="#servicos"
                eventLabel="Ver Serviços"
                eventLocation="hero"
                className="qhd-hero-button inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/35 bg-slate-950/45 px-[1.1rem] py-3 text-sm font-bold backdrop-blur-sm transition hover:border-cyan-300 hover:bg-cyan-400/10 sm:px-5 sm:py-3.5 sm:text-base"
              >
                Ver Serviços <ArrowRight size={17} />
              </TrackedLink>
            </div>
          </div>
        </div>

        <div className="hero-service-strip qhd-hero-services relative z-20 mx-auto hidden w-full max-w-[96rem] px-4 pb-5 lg:block xl:px-5">
          <div className="hero-service-strip-grid qhd-hero-services-grid grid grid-cols-5 gap-3">
            {heroServices.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="hero-service-strip-item qhd-hero-service-card flex min-h-[142px] items-start gap-4 rounded-lg border border-cyan-300/25 bg-[#031127]/90 p-4 shadow-lg shadow-slate-950/25 backdrop-blur-md"
              >
                <span className="hero-service-icon-box">
                  <Icon
                    className="qhd-hero-service-icon shrink-0 text-cyan-300"
                    size={24}
                    strokeWidth={1.7}
                  />
                </span>
                <div className="min-w-0">
                  <h2 className="qhd-hero-service-title text-base font-bold leading-6 text-white">
                    {title}
                  </h2>
                  <p className="qhd-hero-service-text mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="scroll-mt-24 bg-white py-10 text-slate-950 sm:scroll-mt-28 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Sobre nós"
            title="Conheça a QualityPro Solutions e o propósito que orienta nosso trabalho"
            strongEyebrow
          />

          <div className="mt-6 grid items-stretch gap-3 sm:mt-8 lg:grid-cols-2 lg:gap-6">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-100 text-sky-600 sm:h-11 sm:w-11">
                  <Building2 size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-black">Quem somos</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    A QualityPro Solutions é uma consultoria voltada à
                    organização e estruturação de Sistemas de Gestão da
                    Qualidade. Atuamos com ISO 9001, auditorias, padronização de
                    processos, indicadores e melhoria contínua.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    Cada projeto parte da realidade e do nível de maturidade da
                    organização para criar documentos, controles e rotinas que
                    façam sentido para as equipes e apoiem a gestão.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-100 text-sky-600 sm:h-11 sm:w-11">
                  <Target size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-black">Nosso propósito</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    Tornar a qualidade uma ferramenta útil para a gestão, e não
                    apenas uma exigência documental ou um conjunto de controles
                    mantidos para auditorias.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    Buscamos construir sistemas compreensíveis e sustentáveis,
                    com responsabilidades definidas e informações confiáveis
                    para orientar o trabalho diário.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="qualificacoes"
        className="bg-slate-50 py-10 text-slate-950 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:gap-8 sm:px-5 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/60 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
              Qualificações da equipe
            </span>
            <h2 className="mt-5 max-w-2xl text-2xl font-black leading-tight tracking-normal text-slate-950 sm:mt-6 sm:text-4xl lg:text-5xl">
              Competência técnica para estruturar a qualidade na prática
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
              A QualityPro Solutions reúne experiência prática em ambientes
              industriais, Sistemas de Gestão da Qualidade, auditorias,
              inspeções, metrologia, indicadores e melhoria contínua.
            </p>

            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
              {teamHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-500 text-white sm:h-8 sm:w-8">
                    <CheckCircle2 size={16} strokeWidth={2.4} />
                  </span>
                  <p className="text-sm font-semibold leading-5 text-slate-800 sm:text-base sm:leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-cyan-300/20 bg-slate-950 p-4 text-white shadow-2xl shadow-cyan-950/20 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <Award size={24} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Base técnica
                </p>
                <h3 className="mt-1 text-2xl font-black">
                  Formação aplicada ao SGQ
                </h3>
              </div>
            </div>

            <div className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">
              {teamQualifications.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-lg border border-cyan-300/15 bg-white/[0.04] p-3 sm:p-4"
                >
                  <strong className="text-base text-cyan-300 sm:text-lg">{title}</strong>
                  <p className="mt-1.5 text-sm leading-5 text-slate-300 sm:mt-2 sm:leading-6">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 border-l-2 border-cyan-300/70 pl-4 text-sm leading-6 text-slate-300 sm:mt-6">
              Unimos qualidade, processos e tecnologia para criar controles
              simples, rastreáveis e sustentáveis para a rotina da empresa.
            </p>
          </aside>
        </div>
      </section>

      <section
        id="desafios"
        className="scroll-mt-24 bg-slate-50 py-10 text-slate-950 sm:scroll-mt-28 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="lg:sticky lg:top-28">
              <SectionTitle
                eyebrow="Desafios da qualidade"
                title="Quando o sistema existe, mas ainda não apoia a gestão"
                strongEyebrow
              />
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
                <p>
                  Documentos sem padrão, indicadores pouco claros e problemas
                  recorrentes costumam ter a mesma origem: falta de método,
                  acompanhamento ou responsabilidades bem definidas.
                </p>
              </div>
              <p className="mt-5 border-l-2 border-cyan-500 pl-4 text-sm font-semibold leading-6 text-slate-700 sm:mt-7">
                Identificar esses sinais ajuda a escolher por onde começar e
                quais ações podem gerar maior impacto.
              </p>
            </div>

            <div className="rounded-lg border border-cyan-300/20 bg-slate-950 p-4 text-white shadow-2xl shadow-cyan-950/20 sm:p-6 lg:w-full lg:max-w-[660px] lg:justify-self-end">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  <SearchCheck size={24} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Sinais de atenção
                  </p>
                  <h3 className="mt-1 text-xl font-black sm:text-2xl">
                    Sua empresa enfrenta algum destes desafios?
                  </h3>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:mt-6 sm:gap-2.5">
                {qualityChallengeCards.map((challenge) => (
                  <p
                    key={challenge}
                    className="grid grid-cols-[24px_1fr] items-center gap-2.5 rounded-lg border border-cyan-300/15 bg-white/[0.04] px-3 py-2.5 text-sm leading-5 text-slate-200 sm:px-4 sm:py-3 sm:text-[15px] lg:whitespace-nowrap"
                  >
                    <CheckCircle2
                      className="text-cyan-300"
                      size={18}
                      strokeWidth={2.4}
                    />
                    <span>{challenge}</span>
                  </p>
                ))}
              </div>

              <p className="mt-5 border-l-2 border-cyan-300/70 pl-4 text-sm leading-6 text-slate-300 sm:mt-6">
                Esses sinais mostram onde o SGQ precisa ganhar método,
                rastreabilidade e acompanhamento para funcionar melhor na rotina.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="servicos" className="bg-slate-950 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Nossos serviços"
            title="Apoio técnico para estruturar e melhorar seu sistema de gestão"
          />

          <ServicesGrid />
        </div>
      </section>

      <section
        aria-labelledby="processos-indicadores-title"
        className="hidden overflow-hidden bg-slate-950 py-14 lg:block"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.72fr]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Processos, controles e indicadores
            </p>
            <h2
              id="processos-indicadores-title"
              className="mt-4 text-4xl font-black leading-tight text-white"
            >
              Indicadores só funcionam quando o processo está organizado
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Antes de medir resultados, estruturamos rotinas, documentos,
              responsabilidades e controles. Assim, os indicadores deixam de
              ser apenas números e passam a orientar decisões reais.
            </p>
          </div>

          <HeroProcessRadar placement="section" />
        </div>
      </section>

      <section className="bg-slate-950 pb-10 pt-2 sm:pb-20 sm:pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Método de trabalho"
            title="Como transformamos diagnóstico em rotina de gestão"
          />

          <div className="work-timeline mt-7 sm:mt-12">
            {workSteps.map(({ title, text, icon: Icon }, index) => (
              <div key={title} className="work-step-flow-item">
                <article className="work-step-flow-card">
                  <Icon
                    className="mx-auto text-[var(--step-color)]"
                    size={58}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <h3 className="mt-6 text-center text-xl font-bold sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[16rem] text-center leading-7 text-slate-300">
                    {text}
                  </p>
                </article>
                {index < workSteps.length - 1 && (
                  <ArrowRight
                    className="work-step-arrow"
                    size={46}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="diferenciais"
        className="bg-white py-10 text-slate-950 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que escolher a QualityPro Solutions?"
            singleLine
            strongEyebrow
          />

          <div className="mt-6 grid items-stretch gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-[1.15fr_0.95fr_0.9fr]">
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Award size={23} />
                </span>
                <h3 className="text-lg font-black">
                  Diferenciais da QualityPro Solutions
                </h3>
              </div>
              <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                {differentials.map((item) => (
                  <p
                    key={item}
                    className="grid grid-cols-[32px_1fr] items-start gap-2 text-sm leading-5 text-slate-600 sm:grid-cols-[44px_1fr] sm:gap-3 sm:leading-6 lg:whitespace-nowrap lg:text-[13px]"
                  >
                    <span className="grid h-5 w-8 place-items-center text-sky-500 sm:h-6 sm:w-11">
                      <CheckCircle2 size={16} />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <HeartHandshake size={23} />
                </span>
                <h3 className="text-lg font-black">
                  Benefícios para o cliente
                </h3>
              </div>
              <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                {clientBenefits.map((benefit) => (
                  <p
                    key={benefit}
                    className="grid grid-cols-[32px_1fr] items-start gap-2 text-sm leading-5 text-slate-600 sm:grid-cols-[44px_1fr] sm:gap-3 sm:leading-6 lg:whitespace-nowrap lg:text-[13px]"
                  >
                    <span className="grid h-5 w-8 place-items-center text-sky-500 sm:h-6 sm:w-11">
                      <CheckCircle2 size={16} />
                    </span>
                    {benefit}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Headphones size={23} />
                </span>
                <h3 className="whitespace-nowrap text-sm font-black sm:text-lg">
                  Modalidades de atendimento
                </h3>
              </div>
              <div className="mt-4 divide-y divide-slate-200 sm:mt-5">
                {serviceModes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <div
                      key={mode.title}
                      className="grid grid-cols-[36px_1fr] items-start gap-3 py-3 first:pt-0 last:pb-0 sm:grid-cols-[44px_1fr] sm:py-4"
                    >
                      <span className="grid h-8 w-9 place-items-center rounded-lg bg-sky-50 text-sky-600 sm:w-11">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h4 className="flex h-8 items-center font-black uppercase text-sky-700">
                          {mode.title}
                        </h4>
                        <p className="mt-1 text-sm leading-5 text-slate-600 sm:leading-6">
                          {mode.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>

          <div className="mt-3 flex items-start gap-3 rounded-lg border border-amber-300/60 bg-amber-50 p-4 sm:mt-4 sm:gap-4 sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber-400 text-slate-950">
              <TrendingUp size={23} />
            </span>
            <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base sm:leading-7">
              Nosso compromisso é transformar requisitos e necessidades em
              práticas que a equipe consiga entender, utilizar e manter.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-slate-900 py-10 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div>
            <SectionTitle
              eyebrow="Fale conosco"
              title="Conte qual desafio sua empresa enfrenta"
            />
            <p className="mt-4 text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
              Envie uma breve descrição. Entraremos em contato para entender o
              cenário e indicar os próximos passos.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-200 sm:mt-8 sm:space-y-4 sm:text-base">
              <a
                href="mailto:contato@qualityprosolutions.com.br"
                className="flex items-center gap-3 transition hover:text-cyan-300"
              >
                <Mail className="text-cyan-300" size={20} />
                contato@qualityprosolutions.com.br
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="text-cyan-300" size={20} /> Rio de Janeiro - RJ
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-sky-400/10 bg-slate-950 px-4 py-10 text-sm text-slate-400 sm:px-5">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <h2 className="text-base font-black text-white">
              QualityPro Solutions
            </h2>
            <p className="mt-2 text-slate-300">
              Consultoria em Gestão da Qualidade
            </p>
            <div className="mt-5 space-y-2 text-sm font-medium text-slate-300">
              <a
                href="mailto:contato@qualityprosolutions.com.br"
                className="block transition hover:text-cyan-300"
              >
                contato@qualityprosolutions.com.br
              </a>
              <a
                href="https://www.qualityprosolutions.com.br"
                className="block transition hover:text-cyan-300"
              >
                www.qualityprosolutions.com.br
              </a>
            </div>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              Institucional
            </h3>
            <div className="mt-4 grid gap-2">
              <Link href="/politica-de-privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-white">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 QualityPro Solutions. Todos os direitos reservados.</p>
          <p>Qualidade com propósito.</p>
        </div>
      </footer>
    </main>
  );
}
