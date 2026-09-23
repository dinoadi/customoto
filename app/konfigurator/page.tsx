"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { BASIS_LIST } from "@/data/basis";
import { ALIRAN_LIST } from "@/data/aliran";
import { PARTS_LIST } from "@/data/parts";
import { checkCompatibility } from "@/lib/compatibility";
import { buildBudget } from "@/lib/budget";
import { useBuild } from "@/store/useBuild";
import SideViewSvg from "@/components/visualizer/SideViewSvg";
import BlueprintOverlay from "@/components/visualizer/BlueprintOverlay";
import PartTable from "@/components/budget/PartTable";
import ARPanel from "@/components/visualizer/ARPanel";

const Viewer3D = dynamic(() => import("@/components/visualizer/Viewer3D"), { ssr: false });

function KonfiguratorInner() {
  const searchParams = useSearchParams();
  const { basisId, aliranId, selectedPartIds, tier, warna, mode, setBasis, setAliran, togglePart, setTier, setWarna, setMode } = useBuild();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const b = searchParams.get("basis");
    const a = searchParams.get("aliran");
    const s = searchParams.get("step");
    if (b && BASIS_LIST.some((x) => x.id === b)) setBasis(b);
    if (a && ALIRAN_LIST.some((x) => x.id === a)) setAliran(a);
    if (s && ["1", "2", "3", "4"].includes(s)) setStep(Number(s));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const basis = BASIS_LIST.find((b) => b.id === basisId) ?? BASIS_LIST[0]!;
  const aliran = ALIRAN_LIST.find((a) => a.id === aliranId) ?? ALIRAN_LIST[0]!;
  const compat = checkCompatibility(basisId, aliranId);
  const budget = useMemo(() => buildBudget(selectedPartIds, tier), [selectedPartIds, tier]);

  const getPart = (cat: string): string => PARTS_LIST.find((p) => p.category === cat && selectedPartIds.includes(p.id))?.id ?? "";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="font-display text-5xl">KONFIGURATOR</h1>
      <p className="font-mono text-xs text-mutedsteel mt-2">BASIS {basis.nama.toUpperCase()} × {aliran.nama.toUpperCase()} — COMPAT: {compat.level.toUpperCase()}</p>
      {compat.level !== "hijau" && (
        <p className={`mt-3 font-mono text-xs border p-3 ${compat.level === "merah" ? "border-safety text-safety" : "border-copper text-copper"}`}>
          ⚠ {compat.note}
        </p>
      )}

      {/* STEP NAV */}
      <div className="mt-6 flex gap-2 font-mono text-xs">
        {[1, 2, 3, 4].map((s) => (
          <button key={s} onClick={() => setStep(s)} className={`px-4 py-2 border ${step === s ? "bg-safety text-asphalt border-safety font-bold" : "border-line text-mutedsteel"}`}>
            {s}. {["BASIS", "ALIRAN", "BLUEPRINT+3D", "BUDGET"][s - 1]}
          </button>
        ))}
      </div>

      {step === 1 && (
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          {BASIS_LIST.map((b) => (
            <button key={b.id} onClick={() => setBasis(b.id)} className={`text-left steel-card p-4 ${basisId === b.id ? "border-safety" : ""}`}>
              <p className="font-display text-2xl">{b.nama.toUpperCase()}</p>
              <p className="font-mono text-[11px] text-mutedsteel">{b.mesin} — WB {b.wheelbaseMm}mm</p>
              <p className="font-mono text-[11px] mt-2">{b.hargaBahan2026} — POTONG {b.tingkatPotong}</p>
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="mt-6 grid md:grid-cols-5 gap-3">
          {ALIRAN_LIST.map((a) => (
            <button key={a.id} onClick={() => setAliran(a.id)} className={`text-left steel-card p-3 ${aliranId === a.id ? "border-safety" : ""}`}>
              <p className="font-display text-xl">{a.nama.toUpperCase()}</p>
              <p className="font-mono text-[10px] text-mutedsteel">{a.sudutPunggung}</p>
              <p className="text-xs mt-2">{a.deskripsiBengkel}</p>
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex gap-2 font-mono text-[11px]">
              {(["visual", "blueprint", "3d"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)} className={`px-3 py-1 border ${mode === m ? "bg-steel text-asphalt" : "border-line text-mutedsteel"}`}>
                  {m === "visual" ? "2D VISUAL" : m === "blueprint" ? "BLUEPRINT" : "3D"}
                </button>
              ))}
              <input type="color" value={warna} onChange={(e) => setWarna(e.target.value)} className="ml-auto w-10 h-7 bg-transparent" title="Warna tangki" />
            </div>
            {mode === "3d" ? (
              <Viewer3D warna={warna} exhaustHigh={selectedPartIds.includes("exhaust-highmount")} />
            ) : (
              <div className={`steel-card p-4 ${mode === "blueprint" ? "blueprint-grid" : ""}`}>
                <SideViewSvg tankId={getPart("tank")} seatId={getPart("seat")} barId={getPart("handlebar")} lampId={getPart("lamp")} exhaustId={getPart("exhaust")} warna={warna} blueprint={mode === "blueprint"} />
              </div>
            )}
            {mode === "3d" && <ARPanel basisId={basisId} />}
            <BlueprintOverlay aliranName={aliran.nama} seatHeightMm={680} wheelbaseMm={1315} />
          </div>
          <div className="steel-card p-4 h-fit">
            <p className="font-mono text-[11px] text-mutedsteel mb-3">PILIH PART (TAP UNTUK GANTI)</p>
            <div className="space-y-4">
              {(["tank", "handlebar", "wheel", "tire", "exhaust", "lamp", "seat", "paint"] as const).map((cat) => (
                <div key={cat}>
                  <p className="font-mono text-[11px] text-safety uppercase">{cat}</p>
                  <div className="mt-1 space-y-1">
                    {PARTS_LIST.filter((p) => p.category === cat).map((p) => (
                      <button key={p.id} onClick={() => togglePart(p.id)} className={`block w-full text-left text-xs px-2 py-1 border ${selectedPartIds.includes(p.id) ? "border-safety bg-safety/10" : "border-line text-mutedsteel"}`}>
                        {selectedPartIds.includes(p.id) ? "● " : "○ "}{p.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="mt-6 space-y-4">
          <div className="flex gap-2 font-mono text-xs">
            {(["budget", "mid", "premium"] as const).map((t) => (
              <button key={t} onClick={() => setTier(t)} className={`px-4 py-2 border ${tier === t ? "bg-safety text-asphalt border-safety font-bold" : "border-line"}`}>
                {t === "budget" ? "HEMAT" : t === "mid" ? "MENENGAH" : "MAKSIMAL"}
              </button>
            ))}
            <a href={`/hasil/vixion-bobcafe-hybrid?tier=${tier}`} className="ml-auto border border-line px-4 py-2 hover:border-steel">SIMPAN → DAPAT URL SHAREABLE</a>
          </div>
          <PartTable lines={budget.lines} tier={tier} totalBarang={budget.totalBarang} totalJasa={budget.totalJasa} buffer={budget.buffer} grandTotal={budget.grandTotal} />
          <div className="steel-card p-4 font-mono text-[11px] text-mutedsteel">
            <p>SHEET 06 — CATATAN BENGKEL: Potong subframe tidak ubah no. rangka. Ganti warna urus STNK ±Rp 500rb (di luar total). Waktu 21-28 hari kerja.</p>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between font-mono text-xs">
        <button onClick={() => setStep((s) => Math.max(1, s - 1))} className="border border-line px-5 py-2">← KEMBALI</button>
        <button onClick={() => setStep((s) => Math.min(4, s + 1))} className="btn-safety px-5 py-2">LANJUT →</button>
      </div>
    </div>
  );
}

export default function KonfiguratorPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-8 font-mono text-xs text-mutedsteel">MEMUAT KONFIGURATOR…</div>}>
      <KonfiguratorInner />
    </Suspense>
  );
}
