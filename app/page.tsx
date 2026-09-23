import { BASIS_LIST } from "@/data/basis";
import { ALIRAN_LIST } from "@/data/aliran";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* HERO */}
      <section className="py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-mono text-xs text-safety mb-3">STUDIO CUSTOM — JKT / BDG — SEJAK 2016</p>
          <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">
            POTONG.<br />LAS. CAT.<br />JALAN.
          </h1>
          <p className="mt-5 text-steel/80 max-w-md">
            Desain motormu sendiri: pilih basis Vixion, Scorpio, Tiger, pilih aliran Bobber, Cafe Racer, Japstyle, Scrambler.
            Lihat blueprint 2D + 3D interaktif biar kebayang hasil akhirnya sebelum eksekusi — lengkap dengan acuan referensi budget.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/konfigurator" className="btn-safety px-6 py-3 font-mono text-sm">
              RAKIT SEKARANG →
            </a>
            <a href="/hasil/vixion-bobcafe-hybrid" className="border border-line px-6 py-3 font-mono text-sm hover:border-steel">
              LIHAT CONTOH VIXION 17,8JT
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] text-mutedsteel">
            * Contoh mode Menengah 2026. Harga bersifat acuan referensi, bukan harga final — dikonfirmasi saat eksekusi. Semua part visual ada padanannya di marketplace.
          </p>
        </div>
        <div className="steel-card p-5">
          <p className="font-mono text-[11px] text-mutedsteel mb-2">LIVE TEASER — VIXION → BOBBER-CAFE HYBRID</p>
          <div className="blueprint-grid border border-blueprintline p-4 font-mono text-xs">
            <p className="text-blueprintline">SIDE-VIEW SVG + DIMENSI</p>
            <p className="mt-2 text-2xl text-steel font-display">WB 1315mm / SEAT 680mm / RAKE 27°</p>
            <p className="mt-2 text-steel/70">Subframe potong 12cm + U-loop. Tangki teardrop 9L. Velg TK 17 + Swallow dual.</p>
            <a href="/konfigurator" className="inline-block mt-4 text-safety underline">Buka di konfigurator →</a>
          </div>
        </div>
      </section>

      {/* BASIS */}
      <section className="py-10">
        <h2 className="font-display text-4xl mb-6">1 — PILIH BASIS</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {BASIS_LIST.slice(0, 6).map((b) => (
            <a key={b.id} href={`/konfigurator?basis=${b.id}`} className="steel-card p-4 hover:border-safety block">
              <p className="font-display text-2xl">{b.nama.toUpperCase()}</p>
              <p className="font-mono text-[11px] text-mutedsteel mt-1">{b.mesin} — {b.rangka}</p>
              <p className="font-mono text-[11px] mt-3">POTONG: {b.tingkatPotong} — {b.hargaBahan2026}</p>
              <p className="text-sm mt-2 text-steel/80">+ {b.kelebihan}</p>
              <p className="font-mono text-[11px] mt-1 text-safety/80">− {b.kelemahan}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ALIRAN */}
      <section className="py-10">
        <h2 className="font-display text-4xl mb-6">2 — PILIH ALIRAN</h2>
        <div className="grid md:grid-cols-5 gap-3">
          {ALIRAN_LIST.map((a) => (
            <a key={a.id} href={`/konfigurator?aliran=${a.id}`} className="steel-card p-3 hover:border-safety block">
              <p className="font-display text-xl">{a.nama.toUpperCase()}</p>
              <p className="font-mono text-[10px] text-mutedsteel mt-1">{a.sudutPunggung}</p>
              <p className="text-xs mt-2 text-steel/75">{a.ciri.join(" • ")}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CARA KERJA */}
      <section className="py-10 grid md:grid-cols-4 gap-3 font-mono text-xs">
        {[
          ["01 BASIS", "Pilih motor + kondisi. Sistem cek kompatibilitas jujur."],
          ["02 ALIRAN", "Bobber / Cafe / Japstyle / Tracker. Lihat ergonomi."],
          ["03 BLUEPRINT+3D", "Side-view, potongan rangka, riding triangle, 3D putar."],
          ["04 BUDGET", "Part + jasa + buffer 10%. Link Tokopedia/Shopee/Bukalapak."],
        ].map(([t, d]) => (
          <div key={t} className="border border-line p-4 bg-coal">
            <p className="text-safety font-bold">{t}</p>
            <p className="mt-2 text-steel/80">{d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
