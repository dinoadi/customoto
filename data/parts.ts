export type PartCategory =
  | "tank"
  | "handlebar"
  | "wheel"
  | "tire"
  | "exhaust"
  | "lamp"
  | "seat"
  | "paint";

export interface PartOption {
  id: string;
  category: PartCategory;
  name: string;
  spec: string;
  priceTier: { budget: number; mid: number; premium: number };
  laborCost: number;
  marketplaceQ: string;
  workshopNote: string;
  threeDAssetId: string;
}

export const PARTS_LIST: PartOption[] = [
  // TANGKI
  { id: "tank-teardrop-9L", category: "tank", name: "Tangki Teardrop 9L Press", spec: "Plat 1.2mm, tutup Monza, kran baru", priceTier: { budget: 850000, mid: 1250000, premium: 1800000 }, laborCost: 200000, marketplaceQ: "tangki+teardrop+9L+press+custom", workshopNote: "Wajib fitting + las dudukan baru untuk Vixion.", threeDAssetId: "tank_teardrop" },
  { id: "tank-kapsul-7L", category: "tank", name: "Tangki Kapsul Slim 7L", spec: "Japstyle mungil, plat 1mm", priceTier: { budget: 750000, mid: 1050000, premium: 1500000 }, laborCost: 200000, marketplaceQ: "tangki+japstyle+slim+custom", workshopNote: "Kapasitas kecil, untuk harian siapkan SPBU rutin.", threeDAssetId: "tank_kapsul" },
  { id: "tank-sportster-12L", category: "tank", name: "Tangki Sportster 12L", spec: "Besar, cocok bobber/chopper", priceTier: { budget: 950000, mid: 1400000, premium: 1950000 }, laborCost: 250000, marketplaceQ: "tangki+sportster+custom+bobber", workshopNote: "Berat, cek dudukan karet anti-getar.", threeDAssetId: "tank_sportster" },
  { id: "tank-tracker-10L", category: "tank", name: "Tangki Tracker Datar 10L", spec: "Garis lurus cafe/tracker", priceTier: { budget: 900000, mid: 1300000, premium: 1750000 }, laborCost: 200000, marketplaceQ: "tangki+tracker+cafe+racer+custom", workshopNote: "Garis lurus wajib sejajar jok.", threeDAssetId: "tank_tracker" },
  // STANG
  { id: "bar-clubman", category: "handlebar", name: "Stang Clubman 68cm", spec: "Rise 8cm, 22mm, hitam", priceTier: { budget: 180000, mid: 325000, premium: 550000 }, laborCost: 100000, marketplaceQ: "stang+clubman+22mm+custom", workshopNote: "Kompromi tegak vs nunduk.", threeDAssetId: "bar_clubman" },
  { id: "bar-clipon", category: "handlebar", name: "Stang Clip-On Jepit Shock", spec: "Cafe murni, rendah", priceTier: { budget: 250000, mid: 450000, premium: 750000 }, laborCost: 150000, marketplaceQ: "stang+clip+on+cafe+racer", workshopNote: "Pegal untuk macet >30 mnt.", threeDAssetId: "bar_clipon" },
  { id: "bar-fatbar", category: "handlebar", name: "Stang Fatbar 82cm + Raiser", spec: "Lebar, scrambler/tracker", priceTier: { budget: 220000, mid: 380000, premium: 650000 }, laborCost: 100000, marketplaceQ: "stang+fatbar+protaper+tracker", workshopNote: "Cek panjang kabel gas/kopling.", threeDAssetId: "bar_fatbar" },
  { id: "bar-pullback", category: "handlebar", name: "Stang Pullback Bobber", spec: "Tinggi, tarik ke belakang", priceTier: { budget: 200000, mid: 350000, premium: 600000 }, laborCost: 100000, marketplaceQ: "stang+pullback+bobber+custom", workshopNote: "Santai, footstep disarankan maju.", threeDAssetId: "bar_pullback" },
  // VELG
  { id: "wheel-tk-17", category: "wheel", name: "Velg TK Racing 17 Set", spec: "2.50-17 depan, 3.50-17 belakang, 36H", priceTier: { budget: 1250000, mid: 1750000, premium: 2600000 }, laborCost: 250000, marketplaceQ: "velg+TK+racing+ring+17+set+vixion", workshopNote: "Stel velg + bubut tromol 2mm untuk Vixion.", threeDAssetId: "wheel_17" },
  { id: "wheel-rossi-16", category: "wheel", name: "Velg Rossi Ring 16 Gambot", spec: "3.00-16 / 3.50-16 bobber", priceTier: { budget: 1300000, mid: 1850000, premium: 2700000 }, laborCost: 250000, marketplaceQ: "velg+rossi+ring+16+bobber", workshopNote: "Bobber sejati pakai 16. Handling lebih berat.", threeDAssetId: "wheel_16" },
  { id: "wheel-did-17", category: "wheel", name: "Velg DID Premium 17", spec: "Aluminium high-strength", priceTier: { budget: 1800000, mid: 2500000, premium: 3400000 }, laborCost: 250000, marketplaceQ: "velg+DID+ring+17+original", workshopNote: "Premium, kuat untuk touring.", threeDAssetId: "wheel_did" },
  // BAN
  { id: "tire-swallow-dual", category: "tire", name: "Ban Swallow Dual 110+130/80-17", spec: "Dual-purpose S212", priceTier: { budget: 950000, mid: 1350000, premium: 1750000 }, laborCost: 100000, marketplaceQ: "ban+swallow+dual+purpose+130%2F80+ring+17", workshopNote: "Best value harian + gaya.", threeDAssetId: "tire_dual" },
  { id: "tire-shinko-vintage", category: "tire", name: "Ban Shinko E270 Vintage", spec: "Road vintage 4.00-4.50", priceTier: { budget: 1400000, mid: 2100000, premium: 2900000 }, laborCost: 100000, marketplaceQ: "ban+shinko+vintage+classic", workshopNote: "Empuk, mahal, untuk kontes/harian santai.", threeDAssetId: "tire_vintage" },
  { id: "tire-irc-tahu", category: "tire", name: "Ban IRC Tahu GP-1 Scrambler", spec: "Blok tahu 110/130", priceTier: { budget: 1100000, mid: 1550000, premium: 2100000 }, laborCost: 100000, marketplaceQ: "ban+tahu+scrambler+irc+gp1", workshopNote: "Berisik di aspal, gigit di tanah.", threeDAssetId: "tire_tahu" },
  // KNALPOT
  { id: "exhaust-megaphone", category: "exhaust", name: "Knalpot Megaphone Stainless", spec: "Full system 304 + DB killer", priceTier: { budget: 900000, mid: 1400000, premium: 2200000 }, laborCost: 150000, marketplaceQ: "knalpot+custom+stainless+vixion+bobber", workshopNote: "Tanpa DB killer tilang. Sertakan DB killer.", threeDAssetId: "exhaust_mega" },
  { id: "exhaust-highmount", category: "exhaust", name: "Knalpot High-Mount Scrambler", spec: "Pipa atas + heatguard", priceTier: { budget: 950000, mid: 1500000, premium: 2300000 }, laborCost: 180000, marketplaceQ: "knalpot+scrambler+high+mount", workshopNote: "Wajib heatguard, panas paha.", threeDAssetId: "exhaust_high" },
  { id: "exhaust-shorty", category: "exhaust", name: "Knalpot Shorty Undertail", spec: "Pendek, tracker modern", priceTier: { budget: 650000, mid: 1050000, premium: 1700000 }, laborCost: 150000, marketplaceQ: "knalpot+shorty+custom+tracker", workshopNote: "Suara keras, cek Pilar.", threeDAssetId: "exhaust_shorty" },
  // LAMPU
  { id: "lamp-daymaker-7", category: "lamp", name: "Headlamp Daymaker 7\" + DRL", spec: "LED 40W + bracket", priceTier: { budget: 350000, mid: 550000, premium: 950000 }, laborCost: 120000, marketplaceQ: "headlamp+daymaker+7+inch+vintage", workshopNote: "Terang, wajib setting kemiringan.", threeDAssetId: "lamp_7" },
  { id: "lamp-bullet-575", category: "lamp", name: "Lampu Bullet 5.75\" + Grill", spec: "Klasik + grill scrambler", priceTier: { budget: 280000, mid: 450000, premium: 750000 }, laborCost: 120000, marketplaceQ: "headlamp+bullet+5.75+vintage+grill", workshopNote: "Ringkas untuk japstyle.", threeDAssetId: "lamp_bullet" },
  { id: "lamp-stoplamp-strip", category: "lamp", name: "Stoplamp Strip + Sein Bullet", spec: "LED strip + sein aluminium", priceTier: { budget: 180000, mid: 275000, premium: 450000 }, laborCost: 100000, marketplaceQ: "stoplamp+led+strip+custom+sein+bullet", workshopNote: "Wajib reflektor agar lolos inspeksi.", threeDAssetId: "lamp_strip" },
  // JOK
  { id: "seat-single-cowl", category: "seat", name: "Jok Single + Cowl Fiberglass", spec: "MBtech + busa latex", priceTier: { budget: 550000, mid: 850000, premium: 1250000 }, laborCost: 150000, marketplaceQ: "jok+single+seat+bobber+cowl", workshopNote: "Single, tidak untuk boncengan.", threeDAssetId: "seat_single" },
  { id: "seat-cafe-tawon", category: "seat", name: "Jok Buntut Tawon Cafe", spec: "Fiberglass + kulit", priceTier: { budget: 600000, mid: 900000, premium: 1350000 }, laborCost: 150000, marketplaceQ: "jok+cafe+racer+buntut+tawon", workshopNote: "Garis wajib lurus dengan tangki.", threeDAssetId: "seat_cafe" },
  { id: "seat-brat-flat", category: "seat", name: "Jok Flat Brat Panjang", spec: "Datar, bisa boncengan", priceTier: { budget: 450000, mid: 700000, premium: 1050000 }, laborCost: 120000, marketplaceQ: "jok+brat+flat+custom", workshopNote: "Paling nyaman harian.", threeDAssetId: "seat_brat" },
  // CAT
  { id: "paint-british-green", category: "paint", name: "Cat British Green Doff + Lis", spec: "PU + clear matte + lis emas", priceTier: { budget: 1200000, mid: 1800000, premium: 2800000 }, laborCost: 400000, marketplaceQ: "cat+british+green+motor+custom", workshopNote: "Doff susah touch-up, siapkan sisa cat.", threeDAssetId: "paint_green" },
  { id: "paint-gunmetal", category: "paint", name: "Cat Gunmetal + Copper Detail", spec: "Metallic + powder rangka", priceTier: { budget: 1100000, mid: 1700000, premium: 2600000 }, laborCost: 400000, marketplaceQ: "cat+gunmetal+motor+custom", workshopNote: "Kekinian, cocok foto malam.", threeDAssetId: "paint_gunmetal" },
  { id: "paint-sand", category: "paint", name: "Cat Sand Beige Scrambler", spec: "Solid + clear + skid plate hitam", priceTier: { budget: 1000000, mid: 1600000, premium: 2400000 }, laborCost: 400000, marketplaceQ: "cat+sand+beige+scrambler", workshopNote: "Kotor tidak kelihatan, enak touring.", threeDAssetId: "paint_sand" },
];

export function marketplaceLinks(q: string): { tokopedia: string; shopee: string; bukalapak: string } {
  return {
    tokopedia: `https://www.tokopedia.com/search?st=product&q=${q}`,
    shopee: `https://shopee.co.id/search?keyword=${q.replace(/\+/g, "%20")}`,
    bukalapak: `https://www.bukalapak.com/products?search%5Bkeywords%5D=${q.replace(/\+/g, "+")}`,
  };
}
