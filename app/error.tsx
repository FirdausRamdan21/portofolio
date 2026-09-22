"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

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
      <h1 className="text-3xl font-bold">Terjadi kesalahan</h1>
      <p className="mt-3 text-gray-600">
        Maaf, ada sesuatu yang salah. Coba muat ulang halaman.
      </p>
      <button
        onClick={reset}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        <RotateCcw className="h-4 w-4" /> Coba lagi
      </button>
    </div>
  );
}