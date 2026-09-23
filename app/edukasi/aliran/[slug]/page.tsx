import { ALIRAN_LIST } from "@/data/aliran";
import { BASIS_LIST } from "@/data/basis";

export function generateStaticParams(): Array<{ slug: string }> {
  return ALIRAN_LIST.map((a) => ({ slug: a.id }));
}

export default function EdukasiAliranPage({ params }: { params: { slug: string } }) {
  const aliran = ALIRAN_LIST.find((a) => a.id === params.slug) ?? ALIRAN_LIST[0]!;
  const basisCocok = BASIS_LIST.filter((b) => b.cocokUntuk.includes(aliran.id));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <p className="font-mono text-xs text-safety">EDUKASI ALIRAN — BEDAH BENGKEL</p>
      <h1 className="font-display text-6xl mt-2">{aliran.nama.toUpperCase()}</h1>
      <p className="mt-3 text-steel/85">{aliran.deskripsiBengkel}</p>
      <div className="mt-4 font-mono text-xs text-mutedsteel space-y-1">
        <p>CIRI: {aliran.ciri.join(" • ")}</p>
        <p>ERGONOMI: {aliran.sudutPunggung}</p>
        <p>KESULITAN: {aliran.kesulitan}</p>
      </div>
      <h2 className="font-display text-3xl mt-8 mb-3">BASIS YANG COCOK</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {basisCocok.map((b) => (
          <a key={b.id} href={`/konfigurator?basis=${b.id}&aliran=${aliran.id}&step=3`} className="steel-card p-4 hover:border-safety block">
            <p className="font-display text-xl">{b.nama.toUpperCase()}</p>
            <p className="font-mono text-[11px] text-mutedsteel mt-1">{b.mesin} — {b.hargaBahan2026}</p>
          </a>
        ))}
      </div>
      <a href={`/konfigurator?aliran=${aliran.id}&step=2`} className="btn-safety inline-block mt-8 px-6 py-3 font-mono text-sm">
        RAKIT {aliran.nama.toUpperCase()} SEKARANG →
      </a>
    </div>
  );
}
