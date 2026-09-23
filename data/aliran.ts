export interface AliranCustom {
  id: string;
  nama: string;
  ciri: string[];
  sudutPunggung: string;
  kesulitan: string;
  deskripsiBengkel: string;
}

export const ALIRAN_LIST: AliranCustom[] = [
  {
    id: "bobber",
    nama: "Bobber",
    ciri: ["Jok single", "Spakbor pendek", "Ban gambot"],
    sudutPunggung: "10° tegak, footstep maju",
    kesulitan: "Sedang",
    deskripsiBengkel: "Potong ekor, jok single rendah 650-680mm. Santai, bukan untuk cornering.",
  },
  {
    id: "cafe-racer",
    nama: "Cafe Racer",
    ciri: ["Buntut tawon", "Tangki lurus panjang", "Clip-on"],
    sudutPunggung: "35-40° menunduk",
    kesulitan: "Sedang-Berat",
    deskripsiBengkel: "Garis tangki-jok lurus. Menunduk, pegal untuk macet harian.",
  },
  {
    id: "japstyle",
    nama: "Japstyle",
    ciri: ["Tangki mungil", "Jok datar tipis", "Kaki ramping"],
    sudutPunggung: "15° santai",
    kesulitan: "Ringan",
    deskripsiBengkel: "Aliran paling hemat. Minim potong rangka berat.",
  },
  {
    id: "scrambler",
    nama: "Scrambler",
    ciri: ["Spakbor tinggi", "Ban tahu", "Skid plate"],
    sudutPunggung: "15° tegak adventure",
    kesulitan: "Sedang",
    deskripsiBengkel: "Knalpot high-mount, ground clearance naik 20-30mm.",
  },
  {
    id: "tracker",
    nama: "Street Tracker",
    ciri: ["Ekor datar + number plate", "Ban dual-purpose", "Stang lebar"],
    sudutPunggung: "20° agresif datar",
    kesulitan: "Sedang",
    deskripsiBengkel: "Seimbang harian dan gaya. Paling aman untuk pemula custom.",
  },
  {
    id: "brat",
    nama: "Brat Style",
    ciri: ["Jok flat panjang", "Tangki slim", "Minimalis"],
    sudutPunggung: "15° netral harian",
    kesulitan: "Ringan-Sedang",
    deskripsiBengkel: "Bersih, datar, nyaman boncengan masih bisa.",
  },
  {
    id: "chopper",
    nama: "Chopper",
    ciri: ["Fork panjang", "Rake >35°", "Jok rendah"],
    sudutPunggung: "10° selonjor",
    kesulitan: "Berat",
    deskripsiBengkel: "Ubah geometri total. Las + uji jalan wajib. Biaya las +30%.",
  },
  {
    id: "bobcafe-hybrid",
    nama: "Bobber-Cafe Hybrid",
    ciri: ["Ekor bobber pendek", "Tangki cafe lurus", "Clubman"],
    sudutPunggung: "25° kompromi",
    kesulitan: "Sedang",
    deskripsiBengkel: "Best seller bengkel. Tegak tapi tetap sporty. Cocok Vixion/Scorpio.",
  },
  {
    id: "modern-classic",
    nama: "Modern Classic",
    ciri: ["Basis sport modern", "Buntut klasik", "Lampu LED bulat"],
    sudutPunggung: "20°",
    kesulitan: "Sedang",
    deskripsiBengkel: "Mesin modern, baju klasik. Perlu cover radiator rapi.",
  },
  {
    id: "supermoto-custom",
    nama: "Street Enduro",
    ciri: ["Velg 17 supermoto", "Headlamp kotak", "Knalpot undertail"],
    sudutPunggung: "15° tegak",
    kesulitan: "Ringan",
    deskripsiBengkel: "Ringan, lincah macet. Minim potong.",
  },
];
