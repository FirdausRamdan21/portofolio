"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Activity, Design, Project, Tool, ToolNote } from "@/lib/types";
import { cn } from "@/lib/utils";
import ProjectGrid from "./project-grid";
import ActivityGrid from "./activity-grid";
import ToolGrid from "./tool-grid";
import DesignGrid from "./design-grid";
import { FolderGit2, CalendarCheck, Palette, Wrench } from "lucide-react";

type TabKey = "projects" | "activities" | "designs" | "tools";

const TABS: { key: TabKey; label: string; icon: any }[] = [
  { key: "projects", label: "Proyek Utama", icon: FolderGit2 },
  { key: "activities", label: "Aktivitas & Organisasi", icon: CalendarCheck },
  { key: "designs", label: "Desain Grafis", icon: Palette },
  { key: "tools", label: "Perangkat & Catatan", icon: Wrench },
];

export default function InventoryTabs({
  projects,
  activities,
  tools,
  notes,
  designs,
}: {
  projects: Project[];
  activities: Activity[];
  tools: Tool[];
  notes: ToolNote[];
  designs: Design[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = (searchParams.get("tab") as TabKey) || "projects";

  const setTab = useCallback(
    (tab: TabKey) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  return (
    <div>
      {/* Scrollable Tabs Wrapper on Mobile */}
      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="inline-flex min-w-full sm:flex gap-1.5 rounded-2xl border border-abyss-800/80 bg-abyss-900/60 p-1.5 backdrop-blur-sm">
          {TABS.map((t) => {
            const Icon = t.icon;
            const isCurrent = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all whitespace-nowrap flex-1",
                  isCurrent
                    ? "bg-sky-500 text-abyss-950 shadow-md shadow-sky-500/20 font-bold"
                    : "text-foam-300 hover:bg-abyss-800/60 hover:text-foam-100"
                )}
              >
                <Icon className={cn("h-4 w-4", isCurrent ? "text-abyss-950" : "text-sky-400")} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        {active === "projects" && <ProjectGrid projects={projects} />}
        {active === "activities" && <ActivityGrid activities={activities} />}
        {active === "designs" && <DesignGrid designs={designs} />}
        {active === "tools" && <ToolGrid tools={tools} notes={notes} />}
      </div>
    </div>
  );
}
