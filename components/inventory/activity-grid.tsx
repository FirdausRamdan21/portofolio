"use client";

import Image from "next/image";
import { LayoutGrid, Newspaper } from "lucide-react";
import { useMemo, useState } from "react";
import type { Activity } from "@/lib/types";
import { cn } from "@/lib/utils";
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
  const [type, setType] = useState<Activity["type"] | "All">("All");
  const [selected, setSelected] = useState<Activity | null>(null);
  const [view, setView] = useState<"newspaper" | "grid">("newspaper");

  const filtered = useMemo(
    () =>
      type === "All" ? activities : activities.filter((a) => a.type === type),
    [activities, type]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {TYPES.map((t) => (
          <button
            key={t.key}
            onClick={() => setType(t.key)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              type === t.key
                ? "bg-abyss-500 text-white shadow-md shadow-abyss-950/50"
                : "bg-abyss-900/70 text-foam-300 ring-1 ring-inset ring-abyss-700/40 hover:bg-abyss-800/70 hover:text-foam-100"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3"><p className="text-xs text-foam-500">{filtered.length} aktivitas</p><div className="flex rounded-lg border border-abyss-700/40 bg-abyss-900/60 p-1"><button type="button" onClick={() => setView("newspaper")} aria-label="Tampilan koran" className={cn("rounded-md p-2", view === "newspaper" ? "bg-coral-500 text-abyss-950" : "text-foam-300")}><Newspaper className="h-4 w-4" /></button><button type="button" onClick={() => setView("grid")} aria-label="Tampilan kotak-kotak" className={cn("rounded-md p-2", view === "grid" ? "bg-coral-500 text-abyss-950" : "text-foam-300")}><LayoutGrid className="h-4 w-4" /></button></div></div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-200 p-12 text-center text-sm text-gray-500">
          Tidak ada aktivitas dengan filter ini.
        </div>
      ) : view === "newspaper" ? (
        <div className="mt-4 overflow-hidden border-y border-abyss-700/50 bg-abyss-900/35">
          {filtered.map((activity, index) => <button key={activity.id} type="button" onClick={() => setSelected(activity)} className="grid w-full gap-4 border-b border-abyss-700/40 p-5 text-left transition-colors last:border-0 hover:bg-abyss-800/50 md:grid-cols-[180px_1fr] md:p-6"><div className="relative aspect-[4/3] overflow-hidden bg-abyss-950">{activity.image && <Image src={activity.image} alt="" fill className="object-cover" sizes="180px" />}<span className="absolute left-2 top-2 bg-coral-500 px-2 py-1 text-[10px] font-bold uppercase text-abyss-950">{String(index + 1).padStart(2, "0")}</span></div><div><p className="eyebrow">{activity.organization} · {activity.startDate}</p><h3 className="mt-2 font-serif text-xl font-bold text-foam-50 md:text-2xl">{activity.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-foam-300">{activity.description.split("<br><br>")[0]}</p><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-foam-500">{activity.role}</p></div></button>)}
        </div>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <button
              key={a.id}
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