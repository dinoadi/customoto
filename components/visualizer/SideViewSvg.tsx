"use client";

interface Props {
  tankId: string;
  seatId: string;
  barId: string;
  lampId: string;
  exhaustId: string;
  warna: string;
  blueprint: boolean;
}

// Lightweight layered side-view. Each part swaps shape/color.
// Proportions based on Vixion 1330mm wheelbase trace.
export default function SideViewSvg({ tankId, seatId, barId, lampId, exhaustId, warna, blueprint }: Props) {
  const stroke = blueprint ? "#1E5AA8" : "#E8E6E1";
  const fillBody = blueprint ? "none" : warna;
  const fillDark = blueprint ? "none" : "#1A1A18";

  const tankPath =
    tankId === "tank-kapsul-7L"
      ? "M300 210 Q340 190 380 205 L375 235 Q335 245 300 235 Z"
      : tankId === "tank-sportster-12L"
        ? "M285 205 Q340 180 410 200 L405 245 Q340 255 285 240 Z"
        : "M295 208 Q345 185 395 202 L390 240 Q340 250 295 238 Z";

  const seatPath = seatId.includes("cafe")
    ? "M410 215 L500 210 L495 230 L415 235 Z"
    : seatId.includes("brat")
      ? "M405 218 L520 218 L520 232 L405 235 Z"
      : "M410 215 L470 212 L465 232 L412 235 Z";

  const barPath =
    barId === "bar-clipon"
      ? "M620 195 L640 200"
      : barId === "bar-fatbar"
        ? "M615 175 L645 175"
        : "M618 185 L642 188";

  const lampR = lampId === "lamp-daymaker-7" ? 26 : 18;

  return (
    <svg viewBox="0 0 800 360" className="w-full h-auto" role="img" aria-label="Side view motor custom">
      {blueprint && (
        <g stroke="#1E5AA8" strokeWidth={0.5} opacity={0.5}>
          {Array.from({ length: 34 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 24} y1={0} x2={i * 24} y2={360} />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={i * 24} x2={800} y2={i * 24} />
          ))}
        </g>
      )}
      {/* ground */}
      <line x1={40} y1={300} x2={760} y2={300} stroke={stroke} strokeWidth={blueprint ? 1 : 2} strokeDasharray={blueprint ? "8 6" : undefined} />
      {/* wheels: 17 inch dual-purpose */}
      <g>
        <circle cx={200} cy={260} r={62} fill={fillDark} stroke={stroke} strokeWidth={3} />
        <circle cx={200} cy={260} r={28} fill="none" stroke={stroke} strokeWidth={2} />
        <circle cx={600} cy={260} r={62} fill={fillDark} stroke={stroke} strokeWidth={3} />
        <circle cx={600} cy={260} r={28} fill="none" stroke={stroke} strokeWidth={2} />
        <text x={200} y={335} textAnchor="middle" fontSize={11} fill={blueprint ? "#1E5AA8" : "#A8A6A1"} fontFamily="JetBrains Mono, monospace">
          110/80-17
        </text>
        <text x={600} y={335} textAnchor="middle" fontSize={11} fill={blueprint ? "#1E5AA8" : "#A8A6A1"} fontFamily="JetBrains Mono, monospace">
          130/80-17
        </text>
      </g>
      {/* frame delta + subframe cut */}
      <g stroke={stroke} strokeWidth={3} fill="none">
        <path d="M200 260 L340 220 L420 220 L600 260" />
        <path d="M340 220 L360 260 L520 260" />
        {blueprint && (
          <g stroke="#FF4D00" strokeWidth={3}>
            <line x1={470} y1={218} x2={520} y2={218} />
            <text x={475} y={205} fontSize={12} fill="#FF4D00" fontFamily="JetBrains Mono, monospace">
              POTONG 12cm + U-LOOP
            </text>
          </g>
        )}
      </g>
      {/* tank */}
      <path d={tankPath} fill={fillBody} stroke={stroke} strokeWidth={2.5} />
      {/* seat */}
      <path d={seatPath} fill={fillDark} stroke={stroke} strokeWidth={2.5} />
      {/* handlebar */}
      <line x1={610} y1={205} x2={630} y2={190} stroke={stroke} strokeWidth={4} />
      <path d={barPath} stroke={stroke} strokeWidth={5} strokeLinecap="round" fill="none" />
      {/* lamp */}
      <circle cx={650} cy={210} r={lampR} fill={blueprint ? "none" : "#E8E6E1"} stroke={stroke} strokeWidth={3} />
      {lampId === "lamp-daymaker-7" && (
        <circle cx={650} cy={210} r={10} fill="none" stroke={stroke} strokeWidth={2} />
      )}
      {/* exhaust */}
      <path
        d={
          exhaustId === "exhaust-highmount"
            ? "M380 250 Q480 240 560 200 L575 210 Q500 255 390 265 Z"
            : "M380 255 Q500 260 600 245 L600 260 Q500 275 380 268 Z"
        }
        fill={blueprint ? "none" : "#A8A6A1"}
        stroke={stroke}
        strokeWidth={2}
      />
      {/* radiator cover note */}
      <rect x={430} y={225} width={46} height={30} fill={fillDark} stroke={stroke} strokeWidth={1.5} />
      <text x={453} y={244} textAnchor="middle" fontSize={9} fill={blueprint ? "#1E5AA8" : "#A8A6A1"} fontFamily="JetBrains Mono, monospace">
        RAD
      </text>
      {blueprint && (
        <g fontFamily="JetBrains Mono, monospace" fontSize={12} fill="#1E5AA8">
          <text x={330} y={320}>WB 1315mm</text>
          <text x={480} y={160}>SEAT 680mm</text>
          <text x={120} y={180}>RAKE 27°</text>
        </g>
      )}
    </svg>
  );
}
