"use client";

interface Props {
  aliranName: string;
  seatHeightMm: number;
  wheelbaseMm: number;
}

// Ergonomics triangle: handlebar - seat - footstep
export default function BlueprintOverlay({ aliranName, seatHeightMm, wheelbaseMm }: Props) {
  return (
    <div className="blueprint-grid border border-blueprintline bg-blueprint/20 p-4 font-mono text-xs">
      <p className="text-blueprintline mb-3">SHEET 04 — ERGONOMI / RIDING TRIANGLE — {aliranName.toUpperCase()}</p>
      <svg viewBox="0 0 400 180" className="w-full h-auto">
        <g stroke="#1E5AA8" strokeWidth={1.5} fill="none">
          <line x1={60} y1={140} x2={200} y2={60} />
          <line x1={200} y1={60} x2={320} y2={140} />
          <line x1={60} y1={140} x2={320} y2={140} strokeDasharray="6 4" />
          <circle cx={200} cy={60} r={6} fill="#FF4D00" stroke="#FF4D00" />
          <circle cx={60} cy={140} r={6} fill="#1E5AA8" />
          <circle cx={320} cy={140} r={6} fill="#1E5AA8" />
        </g>
        <g fontFamily="JetBrains Mono, monospace" fontSize={11} fill="#E8E6E1">
          <text x={200} y={45} textAnchor="middle">STANG</text>
          <text x={60} y={160} textAnchor="middle">JOK {seatHeightMm}mm</text>
          <text x={320} y={160} textAnchor="middle">FOOTSTEP</text>
          <text x={200} y={130} textAnchor="middle" fill="#FF4D00">WB {wheelbaseMm}mm</text>
        </g>
      </svg>
      <ul className="mt-3 space-y-1 text-steel/90">
        <li>• Bobber-Cafe Hybrid: sudut punggung ~25°, kompromi macet + touring pendek.</li>
        <li>• Clip-on penuh = 35-40°, pegal &gt;30 menit. Clubman = 25°, masih manusiawi.</li>
        <li>• Jok 680mm: Napak untuk tinggi 165cm+. Di bawah itu turunkan shock 10mm lagi.</li>
      </ul>
    </div>
  );
}
