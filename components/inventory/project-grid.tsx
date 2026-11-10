"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, LayoutGrid, Images, ArrowUpRight } from "lucide-react";
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
  const [view, setView] = useState<"grid" | "gallery">("grid");
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
      {/* Category Pills & Tech Filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setCategory(c); setGalleryIndex(0); }}
              className={cn(
                "rounded-full px-3.5 py-1 text-xs font-semibold transition-all",
                category === c
                  ? "bg-sky-500 text-abyss-950 shadow-md shadow-sky-500/20"
                  : "bg-abyss-900/80 text-foam-300 ring-1 ring-inset ring-abyss-700/60 hover:bg-abyss-800 hover:text-foam-100"
              )}
            >
              {c === "All" ? "Semua Kategori" : c}
            </button>
          ))}
        </div>
        <select
          value={tech}
          onChange={(e) => { setTech(e.target.value); setGalleryIndex(0); }}
          className="rounded-xl border border-abyss-700/60 bg-abyss-900/80 px-3.5 py-1.5 text-xs font-medium text-foam-100 outline-none focus:border-sky-500"
        >
          {allTech.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "Semua Teknologi" : t}
            </option>
          ))}
        </select>
      </div>

      {/* Control bar */}
      <div className="mt-5 flex items-center justify-between gap-3 border-b border-abyss-800/80 pb-3">
        <p className="text-xs font-medium text-foam-400">
          Menampilkan <strong className="text-foam-100">{filtered.length}</strong> proyek
        </p>
        <div className="flex rounded-lg border border-abyss-700/60 bg-abyss-900/60 p-0.5">
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-label="Tampilan Grid"
            className={cn(
              "rounded-md p-1.5 transition-colors",
              view === "grid" ? "bg-sky-500 text-abyss-950 font-bold" : "text-foam-400 hover:text-foam-100"
            )}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setView("gallery")}
            aria-label="Tampilan Showcase"
            className={cn(
              "rounded-md p-1.5 transition-colors",
              view === "gallery" ? "bg-sky-500 text-abyss-950 font-bold" : "text-foam-400 hover:text-foam-100"
            )}
          >
            <Images className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content View */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-abyss-800 bg-abyss-900/30 p-12 text-center text-sm text-foam-500">
          Tidak ada proyek yang sesuai dengan kriteria filter yang dipilih.
        </div>
      ) : view === "grid" ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onSelect={() => setSelected(p)}
            />
          ))}
        </div>
      ) : (
        /* Showcase View */
        <div className="mt-6 overflow-hidden rounded-2xl border border-abyss-800/80 bg-abyss-900/60">
          <div className="relative aspect-[16/9] min-h-72 bg-abyss-950">
            {activeProject && (
              <Image
                src={activeProject.thumbnail}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
              <div>
                <p className="eyebrow">{activeProject?.category} &middot; {activeProject?.date}</p>
                <h3 className="mt-2 text-2xl font-bold text-foam-50 md:text-3xl">
                  {activeProject?.title}
                </h3>
                <p className="mt-2 max-w-xl text-xs sm:text-sm text-foam-300 line-clamp-2">
                  {activeProject?.description}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => moveGallery(-1)}
                  aria-label="Proyek sebelumnya"
                  className="rounded-full border border-foam-100/20 bg-abyss-950/80 p-2 text-foam-50 hover:bg-abyss-800"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => moveGallery(1)}
                  aria-label="Proyek berikutnya"
                  className="rounded-full border border-foam-100/20 bg-abyss-950/80 p-2 text-foam-50 hover:bg-abyss-800"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 p-4 border-t border-abyss-800/80 bg-abyss-950/40">
            {filtered.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => { setGalleryIndex(index); }}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                  index === galleryIndex
                    ? "bg-sky-500 font-bold text-abyss-950 shadow-sm"
                    : "bg-abyss-800/60 text-foam-300 hover:bg-abyss-700/60 hover:text-white"
                )}
              >
                {project.title.split("—")[0].trim()}
              </button>
            ))}
          </div>
          {activeProject && (
            <div className="p-4 pt-0">
              <button
                type="button"
                onClick={() => setSelected(activeProject)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-xs font-bold text-abyss-950 hover:bg-sky-400"
              >
                Buka Quick Preview <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
