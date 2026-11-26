"use client";

import Image from "next/image";
import { LayoutGrid, Newspaper, RotateCcw, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { Activity } from "@/lib/types";
import { cn, formatMonthYear } from "@/lib/utils";
import ActivityCard from "@/components/activity-card";
import ActivityModal from "./activity-modal";

const TYPES: { key: Activity["type"] | "All"; label: string }[] = [
  { key: "All", label: "Semua" },
  { key: "School", label: "Sekolah" },
  { key: "Extracurricular", label: "Ekskul" },
  { key: "Outside", label: "Luar" },
  { key: "Digital", label: "Digital" },
];

export default function ActivityGrid({
  activities,
}: {
  activities: Activity[];
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<Activity["type"] | "All">("All");
  const [selected, setSelected] = useState<Activity | null>(null);
  const [view, setView] = useState<"newspaper" | "grid">("newspaper");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return activities.filter((a) => {
      if (type !== "All" && a.type !== type) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.organization.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q) ||
        a.skills.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [activities, type, query]);

  const hasFilters = query.trim() !== "" || type !== "All";

  const resetFilters = () => {
    setQuery("");
    setType("All");
  };

  return (
    <div>
      <div className="space-y-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foam-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari aktivitas, organisasi, peran, atau skill..."
            aria-label="Cari aktivitas"
            className="w-full rounded-xl border border-abyss-700/60 bg-abyss-900/80 py-2 pl-10 pr-9 text-xs text-foam-100 placeholder:text-foam-500 outline-none transition-colors focus:border-sky-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Hapus pencarian"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-foam-400 hover:bg-abyss-800 hover:text-foam-100"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {TYPES.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setType(t.key)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                type === t.key
                  ? "bg-sky-500 font-semibold text-abyss-950 shadow-md shadow-sky-500/20"
                  : "bg-abyss-900/70 text-foam-300 ring-1 ring-inset ring-abyss-700/40 hover:bg-abyss-800/70 hover:text-foam-100"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-b border-abyss-800/80 pb-3">
        <div className="flex items-center gap-3">
          <p className="text-xs text-foam-400">
            Menampilkan <strong className="text-foam-100">{filtered.length}</strong> aktivitas
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          )}
        </div>
        <div className="flex rounded-lg border border-abyss-700/40 bg-abyss-900/60 p-1">
          <button
            type="button"
            onClick={() => setView("newspaper")}
            aria-label="Tampilan koran"
            className={cn(
              "rounded-md p-1.5 transition-colors",
              view === "newspaper"
                ? "bg-sky-500 text-abyss-950"
                : "text-foam-300 hover:text-foam-100"
            )}
          >
            <Newspaper className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-label="Tampilan kotak-kotak"
            className={cn(
              "rounded-md p-1.5 transition-colors",
              view === "grid"
                ? "bg-sky-500 text-abyss-950"
                : "text-foam-300 hover:text-foam-100"
            )}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-abyss-800 bg-abyss-900/30 p-12 text-center">
          <p className="text-sm text-foam-400">
            Tidak ada aktivitas yang cocok dengan filter atau pencarian ini.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-500/20"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset Filter
          </button>
        </div>
      ) : view === "newspaper" ? (
        <div className="mt-4 overflow-hidden rounded-xl border border-abyss-800/80 bg-abyss-900/35">
          {filtered.map((activity, index) => (
            <button
              key={activity.id}
              type="button"
              onClick={() => setSelected(activity)}
              className="grid w-full gap-4 border-b border-abyss-800/80 p-5 text-left transition-colors last:border-0 hover:bg-abyss-800/40 md:grid-cols-[180px_1fr] md:p-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-abyss-950">
                {activity.image ? (
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-abyss-800 to-abyss-900 text-2xl font-bold text-abyss-500">
                    {activity.title.charAt(0)}
                  </div>
                )}
                <span className="absolute left-2 top-2 rounded bg-sky-500 px-2 py-0.5 text-[10px] font-bold uppercase text-abyss-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="eyebrow">
                  {activity.organization} &middot; {formatMonthYear(activity.startDate)}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold text-foam-50 md:text-2xl">
                  {activity.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-foam-300">
                  {activity.description.split("<br><br>")[0]}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-foam-400">
                  {activity.role}
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setSelected(a)}
              className="text-left"
            >
              <ActivityCard activity={a} />
            </button>
          ))}
        </div>
      )}

      <ActivityModal activity={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
