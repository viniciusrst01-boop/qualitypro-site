const points = [
  { x: 14, y: 76 },
  { x: 30, y: 58 },
  { x: 46, y: 65 },
  { x: 62, y: 38 },
  { x: 78, y: 45 },
  { x: 94, y: 24 },
];

const linePath = points
  .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
  .join(" ");

export default function DashboardChart() {
  return (
    <div className="h-56 w-full min-w-0 overflow-hidden rounded-lg bg-slate-950/30">
      <svg
        viewBox="0 0 108 92"
        role="img"
        aria-label="Gráfico de evolução dos indicadores de qualidade"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="qualityLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
          <linearGradient id="qualityArea" x1="0" x2="0" y1="0" y2="1">
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

        <path d={`${linePath} L 94 86 L 14 86 Z`} fill="url(#qualityArea)" />
        <path
          d={linePath}
          fill="none"
          stroke="url(#qualityLine)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />

        {points.map((point) => (
          <circle
            key={`${point.x}-${point.y}`}
            cx={point.x}
            cy={point.y}
            r="2.6"
            fill="#020617"
            stroke="#67e8f9"
            strokeWidth="1.8"
          />
        ))}
      </svg>
    </div>
  );
}
