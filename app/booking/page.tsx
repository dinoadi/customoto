"use client";

import { useMemo, useState } from "react";
import { BASIS_LIST } from "@/data/basis";
import { ALIRAN_LIST } from "@/data/aliran";
import { useBuild } from "@/store/useBuild";
import { buildBudget, formatIDR } from "@/lib/budget";
import { SITE } from "@/config/site";

export default function BookingPage() {
  const { basisId, aliranId, selectedPartIds, tier } = useBuild();
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [tanggal, setTanggal] = useState("");

  const basis = BASIS_LIST.find((b) => b.id === basisId);
  const aliran = ALIRAN_LIST.find((a) => a.id === aliranId);
  const budget = useMemo(() => buildBudget(selectedPartIds, tier), [selectedPartIds, tier]);

  const pesan = `Halo Customoto! Saya ${nama || "(nama)"} ingin konsultasi.%0A` +
    `Basis: ${basis?.nama ?? basisId}%0AAliran: ${aliran?.nama ?? aliranId}%0A` +
    `Tier: ${tier} — Estimasi: ${formatIDR(budget.grandTotal)}%0A` +
    `Part: ${selectedPartIds.join(", ")}%0A` +
    `Preferensi tanggal: ${tanggal || "-"}%0AWA saya: ${wa || "-"}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <p className="font-mono text-xs text-safety">BOOKING — ANTRIAN BENGKEL</p>
      <h1 className="font-display text-5xl mt-2">KONSULTASI BUILD</h1>
      <p className="mt-2 font-mono text-xs text-mutedsteel">
        Konfigurasimu dari store otomatis terbawa. Isi nama + WA, klik kirim — masuk WA bengkel dengan spec lengkap.
      </p>
      <div className="mt-6 steel-card p-4 space-y-3">
        <label className="block font-mono text-xs">
          NAMA
          <input value={nama} onChange={(e) => setNama(e.target.value)} className="mt-1 w-full bg-asphalt border border-line px-3 py-2 text-steel" placeholder="Cth: Arief" />
        </label>
        <label className="block font-mono text-xs">
          NO. WA
          <input value={wa} onChange={(e) => setWa(e.target.value)} className="mt-1 w-full bg-asphalt border border-line px-3 py-2 text-steel" placeholder="Cth: 0812xxxx" />
        </label>
        <label className="block font-mono text-xs">
          TANGGAL PREFERENSI
          <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="mt-1 w-full bg-asphalt border border-line px-3 py-2 text-steel" />
        </label>
        <div className="font-mono text-xs bg-coal border border-line p-3">
          <p>BASIS: {basis?.nama}</p>
          <p>ALIRAN: {aliran?.nama}</p>
          <p>ESTIMASI ({tier.toUpperCase()}): {formatIDR(budget.grandTotal)}</p>
        </div>
        <a
          href={`https://wa.me/${SITE.waNumber}?text=${pesan}`}
          target="_blank"
          rel="noreferrer"
          className="btn-safety inline-block px-6 py-3 font-mono text-sm"
        >
          KIRIM KE WA BENGKEL →
        </a>
      </div>
    </div>
  );
}
