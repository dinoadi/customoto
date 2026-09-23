"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="border border-line px-5 py-2 hover:border-steel"
    >
      PRINT / PDF ↓
    </button>
  );
}
