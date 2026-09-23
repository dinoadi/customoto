import type { Metadata } from "next";
import { SITE } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "CUSTOMOTO — Studio Custom Motor | Konfigurator Bobber, Cafe Racer, Japstyle",
  description:
    "Rakit motor custom impianmu: pilih basis Vixion, Scorpio, Tiger, pilih aliran Bobber / Cafe Racer / Scrambler, lihat blueprint 2D + 3D, hitung budget transparan.",
  manifest: "/manifest.webmanifest",
  icons: [{ url: "/icon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: "CUSTOMOTO — Desain Motormu, Lihat Hasilnya",
    description: "Konfigurator motor custom: blueprint 2D + 3D interaktif + acuan referensi budget.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-asphalt text-steel antialiased">
        <header className="border-b border-line bg-coal/90 sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-display text-3xl tracking-wide">
              MOTO<span className="text-safety">CUSTO</span>
              <span className="ml-2 font-mono text-[11px] text-mutedsteel align-middle">
                GARAGE / JKT-BDG
              </span>
            </a>
            <nav className="hidden md:flex gap-6 font-mono text-xs text-mutedsteel">
              <a className="hover:text-steel" href="/konfigurator">KONFIGURATOR</a>
              <a className="hover:text-steel" href="/galeri">GALERI</a>
              <a className="hover:text-steel" href="/edukasi/aliran/bobcafe-hybrid">EDUKASI</a>
              <a className="hover:text-steel" href="/konfigurator?step=4">BUDGET</a>
              <a className="hover:text-steel" href="/booking">BOOKING</a>
            </nav>
            <a
              href="/konfigurator"
              className="btn-safety px-4 py-2 font-mono text-xs rounded-sm"
            >
              RAKIT MOTORMU →
            </a>
          </div>
        </header>
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "CUSTOMOTO — Studio Custom Motor",
              address: SITE.address,
              openingHours: "Mo-Sa 09:00-18:00",
            }),
          }}
        />
        <footer className="border-t border-line mt-16">
          <div className="mx-auto max-w-7xl px-4 py-8 font-mono text-xs text-mutedsteel flex flex-col md:flex-row justify-between gap-4">
            <p>CUSTOMOTO © 2026 — {SITE.address} — {SITE.hours}.</p>
            <p>Potong subframe ≠ ubah no. rangka. Ganti warna wajib urus STNK.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
