"use client";

import { track } from "@vercel/analytics";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type MetricProps = {
  label: string;
  value: string;
  detail: string;
};

const slides = [
  {
    eyebrow: "Dashboard executivo",
    title: "Qualidade em tempo real",
    metrics: [
      ["Eficiência", "92,4%", "+7% no mês"],
      ["Não conformidades", "23", "-18% no mês"],
      ["PPM", "128", "-42% no ano"],
    ],
    sideMetrics: [
      ["Plano de ação", "16", "itens ativos"],
      ["Retrabalho", "3,2%", "queda acumulada"],
    ],
    chartTitle: "Evolução dos indicadores",
    chart: "line",
  },
  {
    eyebrow: "Desempenho operacional",
    title: "Processos sob controle",
    metrics: [
      ["OEE", "85,7%", "+4,3% no trimestre"],
      ["Entregas no prazo", "96%", "+6% no semestre"],
      ["Disponibilidade", "91,2%", "meta superada"],
    ],
    sideMetrics: [
      ["Produtividade", "108", "peças por hora"],
      ["Paradas", "14h", "-22% no mês"],
    ],
    chartTitle: "Desempenho por processo",
    chart: "bars",
  },
  {
    eyebrow: "Conformidade e auditorias",
    title: "Ações priorizadas",
    metrics: [
      ["Conformidade", "94%", "+8 pontos"],
      ["Auditorias", "12", "ciclo anual"],
      ["Ações concluídas", "87%", "+15% no mês"],
    ],
    sideMetrics: [
      ["Riscos altos", "3", "-5 no trimestre"],
      ["Prazo médio", "11 dias", "-4 dias"],
    ],
    chartTitle: "Status dos planos de ação",
    chart: "donut",
  },
] as const;

function Metric({ label, value, detail }: MetricProps) {
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

function LineChart() {
  const points = [
    [14, 76],
    [30, 58],
    [46, 65],
    [62, 38],
    [78, 45],
    [94, 24],
  ];
  const linePath = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");

  return (
    <svg
      viewBox="0 0 108 92"
      role="img"
      aria-label="Gráfico de evolução dos indicadores de qualidade"
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="showcaseLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
        <linearGradient id="showcaseArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[18, 38, 58, 78].map((y) => (
        <line
          key={y}
          x1="8"
          x2="100"
          y1={y}
          y2={y}
          stroke="#1e293b"
          strokeWidth="0.8"
        />
      ))}
      <path
        d={`${linePath} L 94 86 L 14 86 Z`}
        fill="url(#showcaseArea)"
      />
      <path
        d={linePath}
        fill="none"
        stroke="url(#showcaseLine)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      {points.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="2.6"
          fill="#020617"
          stroke="#67e8f9"
          strokeWidth="1.8"
        />
      ))}
    </svg>
  );
}

function BarChart() {
  const bars = [
    { label: "Prod.", value: 76, color: "#38bdf8" },
    { label: "Qual.", value: 90, color: "#67e8f9" },
    { label: "Prazo", value: 68, color: "#facc15" },
    { label: "OEE", value: 84, color: "#34d399" },
    { label: "Disp.", value: 72, color: "#60a5fa" },
  ];

  return (
    <div
      role="img"
      aria-label="Gráfico de barras com desempenho dos processos"
      className="flex h-full items-end justify-around gap-3 px-2 pt-5"
    >
      {bars.map((bar) => (
        <div
          key={bar.label}
          className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
        >
          <span className="mb-2 text-xs font-bold text-slate-300">
            {bar.value}%
          </span>
          <span
            className="w-full max-w-12 rounded-t-md"
            style={{
              height: `${bar.value}%`,
              background: `linear-gradient(180deg, ${bar.color}, ${bar.color}55)`,
            }}
          />
          <span className="mt-2 text-[10px] text-slate-400 sm:text-xs">
            {bar.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function DonutChart() {
  return (
    <div
      role="img"
      aria-label="Gráfico circular com status dos planos de ação"
      className="grid h-full place-items-center sm:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(#22d3ee_0_62%,#facc15_62%_84%,#334155_84%_100%)]">
        <div className="grid h-25 w-25 place-items-center rounded-full bg-slate-950 text-center">
          <div>
            <strong className="block text-3xl text-white">87%</strong>
            <span className="text-xs text-slate-400">concluídas</span>
          </div>
        </div>
      </div>
      <div className="grid w-full gap-3 pt-4 sm:pt-0">
        {[
          ["Concluídas", "62%", "bg-cyan-400"],
          ["Em andamento", "22%", "bg-yellow-400"],
          ["A iniciar", "16%", "bg-slate-600"],
        ].map(([label, value, color]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 rounded-md border border-slate-800 bg-slate-950/45 px-3 py-2"
          >
            <span className="flex items-center gap-2 text-sm text-slate-300">
              <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
              {label}
            </span>
            <strong className="text-sm text-white">{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardChart({ type }: { type: (typeof slides)[number]["chart"] }) {
  return (
    <div className="h-56 w-full min-w-0 overflow-hidden rounded-lg bg-slate-950/30">
      {type === "line" && <LineChart />}
      {type === "bars" && <BarChart />}
      {type === "donut" && <DonutChart />}
    </div>
  );
}

export default function DashboardShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const isPaused = interactionPaused || reduceMotion;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  function selectSlide(index: number, source: string) {
    setActiveIndex((index + slides.length) % slides.length);
    track("dashboard_slide_change", {
      slide: slides[(index + slides.length) % slides.length].title,
      source,
    });
  }

  return (
    <div
      className="w-full min-w-0"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={() => setInteractionPaused(false)}
    >
      <div className="overflow-hidden rounded-lg border border-sky-300/20 bg-slate-950 shadow-2xl shadow-sky-950/50">
        <div
          className={`flex ${reduceMotion ? "" : "transition-transform duration-700 ease-out"}`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((slide, index) => (
            <article
              key={slide.title}
              aria-hidden={index !== activeIndex}
              className="min-w-full p-3 sm:p-4"
            >
              <div className="mb-4 min-h-16 border-b border-slate-800 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    {slide.eyebrow}
                  </p>
                  <h3 className="mt-1 text-lg font-bold sm:text-xl">
                    {slide.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {slide.metrics.map(([label, value, detail]) => (
                  <Metric
                    key={label}
                    label={label}
                    value={value}
                    detail={detail}
                  />
                ))}
              </div>

              <div className="mt-3 grid min-h-[22rem] gap-3 lg:min-h-[19rem] lg:grid-cols-[1.4fr_0.8fr]">
                <div className="min-w-0 rounded-lg border border-slate-800 bg-slate-900/80 p-3 sm:p-4">
                  <p className="mb-3 text-sm font-semibold text-slate-200">
                    {slide.chartTitle}
                  </p>
                  <DashboardChart type={slide.chart} />
                </div>
                <div className="grid gap-3">
                  {slide.sideMetrics.map(([label, value, detail]) => (
                    <Metric
                      key={label}
                      label={label}
                      value={value}
                      detail={detail}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => selectSlide(activeIndex - 1, "previous")}
          aria-label="Dashboard anterior"
          className="grid h-9 w-9 place-items-center rounded-full border border-sky-300/20 bg-slate-950/70 text-cyan-200 hover:bg-slate-900"
        >
          <ChevronLeft size={19} />
        </button>

        <div className="flex items-center gap-2" aria-label="Selecionar dashboard">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Exibir ${slide.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => selectSlide(index, "indicator")}
              className={`h-2.5 rounded-full transition-[width,background-color] ${
                index === activeIndex
                  ? "w-8 bg-cyan-300"
                  : "w-2.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => selectSlide(activeIndex + 1, "next")}
          aria-label="Próximo dashboard"
          className="grid h-9 w-9 place-items-center rounded-full border border-sky-300/20 bg-slate-950/70 text-cyan-200 hover:bg-slate-900"
        >
          <ChevronRight size={19} />
        </button>
      </div>
    </div>
  );
}
