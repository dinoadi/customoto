"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BudgetTier } from "@/lib/budget";

export interface BuildState {
  basisId: string;
  aliranId: string;
  selectedPartIds: string[];
  tier: BudgetTier;
  warna: string;
  mode: "visual" | "blueprint" | "3d";
  setBasis: (id: string) => void;
  setAliran: (id: string) => void;
  togglePart: (id: string) => void;
  setTier: (t: BudgetTier) => void;
  setWarna: (w: string) => void;
  setMode: (m: BuildState["mode"]) => void;
  resetBobcafe: () => void;
}

import { DEFAULT_BOBCAFE_IDS } from "@/lib/budget";

export const useBuild = create<BuildState>()(
  persist(
    (set) => ({
      basisId: "vixion-2013",
      aliranId: "bobcafe-hybrid",
      selectedPartIds: DEFAULT_BOBCAFE_IDS,
      tier: "mid",
      warna: "#2F3D33",
      mode: "visual",
      setBasis: (id) => set({ basisId: id }),
      setAliran: (id) => set({ aliranId: id }),
      togglePart: (id) =>
        set((s) => ({
          selectedPartIds: s.selectedPartIds.includes(id)
            ? s.selectedPartIds.filter((x) => x !== id)
            : [...s.selectedPartIds, id],
        })),
      setTier: (tier) => set({ tier }),
      setWarna: (warna) => set({ warna }),
      setMode: (mode) => set({ mode }),
      resetBobcafe: () =>
        set({
          basisId: "vixion-2013",
          aliranId: "bobcafe-hybrid",
          selectedPartIds: DEFAULT_BOBCAFE_IDS,
          tier: "mid",
        }),
    }),
    { name: "customoto-build" }
  )
);
