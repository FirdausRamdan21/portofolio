import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-bold tracking-widest text-sky-300">
        ERROR 404
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foam-50 sm:text-4xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-foam-300">
        Halaman yang kamu cari mungkin sudah dipindahkan, berganti URL, atau tidak pernah ada.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-abyss-950 shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-400"
        >
          <Home className="h-4 w-4" /> Ke Home
        </Link>
        <Link
          href="/inventory"
          className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/80 bg-abyss-900/60 px-5 py-2.5 text-sm font-medium text-foam-100 transition-colors hover:border-sky-500/50 hover:bg-abyss-800"
        >
          <ArrowLeft className="h-4 w-4" /> Lihat Portofolio
        </Link>
      </div>
    </div>
  );
}
