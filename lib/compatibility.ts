import { BASIS_LIST } from "@/data/basis";

export type CompatLevel = "hijau" | "kuning" | "merah";

export interface CompatResult {
  level: CompatLevel;
  note: string;
}

// Matrix jujur bengkel: basis x aliran
const RED_COMBOS: Record<string, string[]> = {
  "vixion-2013": ["chopper"],
  "byson-2014": ["chopper"],
  "cb150r-2015": ["chopper"],
  "mt25-2017": ["chopper"],
};

const YELLOW_COMBOS: Record<string, string[]> = {
  "vixion-2013": ["cafe-racer", "bobber", "chopper"],
  "tiger-2000": ["cafe-racer", "chopper"],
  "thunder-250": ["cafe-racer", "tracker"],
};

export function checkCompatibility(basisId: string, aliranId: string): CompatResult {
  if (RED_COMBOS[basisId]?.includes(aliranId)) {
    return {
      level: "merah",
      note: "Butuh ubah rangka total + biaya las +30%. Rekomendasi bengkel: ganti basis ke Scorpio 225.",
    };
  }
  if (YELLOW_COMBOS[basisId]?.includes(aliranId)) {
    return {
      level: "kuning",
      note: "Bisa dibangun tapi butuh kerja ekstra (cover radiator / fitting tangki). Konsultasikan dulu.",
    };
  }
  const basis = BASIS_LIST.find((b) => b.id === basisId);
  if (basis && !basis.cocokUntuk.includes(aliranId)) {
    return {
      level: "kuning",
      note: "Kombinasi tidak umum. Bisa, tapi proporsi perlu mockup fisik dulu sebelum potong.",
    };
  }
  return { level: "hijau", note: "Kombinasi ideal. Potong ringan-sedang, proporsi natural." };
}
