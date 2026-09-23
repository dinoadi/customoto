import { PARTS_LIST, type PartOption } from "@/data/parts";
import { JASA } from "@/config/site";

export type BudgetTier = "budget" | "mid" | "premium";

export interface BudgetLine {
  part: PartOption;
  tier: BudgetTier;
  barang: number;
  jasa: number;
}

export function buildBudget(selectedIds: string[], tier: BudgetTier): {
  lines: BudgetLine[];
  totalBarang: number;
  totalJasa: number;
  buffer: number;
  grandTotal: number;
} {
  const lines: BudgetLine[] = selectedIds
    .map((id) => PARTS_LIST.find((p) => p.id === id))
    .filter((p): p is PartOption => Boolean(p))
    .map((part) => ({
      part,
      tier,
      barang: part.priceTier[tier],
      jasa: part.laborCost,
    }));

  const totalBarang = lines.reduce((s, l) => s + l.barang, 0);
  const totalJasa = lines.reduce((s, l) => s + l.jasa, 0);
  // Fixed workshop extras dari config produksi (ganti di config/site.ts)
  const extraJasa = JASA.subframeCutLas + JASA.paintPowder + JASA.assemblyQc;
  const totalJasaFull = totalJasa + extraJasa;
  const subtotal = totalBarang + totalJasaFull;
  const buffer = Math.round(subtotal * 0.1);
  return {
    lines,
    totalBarang,
    totalJasa: totalJasaFull,
    buffer,
    grandTotal: subtotal + buffer,
  };
}

export function formatIDR(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}

export const DEFAULT_BOBCAFE_IDS = [
  "tank-teardrop-9L",
  "seat-single-cowl",
  "bar-clubman",
  "wheel-tk-17",
  "tire-swallow-dual",
  "exhaust-megaphone",
  "lamp-daymaker-7",
  "lamp-stoplamp-strip",
  "paint-british-green",
];
