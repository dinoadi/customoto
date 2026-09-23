import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CUSTOMOTO — Studio desain motor custom";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121210",
          color: "#E8E6E1",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", background: "#FF4D00", color: "#121210", fontWeight: 900, fontSize: 30, padding: "10px 24px", width: 320, letterSpacing: 4 }}>
          CUSTOMOTO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontWeight: 900, fontSize: 84, lineHeight: 1, letterSpacing: 2 }}>
            DESAIN MOTORMU.
            <br />
            LIHAT HASILNYA.
          </div>
          <div style={{ fontSize: 30, color: "#A8A6A1" }}>
            Vixion • Scorpio • Tiger → Bobber, Cafe Racer, Japstyle, Scrambler — blueprint 2D + 3D interaktif
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#A8A6A1" }}>
          <span>POTONG • LAS • CAT • JALAN</span>
          <span>Harga acuan referensi</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
