import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-medium text-abyss-300">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-foam-50">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 text-gray-600">
        Halaman yang kamu cari mungkin sudah dipindahkan atau tidak pernah ada.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Home className="h-4 w-4" /> Ke Home
        </Link>
        <Link
          href="/inventory"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
        >
          <ArrowLeft className="h-4 w-4" /> Lihat Inventory
        </Link>
      </div>
    </div>
  );
}