"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <h1 className="mt-5 text-3xl font-bold tracking-tight text-foam-50">
        Terjadi kesalahan
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-foam-300">
        Maaf, ada gangguan saat memuat halaman ini. Silakan coba lagi atau kembali ke beranda.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-abyss-950 shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-400"
        >
          <RotateCcw className="h-4 w-4" /> Coba lagi
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/80 bg-abyss-900/60 px-5 py-2.5 text-sm font-medium text-foam-100 transition-colors hover:border-sky-500/50 hover:bg-abyss-800"
        >
          <Home className="h-4 w-4" /> Ke Home
        </Link>
      </div>
    </div>
  );
}
