"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Design } from "@/lib/types";
import { cn } from "@/lib/utils";
import DesignModal from "./design-modal";

const CATEGORIES: { key: Design["category"] | "All"; label: string }[] = [
  { key: "All", label: "Semua" },
  { key: "Poster", label: "Poster" },
  { key: "Illustration", label: "Ilustrasi" },
  { key: "Painting", label: "Lukisan" },
  { key: "Video", label: "Video" },
  { key: "Other", label: "Lainnya" },
];

export default function DesignGrid({ designs }: { designs: Design[] }) {
  const [category, setCategory] = useState<Design["category"] | "All">("All");
  const [selected, setSelected] = useState<Design | null>(null);
  const filtered = useMemo(
    () => category === "All" ? designs : designs.filter((design) => design.category === category),
    [category, designs]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {CATEGORIES.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setCategory(item.key)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              category === item.key
                ? "bg-coral-500 text-abyss-950 shadow-md shadow-abyss-950/50"
                : "bg-abyss-900/70 text-foam-300 ring-1 ring-inset ring-abyss-700/40 hover:bg-abyss-800/70 hover:text-foam-100"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="mt-5 text-xs text-foam-500">{filtered.length} karya kreatif</p>
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-abyss-700/50 bg-abyss-900/30 p-12 text-center text-sm text-foam-500">
          Belum ada karya pada kategori ini.
        </div>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((design) => (
            <button
              key={design.id}
              type="button"
              onClick={() => setSelected(design)}
              className="group overflow-hidden rounded-2xl border border-abyss-700/40 bg-abyss-900 text-left shadow-lg transition-all hover:-translate-y-1 hover:border-abyss-500/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-abyss-950/80 p-3">
                {design.mediaType === "image" && design.image ? (
                  <Image src={design.image} alt={design.title} fill className="object-contain transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                ) : (
                  <video src={design.video} poster={design.image} muted playsInline className="h-full w-full object-contain" />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-abyss-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-coral-400 backdrop-blur-sm">
                  {design.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foam-50">{design.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-foam-300">{design.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      <DesignModal design={selected} onClose={() => setSelected(null)} />
    </div>
  );
}