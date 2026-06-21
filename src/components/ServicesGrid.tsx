"use client";

import { track } from "@vercel/analytics";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Presentation,
  SearchCheck,
  TrendingUp,
  Truck,
  Wrench,
  Workflow,
} from "lucide-react";
import { useId, useState } from "react";

const services = [
  {
    title: "Consultoria para implantação ISO 9001",
    text: "Apoio técnico para implantação ou adequação do sistema aos requisitos da ISO 9001, preparando a empresa para auditorias e certificação.",
    detail:
      "Traduzimos os requisitos da norma para a realidade da organização e acompanhamos a adequação dos processos até a preparação para as auditorias.",
    deliverables: [
      "Análise de aderência aos requisitos da ISO 9001",
      "Adequação de processos, documentos e evidências",
      "Orientação das equipes e responsáveis",
      "Preparação técnica para auditorias",
    ],
    result:
      "Maior segurança e organização no processo de preparação para certificação.",
    icon: BadgeCheck,
  },
  {
    title: "Auditoria Interna",
    text: "Planejamento e execução de auditorias internas com foco em evidências, conformidade, eficácia, riscos e oportunidades de melhoria.",
    detail:
      "Avaliamos se os processos e controles estão sendo aplicados e se permanecem eficazes, registrando evidências e oportunidades de evolução.",
    deliverables: [
      "Planejamento e programa de auditoria",
      "Entrevistas, amostragens e análise de evidências",
      "Registro de constatações e não conformidades",
      "Relatório com recomendações e prioridades",
    ],
    result:
      "Uma avaliação independente para fortalecer o sistema antes das auditorias externas.",
    icon: ClipboardCheck,
  },
  {
    title: "Consultoria de Manutenção",
    text: "Estruturação das rotinas de manutenção, controles, registros, planos preventivos e oportunidades de melhoria para maior confiabilidade operacional.",
    detail:
      "Apoiamos a organização das rotinas de manutenção para que planos, registros, evidências e controles sejam acompanhados de forma consistente.",
    deliverables: [
      "Estruturação de planos e registros de manutenção",
      "Análise de aderência às rotinas definidas",
      "Identificação de riscos e oportunidades",
      "Recomendações para aumentar a confiabilidade",
    ],
    result:
      "Rotinas de manutenção mais controladas, rastreáveis e alinhadas à operação.",
    icon: Wrench,
  },
  {
    title: "Auditoria de Fornecedor",
    text: "Avaliação técnica de fornecedores quanto a processos, controles, atendimento aos requisitos e confiabilidade do fornecimento.",
    detail:
      "Verificamos a capacidade do fornecedor de atender aos requisitos acordados e os riscos que podem afetar a qualidade ou a continuidade do fornecimento.",
    deliverables: [
      "Definição de critérios e escopo da avaliação",
      "Auditoria documental, remota ou presencial",
      "Análise de controles e riscos do fornecimento",
      "Relatório técnico para apoio à decisão",
    ],
    result:
      "Mais confiança na seleção, homologação e acompanhamento dos fornecedores.",
    icon: Truck,
  },
  {
    title: "Consultoria para implantação SGQ",
    text: "Estruturação completa do Sistema de Gestão da Qualidade, conforme o contexto da organização, com escopo, responsabilidades e rotinas de gestão.",
    detail:
      "Estruturamos o sistema de forma compatível com o porte, a operação e a maturidade da empresa, evitando controles que não agregam valor à rotina.",
    deliverables: [
      "Definição do escopo e dos processos do SGQ",
      "Distribuição de responsabilidades e autoridades",
      "Criação de documentos, registros e controles",
      "Implantação de rotinas de acompanhamento",
    ],
    result:
      "Um sistema organizado, aplicável e integrado à gestão da empresa.",
    icon: SearchCheck,
  },
  {
    title: "Projetos de Melhoria Contínua",
    text: "Aplicação de métodos e ferramentas para reduzir falhas, desperdícios e retrabalho, melhorando a rastreabilidade e o desempenho dos processos.",
    detail:
      "Conduzimos melhorias com método, responsáveis e acompanhamento, transformando problemas recorrentes em ações verificáveis.",
    deliverables: [
      "Priorização do problema e definição de metas",
      "Análise de causas e riscos envolvidos",
      "Plano de ação com responsáveis e prazos",
      "Acompanhamento da execução e da eficácia",
    ],
    result:
      "Melhorias sustentadas por evidências, com menos reincidência e maior controle.",
    icon: TrendingUp,
  },
  {
    title: "Treinamentos",
    text: "Capacitação prática e técnica em qualidade, ISO 9001, auditorias, não conformidades, indicadores, ferramentas da qualidade e melhoria contínua.",
    detail:
      "Preparamos conteúdos aplicáveis à rotina da empresa, conectando conceitos técnicos a exemplos e situações vividas pelas equipes.",
    deliverables: [
      "Conteúdo adaptado ao público e ao objetivo",
      "Material de apoio e exercícios práticos",
      "Aplicação online, presencial ou híbrida",
      "Registro de participação e avaliação",
    ],
    result:
      "Equipes mais preparadas para aplicar os controles e sustentar as melhorias.",
    icon: Presentation,
  },
  {
    title: "Diagnóstico SGQ",
    text: "Avaliação da situação atual do Sistema de Gestão da Qualidade, identificando lacunas, riscos, fragilidades e oportunidades de melhoria.",
    detail:
      "Realizamos um levantamento da rotina, dos processos e dos controles existentes para mostrar com clareza o que já funciona e o que precisa ser priorizado.",
    deliverables: [
      "Entrevistas e análise da rotina da empresa",
      "Avaliação de documentos e controles existentes",
      "Identificação de lacunas, riscos e prioridades",
      "Plano inicial de melhorias recomendado",
    ],
    result:
      "Uma visão objetiva do cenário atual para orientar os próximos passos.",
    icon: SearchCheck,
  },
  {
    title: "Padronização de Processos",
    text: "Mapeamento, revisão e criação de procedimentos, instruções de trabalho, fluxogramas, formulários e padrões operacionais.",
    detail:
      "Organizamos a forma de executar e registrar as atividades para reduzir variações, dúvidas, retrabalho e dependência de conhecimento informal.",
    deliverables: [
      "Mapeamento do fluxo e das responsabilidades",
      "Procedimentos e instruções de trabalho",
      "Fluxogramas, formulários e registros",
      "Organização de versões e aprovações",
    ],
    result:
      "Processos mais claros, repetíveis e fáceis de acompanhar.",
    icon: Workflow,
  },
];

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const detailsId = useId();
  const initialMobileCount = 3;

  function revealServiceCard(card: HTMLElement | null) {
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const topLimit = 96;
    const bottomLimit = window.innerHeight - 24;
    if (rect.bottom > bottomLimit || rect.top < topLimit) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      card.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: rect.bottom > bottomLimit ? "end" : "start",
      });
    }
  }

  function toggleService(index: number, card: HTMLElement | null) {
    const nextIndex = activeIndex === index ? null : index;
    setActiveIndex(nextIndex);
    if (nextIndex !== null) {
      window.setTimeout(() => revealServiceCard(card), 380);
    }
    track("service_card_toggle", {
      service: services[index].title,
      action: nextIndex === null ? "collapse" : "expand",
    });
  }

  function toggleAllServices() {
    const nextShowAll = !showAll;
    setShowAll(nextShowAll);
    if (
      !nextShowAll &&
      activeIndex !== null &&
      activeIndex >= initialMobileCount
    ) {
      setActiveIndex(null);
    }
    track("content_toggle", {
      section: "services",
      action: nextShowAll ? "expand" : "collapse",
    });
  }

  return (
    <>
      <div className="mt-8 grid items-stretch gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isExpanded = activeIndex === index;
          const serviceDetailsId = `${detailsId}-${index}`;

          return (
            <article
              key={service.title}
              className={`${index >= initialMobileCount && !showAll ? "hidden md:block" : ""} ${
                isExpanded ? "md:col-span-2 lg:col-span-3" : ""
              } h-full overflow-hidden rounded-lg border bg-slate-900/70 transition-[border-color,background-color,box-shadow] duration-300 ${
                isExpanded
                  ? "border-cyan-300/45 bg-slate-900 shadow-xl shadow-cyan-950/30"
                  : "border-sky-300/15 hover:border-cyan-300/35 hover:bg-slate-900"
              }`}
            >
              <button
                type="button"
                data-service-card={index}
                aria-expanded={isExpanded}
                aria-controls={serviceDetailsId}
                onClick={(event) =>
                  toggleService(index, event.currentTarget.closest("article"))
                }
                className="group w-full cursor-pointer p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-cyan-300 sm:p-6"
              >
                <div className="flex items-start justify-between gap-5">
                  <Icon className="shrink-0 text-cyan-300" size={32} />
                  <ChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-slate-500 transition-transform duration-300 group-hover:text-cyan-300 ${
                      isExpanded ? "rotate-180 text-cyan-300" : ""
                    }`}
                    size={22}
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                  {service.text}
                </p>
              </button>

              <div
                id={serviceDetailsId}
                aria-hidden={!isExpanded}
                onTransitionEnd={(event) => {
                  if (
                    isExpanded &&
                    event.target === event.currentTarget &&
                    event.propertyName === "grid-template-rows"
                  ) {
                    revealServiceCard(event.currentTarget.closest("article"));
                  }
                }}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mx-5 grid gap-6 border-t border-sky-300/15 pb-6 pt-5 sm:mx-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Como funciona
                      </h4>
                      <p className="mt-3 leading-7 text-slate-300">
                        {service.detail}
                      </p>
                      <div className="mt-5 border-l-2 border-cyan-300 pl-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                          Resultado esperado
                        </p>
                        <p className="mt-2 leading-7 text-slate-300">
                          {service.result}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">
                        Entregas possíveis
                      </h4>
                      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                        {service.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className="flex items-start gap-3 rounded-lg border border-sky-300/10 bg-slate-950/45 p-3 text-sm leading-6 text-slate-300"
                          >
                            <CheckCircle2
                              className="mt-0.5 shrink-0 text-cyan-300"
                              size={17}
                            />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {services.length > initialMobileCount && (
        <button
          type="button"
          aria-expanded={showAll}
          onClick={toggleAllServices}
          className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-cyan-300/25 bg-slate-900 px-5 py-3 text-sm font-bold text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
        >
          {showAll ? "Mostrar menos" : "Ver todos os serviços"}
          <ChevronDown
            className={`transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
            size={18}
          />
        </button>
      )}
    </>
  );
}
