"use client";

import { useEffect, useState } from "react";
import { AR_MODELS } from "@/config/site";

// Honest AR panel: checks if the GLB actually exists before showing AR buttons.
// No fake AR — if the scan isn't uploaded yet, user keeps the procedural 3D.
export default function ARPanel({ basisId }: { basisId: string }) {
  const [status, setStatus] = useState<"checking" | "ready" | "missing">("checking");
  const model = AR_MODELS[basisId];

  useEffect(() => {
    if (!model) {
      setStatus("missing");
      return;
    }
    let cancelled = false;
    fetch(model.glb, { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setStatus(r.ok ? "ready" : "missing");
      })
      .catch(() => {
        if (!cancelled) setStatus("missing");
      });
    return () => {
      cancelled = true;
    };
  }, [model]);

  if (!model || status === "missing") {
    return (
      <p className="mt-2 font-mono text-[11px] text-mutedsteel">
        AR scan asli belum di-upload untuk basis ini (lihat /public/3d/manifest.json). Sementara pakai 3D prosedural di atas — proporsi sama.
      </p>
    );
  }
  if (status === "checking") {
    return <p className="mt-2 font-mono text-[11px] text-mutedsteel">CEK MODEL AR…</p>;
  }
  const sceneViewer = `intent://arvr.google.com/scene-viewer/1.0?file=${model.glb}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${model.glb};end;`;
  return (
    <div className="mt-2 flex gap-2 font-mono text-[11px]">
      <a href={sceneViewer} className="border border-line px-3 py-2 hover:border-steel">
        LIHAT AR (ANDROID) →
      </a>
      <a href={model.usdz} rel="ar" className="border border-line px-3 py-2 hover:border-steel">
        LIHAT AR (iOS) →
      </a>
    </div>
  );
}
