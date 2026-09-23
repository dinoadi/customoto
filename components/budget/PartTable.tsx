"use client";

import { marketplaceLinks } from "@/data/parts";
import { formatIDR, type BudgetLine, type BudgetTier } from "@/lib/budget";

interface Props {
  lines: BudgetLine[];
  tier: BudgetTier;
  totalBarang: number;
  totalJasa: number;
  buffer: number;
  grandTotal: number;
}

export default function PartTable({ lines, tier, totalBarang, totalJasa, buffer, grandTotal }: Props) {
  return (
    <div className="steel-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="font-mono text-[11px] text-mutedsteel border-b border-line text-left">
              <th className="p-3">PART / SPEK</th>
              <th className="p-3">BARANG ({tier})</th>
              <th className="p-3">JASA</th>
              <th className="p-3">BELI</th>
            </tr>
          </thead>
          <tbody>
            {lines.map(({ part, barang, jasa }) => {
              const links = marketplaceLinks(part.marketplaceQ);
              return (
                <tr key={part.id} className="border-b border-line/60 align-top">
                  <td className="p-3">
                    <p className="font-semibold">{part.name}</p>
                    <p className="font-mono text-[11px] text-mutedsteel mt-1">{part.spec}</p>
                    <p className="font-mono text-[11px] text-safety/90 mt-1">◈ {part.workshopNote}</p>
                  </td>
                  <td className="p-3 font-mono whitespace-nowrap">{formatIDR(barang)}</td>
                  <td className="p-3 font-mono whitespace-nowrap">{formatIDR(jasa)}</td>
                  <td className="p-3 font-mono text-[11px] whitespace-nowrap">
                    <a className="block underline hover:text-safety" href={links.tokopedia} target="_blank" rel="noreferrer">Tokopedia →</a>
                    <a className="block underline hover:text-safety" href={links.shopee} target="_blank" rel="noreferrer">Shopee →</a>
                    <a className="block underline hover:text-safety" href={links.bukalapak} target="_blank" rel="noreferrer">Bukalapak →</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="p-4 font-mono text-xs space-y-1 bg-coal">
        <p className="flex justify-between"><span>TOTAL BARANG</span><span>{formatIDR(totalBarang)}</span></p>
        <p className="flex justify-between"><span>TOTAL JASA (termasuk potong+cat+rakit)</span><span>{formatIDR(totalJasa)}</span></p>
        <p className="flex justify-between text-mutedsteel"><span>BUFFER 10%</span><span>{formatIDR(buffer)}</span></p>
        <p className="flex justify-between text-lg text-safety font-bold pt-2 border-t border-line"><span>GRAND TOTAL (ACUAN)</span><span>{formatIDR(grandTotal)}</span></p>
        </div>
        <p className="text-mutedsteel text-[11px] pt-1">* Acuan referensi pasar 2026 untuk membayangkan budget — bukan harga final. Dikonfirmasi ulang saat eksekusi.</p>
    </div>
  );
}
