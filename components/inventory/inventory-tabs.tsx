"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Activity, Design, Project, Tool, ToolNote } from "@/lib/types";
import { cn } from "@/lib/utils";
import ProjectGrid from "./project-grid";
import ActivityGrid from "./activity-grid";
import ToolGrid from "./tool-grid";
import DesignGrid from "./design-grid";

type TabKey = "projects" | "activities" | "designs" | "tools";

const TABS: { key: TabKey; label: string }[] = [
  { key: "projects", label: "Projects" },
  { key: "activities", label: "Activities" },
  { key: "designs", label: "Creative" },
  { key: "tools", label: "Tools & Info" },
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
      <div className="flex gap-1 rounded-xl border border-abyss-700/40 bg-abyss-900/60 p-1 backdrop-blur-sm">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all",
              active === t.key
                ? "bg-gradient-to-r from-abyss-500/30 to-abyss-600/30 text-foam-50 shadow-inner ring-1 ring-inset ring-abyss-500/40"
                : "text-foam-300 hover:bg-abyss-800/50 hover:text-foam-100"
            )}
          >
            {t.label}
          </button>
        ))}
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