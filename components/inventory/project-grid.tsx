"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, LayoutGrid, Images } from "lucide-react";
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
  const [view, setView] = useState<"gallery" | "grid">("gallery");
  const [galleryIndex, setGalleryIndex] = useState(0);

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

  const activeProject = filtered[galleryIndex] ?? filtered[0];

  const moveGallery = (direction: -1 | 1) => {
    if (!filtered.length) return;
    setGalleryIndex((current) => (current + direction + filtered.length) % filtered.length);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setCategory(c); setGalleryIndex(0); }}
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
          onChange={(e) => { setTech(e.target.value); setGalleryIndex(0); }}
          className="rounded-lg border border-abyss-700/50 bg-abyss-900/70 px-3 py-1.5 text-sm text-foam-100 outline-none focus:border-abyss-500"
        >
          {allTech.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "Semua Tech" : t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-xs text-foam-500">
        {filtered.length} project{filtered.length !== 1 && "s"}
        </p>
        <div className="flex rounded-lg border border-abyss-700/40 bg-abyss-900/60 p-1">
          <button type="button" onClick={() => setView("gallery")} aria-label="Tampilan galeri" className={cn("rounded-md p-2", view === "gallery" ? "bg-coral-500 text-abyss-950" : "text-foam-300 hover:text-foam-50")}><Images className="h-4 w-4" /></button>
          <button type="button" onClick={() => setView("grid")} aria-label="Tampilan kotak-kotak" className={cn("rounded-md p-2", view === "grid" ? "bg-coral-500 text-abyss-950" : "text-foam-300 hover:text-foam-50")}><LayoutGrid className="h-4 w-4" /></button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-abyss-700/50 bg-abyss-900/30 p-12 text-center text-sm text-foam-500">
          Tidak ada project dengan filter ini.
        </div>
      ) : view === "gallery" ? (
        <div className="mt-4 overflow-hidden rounded-2xl border border-abyss-700/40 bg-abyss-900/60">
          <div className="relative aspect-[16/9] min-h-72 bg-abyss-950">
            {activeProject && <Image src={activeProject.thumbnail} alt={activeProject.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 900px" />}
            <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
              <div><p className="eyebrow">{activeProject?.category} · {activeProject?.date}</p><h3 className="mt-2 text-2xl font-bold text-foam-50 md:text-3xl">{activeProject?.title}</h3><p className="mt-2 max-w-xl text-sm text-foam-300">{activeProject?.description}</p></div>
              <div className="flex shrink-0 gap-2"><button type="button" onClick={() => moveGallery(-1)} aria-label="Project sebelumnya" className="rounded-full border border-foam-100/30 bg-abyss-950/70 p-2 text-foam-50"><ChevronLeft className="h-5 w-5" /></button><button type="button" onClick={() => moveGallery(1)} aria-label="Project berikutnya" className="rounded-full border border-foam-100/30 bg-abyss-950/70 p-2 text-foam-50"><ChevronRight className="h-5 w-5" /></button></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 p-4">{filtered.map((project, index) => <button key={project.id} type="button" onClick={() => { setGalleryIndex(index); setSelected(project); }} className={cn("rounded-md px-3 py-1.5 text-xs", index === galleryIndex ? "bg-coral-500 font-semibold text-abyss-950" : "bg-abyss-800 text-foam-300")}>{project.title}</button>)}</div>
          {activeProject && <button type="button" onClick={() => setSelected(activeProject)} className="mx-4 mb-5 rounded-lg bg-coral-500 px-4 py-2 text-sm font-semibold text-abyss-950">Buka Detail</button>}
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