import { PARTS_LIST } from "@/data/parts";
import { buildBudget, formatIDR, type BudgetTier } from "@/lib/budget";
import { DEFAULT_BOBCAFE_IDS } from "@/lib/budget";
import { marketplaceLinks } from "@/data/parts";
import { SITE } from "@/config/site";
import SideViewSvg from "@/components/visualizer/SideViewSvg";
import PrintButton from "@/components/PrintButton";

export default function HasilPage({ params, searchParams }: { params: { id: string }; searchParams: { tier?: string } }) {
  const tier = (searchParams.tier === "budget" || searchParams.tier === "premium" ? searchParams.tier : "mid") as BudgetTier;
  const ids = params.id === "vixion-bobcafe-hybrid" ? DEFAULT_BOBCAFE_IDS : DEFAULT_BOBCAFE_IDS;
  const budget = buildBudget(ids, tier);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <p className="font-mono text-xs text-safety">SPEC SHEET SHAREABLE — /hasil/{params.id}?tier={tier}</p>
      <h1 className="font-display text-5xl mt-2">VIXION 2013 → BOBBER-CAFE HYBRID</h1>
      <p className="mt-2 text-steel/80">British Green doff + lis emas. Subframe potong 12cm + U-loop. Monoshock turun 3cm. Jok 680mm, WB 1315mm.</p>

      <div className="mt-6 steel-card p-4">
        <SideViewSvg tankId="tank-teardrop-9L" seatId="seat-single-cowl" barId="bar-clubman" lampId="lamp-daymaker-7" exhaustId="exhaust-megaphone" warna="#2F3D33" blueprint={false} />
      </div>

      <div className="mt-6 steel-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="font-mono text-[11px] text-mutedsteel border-b border-line text-left">
              <th className="p-3">NO / PART</th>
              <th className="p-3">HARGA</th>
              <th className="p-3">LINK</th>
            </tr>
          </thead>
          <tbody>
            {budget.lines.map(({ part, barang }, i) => {
              const links = marketplaceLinks(part.marketplaceQ);
              return (
                <tr key={part.id} className="border-b border-line/60">
                  <td className="p-3"><span className="font-mono text-mutedsteel">{String(i + 1).padStart(2, "0")}</span> <strong>{part.name}</strong><br /><span className="font-mono text-[11px] text-mutedsteel">{part.spec}</span></td>
                  <td className="p-3 font-mono whitespace-nowrap">{formatIDR(barang)}</td>
                  <td className="p-3 font-mono text-[11px]">
                    <a className="underline" href={links.tokopedia} target="_blank" rel="noreferrer">Tokopedia</a>{" "}
                    <a className="underline" href={links.shopee} target="_blank" rel="noreferrer">Shopee</a>{" "}
                    <a className="underline" href={links.bukalapak} target="_blank" rel="noreferrer">Bukalapak</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="p-4 font-mono text-xs bg-coal space-y-1">
          <p className="flex justify-between"><span>BARANG</span><span>{formatIDR(budget.totalBarang)}</span></p>
          <p className="flex justify-between"><span>JASA</span><span>{formatIDR(budget.totalJasa)}</span></p>
          <p className="flex justify-between"><span>BUFFER 10%</span><span>{formatIDR(budget.buffer)}</span></p>
          <p className="flex justify-between text-lg text-safety font-bold border-t border-line pt-2"><span>TOTAL {tier.toUpperCase()}</span><span>{formatIDR(budget.grandTotal)}</span></p>
        </div>
      </div>

      <div className="mt-4 flex gap-3 font-mono text-xs">
        <a href="/konfigurator" className="btn-safety px-5 py-2">EDIT DI KONFIGURATOR →</a>
        <a href={`/booking`} className="border border-line px-5 py-2 hover:border-steel">BOOKING BENGKEL →</a>
        <PrintButton />
        <a href={`https://wa.me/${SITE.waNumber}?text=${encodeURIComponent("Halo Customoto, saya mau build " + params.id + " tier " + tier + " total " + formatIDR(budget.grandTotal))}`} className="border border-line px-5 py-2" target="_blank" rel="noreferrer">KONSULTASI WA →</a>
    </div>
    </div>
  );
}
