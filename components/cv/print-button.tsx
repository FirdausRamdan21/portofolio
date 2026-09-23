"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/60 bg-abyss-900/40 px-4 py-2 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70"
    >
      <Printer className="h-4 w-4" /> Print / Save as PDF
    </button>
  );
}