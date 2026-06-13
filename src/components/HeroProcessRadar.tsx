"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Waypoints } from "lucide-react";
import {
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const radarFrames = [
  [
    { process: "Manufatura", value: 82 },
    { process: "Qualidade", value: 91 },
    { process: "Entrega", value: 76 },
    { process: "Custo", value: 64 },
    { process: "Estoque", value: 73 },
  ],
  [
    { process: "Manufatura", value: 68 },
    { process: "Qualidade", value: 94 },
    { process: "Entrega", value: 84 },
    { process: "Custo", value: 79 },
    { process: "Estoque", value: 61 },
  ],
  [
    { process: "Manufatura", value: 93 },
    { process: "Qualidade", value: 75 },
    { process: "Entrega", value: 88 },
    { process: "Custo", value: 66 },
    { process: "Estoque", value: 86 },
  ],
  [
    { process: "Manufatura", value: 76 },
    { process: "Qualidade", value: 84 },
    { process: "Entrega", value: 69 },
    { process: "Custo", value: 91 },
    { process: "Estoque", value: 80 },
  ],
  [
    { process: "Manufatura", value: 88 },
    { process: "Qualidade", value: 93 },
    { process: "Entrega", value: 78 },
    { process: "Custo", value: 82 },
    { process: "Estoque", value: 70 },
  ],
];

const heroImage = {
  width: 2560,
  height: 1441,
};

const originalPanel = {
  x: 2227,
  y: 610,
  width: 310,
  height: 320,
};

export default function HeroProcessRadar() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [radarData, setRadarData] = useState(radarFrames[0]);
  const [panelStyle, setPanelStyle] = useState<CSSProperties>();
  const radarDataRef = useRef(radarFrames[0]);
  const frameIndexRef = useRef(0);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );

    const syncPreferences = () => {
      setIsDesktop(desktopQuery.matches);
      setShouldAnimate(desktopQuery.matches && motionQuery.matches);
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
    if (!isDesktop) {
      return;
    }

    const hero = document.getElementById("inicio");

    if (!hero) {
      return;
    }

    const positionPanel = () => {
      const { width, height } = hero.getBoundingClientRect();
      const imageScale = Math.max(
        width / heroImage.width,
        height / heroImage.height,
      );
      const renderedWidth = heroImage.width * imageScale;
      const renderedHeight = heroImage.height * imageScale;
      const offsetX = (width - renderedWidth) / 2;
      const offsetY = (height - renderedHeight) / 2;

      setPanelStyle({
        left: offsetX + originalPanel.x * imageScale,
        top: offsetY + originalPanel.y * imageScale,
        width: originalPanel.width * imageScale,
        height: originalPanel.height * imageScale,
      });
    };

    const observer = new ResizeObserver(positionPanel);
    observer.observe(hero);
    positionPanel();

    return () => observer.disconnect();
  }, [isDesktop]);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    let animationFrame = 0;
    let transitionTimer = 0;

    const morphToNextFrame = () => {
      const nextIndex = (frameIndexRef.current + 1) % radarFrames.length;
      const initialData = radarDataRef.current.map((item) => ({ ...item }));
      const targetData = radarFrames[nextIndex];
      const startedAt = performance.now();
      const duration = 820;

      const updateShape = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const nextData = initialData.map((item, index) => ({
          process: item.process,
          value:
            item.value +
            (targetData[index].value - item.value) * easedProgress,
        }));

        radarDataRef.current = nextData;
        setRadarData(nextData);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(updateShape);
          return;
        }

        frameIndexRef.current = nextIndex;
        transitionTimer = window.setTimeout(morphToNextFrame, 280);
      };

      animationFrame = window.requestAnimationFrame(updateShape);
    };

    transitionTimer = window.setTimeout(morphToNextFrame, 450);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(transitionTimer);
    };
  }, [shouldAnimate]);

  if (!isDesktop || !panelStyle) {
    return null;
  }

  return (
    <aside
      aria-label="Desempenho dos processos"
      className="hero-radar-panel pointer-events-none absolute z-20 flex flex-col overflow-hidden border border-sky-200/65 bg-[#031127] shadow-[0_18px_50px_rgba(0,0,0,0.5),0_0_28px_rgba(14,165,233,0.14)]"
      style={panelStyle}
    >
      <div className="flex items-center justify-between gap-3 px-4 pb-1 pt-4">
        <h2 className="whitespace-nowrap text-[13px] font-bold text-white">
          Performance por Processo
        </h2>
        <Waypoints className="shrink-0 text-sky-400" size={17} strokeWidth={2} />
      </div>

      <div className="hero-radar-chart relative min-h-0 w-full flex-1 px-4 pb-3 pt-1">
        <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 text-[10px] font-semibold text-slate-50">
          Manufatura
        </span>
        <span className="absolute right-1 top-[43%] z-10 -translate-y-1/2 text-[10px] font-semibold text-slate-50">
          Qualidade
        </span>
        <span className="absolute bottom-1 right-[16%] z-10 text-[10px] font-semibold text-slate-50">
          Entrega
        </span>
        <span className="absolute bottom-1 left-[20%] z-10 text-[10px] font-semibold text-slate-50">
          Custo
        </span>
        <span className="absolute left-1 top-[43%] z-10 -translate-y-1/2 text-[10px] font-semibold text-slate-50">
          Estoque
        </span>

        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={radarData}
            cx="50%"
            cy="49%"
            outerRadius="55%"
          >
            <PolarGrid
              gridType="polygon"
              radialLines
              stroke="rgba(125, 211, 252, 0.24)"
            />
            <Radar
              dataKey="value"
              stroke="#38bdf8"
              strokeWidth={2}
              fill="#0ea5e9"
              fillOpacity={0.42}
              dot={{
                r: 2.5,
                fill: "#67e8f9",
                stroke: "#e0f2fe",
                strokeWidth: 1,
              }}
              isAnimationActive={false}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </aside>
  );
}
