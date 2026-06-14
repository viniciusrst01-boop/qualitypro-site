"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Waypoints } from "lucide-react";

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
    { process: "Estoque", value: 70 },
  ],
  [
    { process: "Manufatura", value: 93 },
    { process: "Qualidade", value: 88 },
    { process: "Entrega", value: 90 },
    { process: "Custo", value: 66 },
    { process: "Estoque", value: 96 },
  ],
  [
    { process: "Manufatura", value: 76 },
    { process: "Qualidade", value: 88 },
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

const radarAxes = [
  { process: "Manufatura", x: 50, y: 15.5 },
  { process: "Qualidade", x: 77.5, y: 38.7 },
  { process: "Entrega", x: 67, y: 76.2 },
  { process: "Custo", x: 33, y: 76.2 },
  { process: "Estoque", x: 22.5, y: 38.7 },
];

const minimumHighlightedValue = 88;
const highlightedValueMargin = 8;
const panelStyle: CSSProperties = {
  right: "clamp(18px, 1.25vw, 24px)",
  top: "41%",
  width: "clamp(215px, 12.4vw, 235px)",
  aspectRatio: "250 / 258",
};

export default function HeroProcessRadar() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [radarData, setRadarData] = useState(radarFrames[0]);
  const radarDataRef = useRef(radarFrames[0]);
  const frameIndexRef = useRef(0);
  const maximumValue = Math.max(...radarData.map(({ value }) => value));
  const activeProcesses = [...radarData]
    .sort((first, second) => second.value - first.value)
    .filter(
      ({ value }) =>
        value >= minimumHighlightedValue &&
        maximumValue - value <= highlightedValueMargin,
    )
    .slice(0, 3)
    .map(({ process }) => process);
  const activeProcessSet = new Set(activeProcesses);
  const radarValueByProcess = new Map(
    radarData.map(({ process, value }) => [process, value]),
  );
  const radarPoints = radarAxes
    .map(({ process, x, y }) => {
      const value = radarValueByProcess.get(process) ?? 0;
      return `${50 + (x - 50) * (value / 100)},${
        49 + (y - 49) * (value / 100)
      }`;
    })
    .join(" ");

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );

    const syncPreferences = () => {
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

  return (
    <aside
      aria-label="Desempenho dos processos"
      className="hero-radar-panel pointer-events-none absolute z-20 flex flex-col overflow-hidden border border-sky-200/65 bg-[#031127] shadow-[0_18px_50px_rgba(0,0,0,0.5),0_0_28px_rgba(14,165,233,0.14)]"
      style={panelStyle}
    >
      <div className="flex items-center justify-between gap-2 px-3 pb-1 pt-4">
        <h2 className="hero-radar-title whitespace-nowrap text-white">
          Performance por Processo
        </h2>
        <Waypoints className="shrink-0 text-sky-400" size={17} strokeWidth={2} />
      </div>

      <div className="hero-radar-chart relative min-h-0 w-full flex-1 px-4 pb-3 pt-1">
        <span
          className={`hero-radar-label absolute left-1/2 top-[3%] z-10 -translate-x-1/2 ${
            activeProcessSet.has("Manufatura")
              ? "hero-radar-label-active"
              : ""
          }`}
        >
          Manufatura
        </span>
        <span
          className={`hero-radar-label absolute right-1 top-[43%] z-10 -translate-y-1/2 ${
            activeProcessSet.has("Qualidade")
              ? "hero-radar-label-active"
              : ""
          }`}
        >
          Qualidade
        </span>
        <span
          className={`hero-radar-label absolute bottom-[13%] right-[16%] z-10 ${
            activeProcessSet.has("Entrega") ? "hero-radar-label-active" : ""
          }`}
        >
          Entrega
        </span>
        <span
          className={`hero-radar-label absolute bottom-[13%] left-[20%] z-10 ${
            activeProcessSet.has("Custo") ? "hero-radar-label-active" : ""
          }`}
        >
          Custo
        </span>
        <span
          className={`hero-radar-label absolute left-1 top-[43%] z-10 -translate-y-1/2 ${
            activeProcessSet.has("Estoque")
              ? "hero-radar-label-active"
              : ""
          }`}
        >
          Estoque
        </span>

        <div className="absolute inset-x-4 bottom-3 top-1">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {[0.25, 0.5, 0.75, 1].map((level) => (
              <polygon
                key={level}
                fill="none"
                points={radarAxes
                  .map(
                    ({ x, y }) =>
                      `${50 + (x - 50) * level},${49 + (y - 49) * level}`,
                  )
                  .join(" ")}
                stroke="rgba(125, 211, 252, 0.24)"
                strokeWidth="0.45"
              />
            ))}

            {radarAxes.map(({ process, x, y }) => {
              const isActive = activeProcessSet.has(process);
              const value = radarValueByProcess.get(process) ?? 0;
              const pointX = 50 + (x - 50) * (value / 100);
              const pointY = 49 + (y - 49) * (value / 100);

              return (
                <g key={process}>
                  <line
                    opacity="0.42"
                    stroke="rgba(125, 211, 252, 0.24)"
                    strokeWidth="0.38"
                    x1="50"
                    x2={x}
                    y1="49"
                    y2={y}
                  />
                  <line
                    className={
                      isActive
                        ? "hero-radar-axis hero-radar-axis-active"
                        : "hero-radar-axis"
                    }
                    x1="50"
                    x2={x}
                    y1="49"
                    y2={y}
                  />
                  {isActive ? (
                    <ellipse
                      className="hero-radar-vertex-halo"
                      cx={pointX}
                      cy={pointY}
                      rx="2.4"
                      ry="2.7"
                    />
                  ) : null}
                </g>
              );
            })}

            <polygon
              fill="#0ea5e9"
              fillOpacity="0.42"
              points={radarPoints}
              stroke="#38bdf8"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />

            {radarAxes.map(({ process, x, y }) => {
              const value = radarValueByProcess.get(process) ?? 0;
              const pointX = 50 + (x - 50) * (value / 100);
              const pointY = 49 + (y - 49) * (value / 100);
              const isActive = activeProcessSet.has(process);

              return (
                <ellipse
                  key={process}
                  className={isActive ? "hero-radar-vertex-active" : ""}
                  cx={pointX}
                  cy={pointY}
                  fill={isActive ? undefined : "#67e8f9"}
                  rx="0.95"
                  ry="1.1"
                  stroke={isActive ? undefined : "#e0f2fe"}
                  strokeWidth={isActive ? undefined : "0.45"}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </aside>
  );
}
