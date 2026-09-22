"use client";

import { useMemo, useState } from "react";
import type { Activity } from "@/lib/types";
import { cn } from "@/lib/utils";
import ActivityCard from "@/components/inventory/activity-card";
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
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500">{filtered.length} aktivitas</p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-200 p-12 text-center text-sm text-gray-500">
          Tidak ada aktivitas dengan filter ini.
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