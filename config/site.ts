// Central production config. Edit these before launch — no other file hardcodes WA/prices.

export const SITE = {
  name: "CUSTOMOTO",
  domain: "https://customoto.netlify.app", // Live Netlify — ganti domain sendiri bila sudah punya
  waNumber: "6280000000000", // TODO: ganti nomor WA bengkel asli
  address: "Jl. Bengkel No. 88, Bandung", // TODO: alamat asli
  hours: "Senin–Sabtu 09.00–18.00",
  instagram: "https://instagram.com/customoto",
} as const;

// Acuan harga REFERENSI pasar 2026 — untuk perkiraan, bukan harga final bengkel.
export const JASA = {
  subframeCutLas: 800000,
  paintPowder: 2200000,
  assemblyQc: 1500000,
  colorChangeLetter: 500000, // urus warna STNK/BPKB, ditampilkan terpisah
} as const;

export const AR_MODELS: Record<string, { glb: string; usdz: string }> = {
  "vixion-2013": { glb: "/3d/vixion_base_draco.glb", usdz: "/3d/vixion.usdz" },
  "scorpio-225": { glb: "/3d/scorpio_base_draco.glb", usdz: "/3d/scorpio.usdz" },
  "tiger-2000": { glb: "/3d/tiger_base_draco.glb", usdz: "/3d/tiger.usdz" },
};
