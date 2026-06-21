"use client";

import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const dashboardFrames = [
  [
    { requirement: "4. Contexto da Organização", value: 95 },
    { requirement: "5. Liderança", value: 90 },
    { requirement: "6. Planejamento", value: 92 },
    { requirement: "7. Suporte", value: 93 },
    { requirement: "8. Operação", value: 89 },
    { requirement: "9. Avaliação de Desempenho", value: 94 },
    { requirement: "10. Melhoria", value: 96 },
  ],
  [
    { requirement: "4. Contexto da Organização", value: 92 },
    { requirement: "5. Liderança", value: 94 },
    { requirement: "6. Planejamento", value: 90 },
    { requirement: "7. Suporte", value: 95 },
    { requirement: "8. Operação", value: 91 },
    { requirement: "9. Avaliação de Desempenho", value: 93 },
    { requirement: "10. Melhoria", value: 94 },
  ],
  [
    { requirement: "4. Contexto da Organização", value: 96 },
    { requirement: "5. Liderança", value: 92 },
    { requirement: "6. Planejamento", value: 95 },
    { requirement: "7. Suporte", value: 94 },
    { requirement: "8. Operação", value: 93 },
    { requirement: "9. Avaliação de Desempenho", value: 95 },
    { requirement: "10. Melhoria", value: 97 },
  ],
];

const metricFrames = [
  { conformity: 92, audits: 75, training: 89, actions: 17 },
  { conformity: 94, audits: 82, training: 91, actions: 19 },
  { conformity: 96, audits: 88, training: 94, actions: 21 },
];

type MetricRingProps = {
  label: string;
  value: number;
  animate: boolean;
  direct?: boolean;
};

function MetricRing({ label, value, animate, direct = false }: MetricRingProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    if (direct) {
      return;
    }

    if (!animate) {
      const staticTimer = window.setTimeout(() => {
        valueRef.current = value;
        setDisplayValue(value);
      }, 0);
      return () => window.clearTimeout(staticTimer);
    }

    const fromValue = valueRef.current;
    const startedAt = Date.now();
    const duration = 2200;
    const animationTimer = window.setInterval(() => {
      const progress = Math.min(1, (Date.now() - startedAt) / duration);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(
        fromValue + (value - fromValue) * easedProgress,
      );

      valueRef.current = nextValue;
      setDisplayValue(nextValue);

      if (progress >= 1) {
        window.clearInterval(animationTimer);
      }
    }, 35);

    return () => window.clearInterval(animationTimer);
  }, [animate, direct, value]);

  const ringValue = direct ? value : displayValue;
  const ringColor =
    ringValue >= 85 ? "#4ade80" : ringValue >= 52 ? "#fbbf24" : "#fb7185";

  return (
    <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-md border border-cyan-300/20 bg-slate-950/55 px-1.5 py-0.5">
      <div className="relative h-[52px] w-[52px] shrink-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={1}
          minHeight={1}
          initialDimension={{ width: 52, height: 52 }}
        >
          <RadialBarChart
            data={[{ value: ringValue }]}
            innerRadius="70%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              angleAxisId={0}
              domain={[0, 100]}
              tick={false}
              type="number"
            />
            <RadialBar
              angleAxisId={0}
              background={{ fill: "#102b3b" }}
              cornerRadius={8}
              dataKey="value"
              fill={ringColor}
              isAnimationActive={false}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <strong className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold tabular-nums text-white">
          {ringValue}%
        </strong>
      </div>
      <p className="min-w-0 whitespace-nowrap text-center text-[9.5px] font-bold uppercase leading-3 text-slate-100">
        {label}
      </p>
    </div>
  );
}

type RequirementDatum = (typeof dashboardFrames)[number][number];

type AnimatedRequirementBarsProps = {
  data: RequirementDatum[];
  motionEnabled: boolean;
  onValuesChange: (values: number[]) => void;
};

function AnimatedRequirementBars({
  data,
  motionEnabled,
  onValuesChange,
}: AnimatedRequirementBarsProps) {
  const [displayValues, setDisplayValues] = useState(() =>
    data.map(() => 0),
  );
  const valuesRef = useRef(displayValues);
  const requirementCount = data.length;

  useEffect(() => {
    if (!motionEnabled) {
      const finalValues = Array.from(
        { length: requirementCount },
        () => Math.floor(Math.random() * 101),
      );
      const staticTimer = window.setTimeout(() => {
        valuesRef.current = finalValues;
        setDisplayValues(finalValues);
        onValuesChange(finalValues);
      }, 0);
      return () => window.clearTimeout(staticTimer);
    }

    let animationFrame = 0;
    let fallbackTimer = 0;
    let cycleTimer = 0;
    let lastReportedAt = 0;
    let scenarioIndex = 0;
    const scenarioRanges = [
      [20, 51],
      [52, 84],
      [85, 100],
    ] as const;

    const cancelScheduledFrame = () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallbackTimer);
    };

    const scheduleFrame = (callback: () => void) => {
      if (document.hidden) {
        fallbackTimer = window.setTimeout(callback, 80);
        return;
      }

      animationFrame = window.requestAnimationFrame(callback);
    };

    const startCycle = () => {
      cancelScheduledFrame();

      const fromValues = [...valuesRef.current];
      const [minimum, maximum] =
        scenarioRanges[scenarioIndex % scenarioRanges.length];
      scenarioIndex += 1;
      const targetValues = Array.from(
        { length: requirementCount },
        () => minimum + Math.floor(Math.random() * (maximum - minimum + 1)),
      );
      const delays = Array.from(
        { length: requirementCount },
        () => 100 + Math.random() * 800,
      );
      const durations = Array.from(
        { length: requirementCount },
        () => 2600 + Math.random() * 1200,
      );
      const startedAt = Date.now();

      const drawFrame = () => {
        const now = Date.now();
        let complete = true;
        const nextValues = targetValues.map((targetValue, index) => {
          const elapsed = now - startedAt - delays[index];
          const progress = Math.min(
            1,
            Math.max(0, elapsed / durations[index]),
          );

          if (progress < 1) {
            complete = false;
          }

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          return Math.round(
            fromValues[index] +
              (targetValue - fromValues[index]) * easedProgress,
          );
        });

        valuesRef.current = nextValues;
        setDisplayValues(nextValues);

        if (complete || now - lastReportedAt >= 100) {
          lastReportedAt = now;
          onValuesChange(nextValues);
        }

        if (!complete) {
          scheduleFrame(drawFrame);
        }
      };

      scheduleFrame(drawFrame);
    };

    startCycle();
    cycleTimer = window.setInterval(startCycle, 5200);

    return () => {
      cancelScheduledFrame();
      window.clearInterval(cycleTimer);
    };
  }, [motionEnabled, onValuesChange, requirementCount]);

  return (
    <div className="grid h-full content-between">
      {data.map(({ requirement }, index) => {
        const value = displayValues[index] ?? 0;

        return (
          <div
            key={requirement}
            className="grid grid-cols-[172px_1fr_32px] items-center gap-1"
          >
            <span className="truncate text-right text-[11.5px] font-medium text-slate-100">
              {requirement}
            </span>
            <div className="h-3 overflow-hidden rounded-sm bg-cyan-950/55">
              <div
                className="h-full rounded-sm bg-cyan-400"
                style={{
                  boxShadow: "0 0 10px rgba(125, 211, 252, 0.24)",
                  transform: `scaleX(${value / 100})`,
                  transformOrigin: "left center",
                  willChange: "transform",
                }}
              />
            </div>
            <strong className="text-[11px] tabular-nums text-white">
              {value}%
            </strong>
          </div>
        );
      })}
    </div>
  );
}

export default function HeroQualityDashboard() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [updatedAt, setUpdatedAt] = useState("");
  const [requirementValues, setRequirementValues] = useState(() =>
    dashboardFrames[0].map(() => 0),
  );
  const panelRef = useRef<HTMLElement>(null);
  const metrics = metricFrames[frameIndex];
  const actionPlanTotal = metrics.actions + 4 + 2;
  const overallConformity = Math.round(
    requirementValues.reduce((sum, value) => sum + value, 0) /
      requirementValues.length,
  );
  const systemStatus =
    overallConformity >= 85
      ? "Sistema em conformidade"
      : overallConformity >= 52
        ? "Sistema em atenção"
        : "Ação necessária";
  const systemStatusTone =
    overallConformity >= 85
      ? "text-emerald-300"
      : overallConformity >= 52
        ? "text-amber-300"
        : "text-rose-300";
  const SystemStatusIcon =
    overallConformity >= 85 ? CheckCircle2 : AlertTriangle;
  const animate = canAnimate && isInView;

  const handleRequirementValuesChange = useCallback((values: number[]) => {
    setRequirementValues(values);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const localDateTime = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
        .format(new Date())
        .replace(",", "");

      setUpdatedAt(localDateTime);
    };

    const initialTimer = window.setTimeout(updateClock, 0);
    const clockInterval = window.setInterval(updateClock, 300000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(clockInterval);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );

    const syncPreferences = () => {
      setIsDesktop(desktopQuery.matches);
      setCanAnimate(desktopQuery.matches && motionQuery.matches);
    };

    syncPreferences();
    desktopQuery.addEventListener("change", syncPreferences);
    motionQuery.addEventListener("change", syncPreferences);

    return () => {
      desktopQuery.removeEventListener("change", syncPreferences);
      motionQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) {
      return;
    }

    const interval = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % dashboardFrames.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [animate]);

  if (!isDesktop) {
    return null;
  }

  return (
    <aside
      ref={panelRef}
      aria-label="Painel demonstrativo do Sistema de Gestão da Qualidade"
      className="hero-quality-dashboard"
    >
      <div className="flex items-start justify-between gap-3 border-b border-cyan-300/15 pb-1.5">
        <div>
          <div className="flex items-center gap-1.5 text-white">
            <ShieldCheck className="text-cyan-300" size={17} />
            <p className="text-base font-black">
              SGQ <span className="font-medium text-slate-400">| ISO 9001</span>
            </p>
          </div>
          <p className="mt-0.5 text-[8px] font-bold uppercase tracking-widest text-slate-300">
            Dashboard executivo
          </p>
        </div>

        <div className="text-right text-[12px] leading-4 text-slate-200">
          <p>Atualizado em: {updatedAt || "--/--/---- --:--"}</p>
          <p className={`flex items-center justify-end gap-1 ${systemStatusTone}`}>
            <SystemStatusIcon size={13} /> {systemStatus}
          </p>
        </div>
      </div>

      <div className="mt-1.5 grid min-h-0 flex-1 grid-rows-[0.78fr_2.22fr] gap-1.5">
        <div className="grid min-h-0 grid-cols-4 gap-1.5">
          <MetricRing
            label="Status do SGQ"
            value={overallConformity}
            animate={animate}
            direct
          />

          <MetricRing
            label="Auditorias"
            value={metrics.audits}
            animate={animate}
          />
          <MetricRing
            label="Treinamentos"
            value={metrics.training}
            animate={animate}
          />

          <div className="flex flex-col items-center justify-center rounded-md border border-cyan-300/30 bg-slate-950/75 px-2 py-1">
            <p className="whitespace-nowrap text-center text-[10px] font-extrabold uppercase leading-3 text-white">
              Não conformidades
            </p>
            <div className="mt-2.5 grid gap-1 leading-4">
              <div className="flex items-center justify-center gap-1.5 text-slate-200">
                <strong className="text-lg leading-4 text-white">7</strong>
                <span className="text-[11px] font-semibold">Abertas</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-rose-300">
                <AlertTriangle size={12} />
                <strong className="text-[17px] leading-4">2</strong>
                <span className="text-[11px] font-semibold">Vencidas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid min-h-0 grid-cols-[1.75fr_0.65fr] gap-1.5">
          <div className="min-h-0 rounded-md border border-cyan-300/20 bg-slate-950/55 p-1">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[12px] font-bold uppercase text-white">
                  Conformidade por requisito ISO 9001
                </p>
              </div>
              <Activity className="shrink-0 text-cyan-300" size={15} />
            </div>
            <div className="mt-0.5 h-[91%] min-h-0 w-full">
              <AnimatedRequirementBars
                data={dashboardFrames[frameIndex]}
                motionEnabled={canAnimate}
                onValuesChange={handleRequirementValuesChange}
              />
            </div>
          </div>

          <div className="flex min-h-0 flex-col rounded-md border border-cyan-300/30 bg-slate-950/75 p-1.5">
            <div className="flex items-center justify-center gap-1.5 border-b border-cyan-300/15 pb-1.5 text-cyan-100">
              <ListChecks size={13} />
              <p className="text-[12px] font-extrabold uppercase">
                Plano de ação
              </p>
            </div>
            <div className="mt-1 grid flex-1 content-evenly text-[11px] font-medium">
              <div className="flex items-center justify-between border-b border-white/10 py-1.5 text-slate-300">
                <span>Total</span>
                <strong className="text-[15px] tabular-nums text-white">
                  {actionPlanTotal}
                </strong>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 py-1.5 text-emerald-300">
                <span>Concluídas</span>
                <strong className="text-[14px] tabular-nums">{metrics.actions}</strong>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 py-1.5 text-amber-300">
                <span>Em andamento</span>
                <strong className="text-[14px] tabular-nums">4</strong>
              </div>
              <div className="flex items-center justify-between py-1.5 text-rose-300">
                <span>Atrasadas</span>
                <strong className="text-[14px] tabular-nums">2</strong>
              </div>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
}
