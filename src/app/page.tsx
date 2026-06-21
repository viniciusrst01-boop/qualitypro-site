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
import DashboardShowcase from "@/components/DashboardShowcase";
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

const cases = [
  ["NC", "Reduzir não conformidades com análise de causa"],
  ["OEE", "Acompanhar eficiência e disponibilidade operacional"],
  ["KPIs", "Criar indicadores claros para a rotina de gestão"],
  ["PDCA", "Manter ciclos de melhoria contínua documentados"],
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
  ["Diagnóstico", "Entendimento dos processos, riscos e pontos críticos."],
  ["Planejamento", "Priorização das ações, responsáveis e prazos."],
  ["Implantação", "Documentação, indicadores, rotinas e treinamentos."],
  [
    "Acompanhamento",
    "Verificação dos resultados, ajustes e orientação das equipes.",
  ],
];

const qualityChallenges = [
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
        className="relative isolate min-h-[100svh] overflow-hidden border-b border-sky-400/10 bg-hero pt-24 sm:pt-24"
      >
        <HeroQualityDashboard />

        <div className="qhd-hero-content relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-4 py-8 sm:min-h-[520px] sm:px-5 sm:py-8 lg:min-h-[500px] lg:py-6">
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
                className="qhd-hero-button inline-flex items-center justify-center gap-2 rounded-md border border-sky-400 bg-sky-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-sky-500/15 transition hover:border-sky-300 hover:bg-sky-400 sm:px-6 sm:py-4"
              >
                Fale conosco <ArrowRight size={18} />
              </TrackedLink>
              <TrackedLink
                href="#servicos"
                eventLabel="Ver Serviços"
                eventLocation="hero"
                className="qhd-hero-button inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/35 bg-slate-950/45 px-5 py-3.5 font-bold backdrop-blur-sm transition hover:border-cyan-300 hover:bg-cyan-400/10 sm:px-6 sm:py-4"
              >
                Ver Serviços <ArrowRight size={18} />
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
        className="scroll-mt-24 bg-white py-14 text-slate-950 sm:scroll-mt-28 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Sobre nós"
            title="Conheça a QualityPro e o propósito que orienta nosso trabalho"
          />

          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-100 text-sky-600">
                  <Building2 size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-black">Quem somos</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    A QualityPro Solutions é uma consultoria voltada à
                    organização e estruturação de Sistemas de Gestão da
                    Qualidade. Atuamos com ISO 9001, auditorias, padronização de
                    processos, indicadores e melhoria contínua.
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
                    Cada projeto parte da realidade e do nível de maturidade da
                    organização para criar documentos, controles e rotinas que
                    façam sentido para as equipes e apoiem a gestão.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-100 text-sky-600">
                  <Target size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-black">Nosso propósito</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Tornar a qualidade uma ferramenta útil para a gestão, e não
                    apenas uma exigência documental ou um conjunto de controles
                    mantidos para auditorias.
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
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
        id="desafios"
        className="scroll-mt-24 bg-slate-50 py-14 text-slate-950 sm:scroll-mt-28 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="lg:sticky lg:top-28">
              <SectionTitle
                eyebrow="Desafios da qualidade"
                title="Quando o sistema existe, mas ainda não apoia a gestão"
              />
              <div className="mt-6 space-y-4 leading-7 text-slate-600">
                <p>
                  Documentos sem padrão, indicadores pouco claros e problemas
                  recorrentes costumam ter a mesma origem: falta de método,
                  acompanhamento ou responsabilidades bem definidas.
                </p>
              </div>
              <p className="mt-7 border-l-2 border-cyan-500 pl-4 text-sm font-semibold leading-6 text-slate-700">
                Identificar esses sinais ajuda a escolher por onde começar e
                quais ações podem gerar maior impacto.
              </p>
            </div>

            <div className="rounded-lg bg-white p-3 shadow-xl ring-1 ring-slate-200 sm:p-4 lg:w-full lg:max-w-[620px] lg:justify-self-end">
              <div className="rounded-lg bg-office-panel p-3 sm:p-4">
                <div className="h-full rounded-lg bg-slate-950 p-5 text-white shadow-lg sm:p-6">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                        Sinais de atenção
                      </p>
                      <h3 className="mt-2 max-w-[390px] text-xl font-black sm:text-2xl">
                        Sua empresa enfrenta algum destes desafios?
                      </h3>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                      <SearchCheck size={27} />
                    </span>
                  </div>

                  <div className="mt-5 grid gap-2.5">
                    {qualityChallenges.map((challenge) => (
                      <p
                        key={challenge}
                        className="flex items-start gap-3 rounded-lg border border-sky-300/15 bg-slate-900/80 p-3 text-sm leading-6 text-slate-300 lg:items-center lg:whitespace-nowrap lg:text-[13px] xl:text-sm"
                      >
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-cyan-300"
                          size={18}
                        />
                        {challenge}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-slate-950 py-14 sm:py-20">
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
        className="hidden overflow-hidden border-y border-cyan-400/10 bg-[#071426] py-16 lg:block"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.72fr]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Da estrutura ao acompanhamento
            </p>
            <h2
              id="processos-indicadores-title"
              className="mt-4 text-4xl font-black leading-tight text-white"
            >
              Processos estruturados geram indicadores mais claros
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Depois de organizar rotinas, responsabilidades e controles, os
              indicadores ajudam a enxergar prioridades, acompanhar resultados
              e direcionar melhorias com mais segurança.
            </p>
          </div>

          <HeroProcessRadar placement="section" />
        </div>
      </section>

      <section id="dashboards" className="bg-dashboard py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-5 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <div>
            <SectionTitle
              eyebrow="Indicadores organizados"
              title="Organizamos indicadores para apoiar decisões"
            />
            <div className="mt-8 grid gap-3">
              {[
                "Painéis de acompanhamento",
                "Indicadores operacionais e da qualidade",
                "Não conformidades e ações",
                "Metas e prazos",
                "Análise de tendências",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-cyan-300" size={20} />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-cyan-300/70 pl-4 text-sm leading-6 text-slate-400">
              Os painéis e dados apresentados são demonstrações visuais e
              possuem valores meramente ilustrativos.
            </p>
          </div>

          <DashboardShowcase />
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

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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

      <section
        id="diferenciais"
        className="bg-white py-14 text-slate-950 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que escolher a QualityPro Solutions?"
          />

          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1.15fr_0.95fr_0.9fr]">
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Award size={23} />
                </span>
                <h3 className="text-lg font-black">
                  Diferenciais da QualityPro
                </h3>
              </div>
              <div className="mt-5 grid gap-3">
                {differentials.map((item) => (
                  <p
                    key={item}
                    className="grid grid-cols-[44px_1fr] items-start gap-3 text-sm leading-6 text-slate-600 lg:whitespace-nowrap lg:text-[13px]"
                  >
                    <span className="grid h-6 w-11 place-items-center text-sky-500">
                      <CheckCircle2 size={18} />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <HeartHandshake size={23} />
                </span>
                <h3 className="text-lg font-black">
                  Benefícios para o cliente
                </h3>
              </div>
              <div className="mt-5 grid gap-3">
                {clientBenefits.map((benefit) => (
                  <p
                    key={benefit}
                    className="grid grid-cols-[44px_1fr] items-start gap-3 text-sm leading-6 text-slate-600 lg:whitespace-nowrap lg:text-[13px]"
                  >
                    <span className="grid h-6 w-11 place-items-center text-sky-500">
                      <CheckCircle2 size={18} />
                    </span>
                    {benefit}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
                  <Headphones size={23} />
                </span>
                <h3 className="whitespace-nowrap text-sm font-black sm:text-lg">
                  Modalidades de atendimento
                </h3>
              </div>
              <div className="mt-5 divide-y divide-slate-200">
                {serviceModes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <div
                      key={mode.title}
                      className="grid grid-cols-[44px_1fr] items-start gap-3 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="grid h-8 w-11 place-items-center rounded-lg bg-sky-50 text-sky-600">
                        <Icon size={21} />
                      </span>
                      <div>
                        <h4 className="flex h-8 items-center font-black uppercase text-sky-700">
                          {mode.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {mode.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>

          <div className="mt-4 flex items-start gap-4 rounded-lg border border-amber-300/60 bg-amber-50 p-5 sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber-400 text-slate-950">
              <TrendingUp size={23} />
            </span>
            <p className="text-sm font-semibold leading-7 text-slate-700 sm:text-base">
              Nosso compromisso é transformar requisitos e necessidades em
              práticas que a equipe consiga entender, utilizar e manter.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-slate-900 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div>
            <SectionTitle
              eyebrow="Fale conosco"
              title="Conte qual desafio sua empresa enfrenta"
            />
            <p className="mt-5 leading-7 text-slate-300">
              Envie uma breve descrição. Entraremos em contato para entender o
              cenário e indicar os próximos passos.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
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
            <div className="mt-5 space-y-2 font-mono text-xs text-slate-300 sm:text-sm">
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
