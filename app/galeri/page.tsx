import { BASIS_LIST } from "@/data/basis";
import { ALIRAN_LIST } from "@/data/aliran";
import { checkCompatibility } from "@/lib/compatibility";

const SHOWCASE: Array<{ basisId: string; aliranId: string; nama: string; total: string; waktu: string }> = [
  { basisId: "vixion-2013", aliranId: "bobcafe-hybrid", nama: "Vixion BobCafe — British Green", total: "Rp 17,8 jt", waktu: "24 hari" },
  { basisId: "scorpio-225", aliranId: "tracker", nama: "Scorpio Tracker — Sand Beige", total: "Rp 19,5 jt", waktu: "28 hari" },
  { basisId: "tiger-2000", aliranId: "scrambler", nama: "Tiger Scrambler — Olive Drab", total: "Rp 18,2 jt", waktu: "26 hari" },
  { basisId: "w175-2019", aliranId: "cafe-racer", nama: "W175 Cafe Murni — Gunmetal", total: "Rp 16,4 jt", waktu: "18 hari" },
  { basisId: "megapro-2010", aliranId: "brat", nama: "Megapro Brat — Matte Black", total: "Rp 11,8 jt", waktu: "16 hari" },
  { basisId: "thunder-250", aliranId: "bobber", nama: "Thunder Bobber 16\" — Maroon", total: "Rp 20,1 jt", waktu: "30 hari" },
];

export default function GaleriPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <p className="font-mono text-xs text-safety">GALERI — BUILD BENGKEL YANG SUDAH JALAN</p>
      <h1 className="font-display text-5xl mt-2">BUKTI, BUKAN RENDER</h1>
      <p className="mt-2 text-steel/80 max-w-2xl">
        Semua build di bawah bisa diklik untuk dibuka di konfigurator dengan part yang sama.
        Total = mode Menengah 2026 sudah termasuk jasa + buffer.
      </p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {SHOWCASE.map((s) => {
          const basis = BASIS_LIST.find((b) => b.id === s.basisId);
          const aliran = ALIRAN_LIST.find((a) => a.id === s.aliranId);
          const compat = checkCompatibility(s.basisId, s.aliranId);
          return (
            <a
              key={s.nama}
              href={`/konfigurator?basis=${s.basisId}&aliran=${s.aliranId}&step=3`}
              className="steel-card p-4 hover:border-safety block"
            >
              <div className="blueprint-grid border border-blueprintline p-4 font-mono text-[11px] text-blueprintline">
                {basis?.nama.toUpperCase()} × {aliran?.nama.toUpperCase()}
              </div>
              <p className="font-display text-2xl mt-3">{s.nama.toUpperCase()}</p>
              <p className="font-mono text-xs mt-1 text-steel/80">
                {s.total} — {s.waktu} — COMPAT {compat.level.toUpperCase()}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
