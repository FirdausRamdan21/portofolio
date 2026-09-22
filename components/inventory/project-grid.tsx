"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/project-card";
import ProjectModal from "./project-modal";

type CategoryFilter = "All" | Project["category"];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [tech, setTech] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const categories: CategoryFilter[] = ["All", "Web", "Data", "UI", "Other"];

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        if (category !== "All" && p.category !== category) return false;
        if (tech !== "All" && !p.tech.includes(tech)) return false;
        return true;
      }),
    [projects, category, tech]
  );

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                category === c
                  ? "bg-abyss-500 text-white shadow-md shadow-abyss-950/50"
                  : "bg-abyss-900/70 text-foam-300 ring-1 ring-inset ring-abyss-700/40 hover:bg-abyss-800/70 hover:text-foam-100"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          className="rounded-lg border border-abyss-700/50 bg-abyss-900/70 px-3 py-1.5 text-sm text-foam-100 outline-none focus:border-abyss-500"
        >
          {allTech.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "Semua Tech" : t}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        {filtered.length} project{filtered.length !== 1 && "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-abyss-700/50 bg-abyss-900/30 p-12 text-center text-sm text-foam-500">
          Tidak ada project dengan filter ini.
        </div>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="text-left"
            >
              <ProjectCard project={p} />
            </button>
          ))}
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}