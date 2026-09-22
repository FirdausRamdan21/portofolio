"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Activity, Project, Tool, ToolNote } from "@/lib/types";
import { cn } from "@/lib/utils";
import ProjectGrid from "./project-grid";
import ActivityGrid from "./activity-grid";
import ToolGrid from "./tool-grid";

type TabKey = "projects" | "activities" | "tools";

const TABS: { key: TabKey; label: string }[] = [
  { key: "projects", label: "Projects" },
  { key: "activities", label: "Activities" },
  { key: "tools", label: "Tools & Info" },
];

export default function InventoryTabs({
  projects,
  activities,
  tools,
  notes,
}: {
  projects: Project[];
  activities: Activity[];
  tools: Tool[];
  notes: ToolNote[];
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
      <div className="flex gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              active === t.key
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {active === "projects" && <ProjectGrid projects={projects} />}
        {active === "activities" && <ActivityGrid activities={activities} />}
        {active === "tools" && <ToolGrid tools={tools} notes={notes} />}
      </div>
    </div>
  );
}