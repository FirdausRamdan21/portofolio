"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
  LayoutGrid,
  RotateCcw,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { cn, formatMonthYear } from "@/lib/utils";
import ProjectCard from "@/components/project-card";
import ProjectModal from "./project-modal";

type CategoryFilter = "All" | Project["category"];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
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

  const categories = useMemo(() => {
    const counts = new Map<Project["category"], number>();
    projects.forEach((p) =>
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
    );
    const list: { key: CategoryFilter; label: string; count: number }[] = [
      { key: "All", label: "Semua Kategori", count: projects.length },
    ];
    (["Web", "Data", "UI", "Other"] as const).forEach((cat) => {
      const count = counts.get(cat) ?? 0;
      if (count > 0) list.push({ key: cat, label: cat, count });
    });
    return list;
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (tech !== "All" && !p.tech.includes(tech)) return false;
      if (!q) return true;
      const inTitle = p.title.toLowerCase().includes(q);
      const inDesc = p.description.toLowerCase().includes(q);
      const inTech = p.tech.some((t) => t.toLowerCase().includes(q));
      const inHighlights = p.highlights?.some(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.description.toLowerCase().includes(q)
      );
      return inTitle || inDesc || inTech || Boolean(inHighlights);
    });
  }, [projects, category, tech, query]);

  const safeIndex =
    filtered.length > 0 ? Math.min(galleryIndex, filtered.length - 1) : 0;
  const activeProject = filtered[safeIndex];

  const moveGallery = (direction: -1 | 1) => {
    if (!filtered.length) return;
    setGalleryIndex(
      (current) => (current + direction + filtered.length) % filtered.length
    );
  };

  useEffect(() => {
    if (view !== "gallery" || filtered.length <= 1 || selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        setGalleryIndex(
          (current) => (current - 1 + filtered.length) % filtered.length
        );
      } else if (e.key === "ArrowRight") {
        setGalleryIndex((current) => (current + 1) % filtered.length);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [view, filtered.length, selected]);

  const hasActiveFilters =
    query.trim() !== "" || category !== "All" || tech !== "All";

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setTech("All");
    setGalleryIndex(0);
  };

  return (
    <div>
      {/* Search + Category Pills + Tech Filter */}
      <div className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foam-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setGalleryIndex(0);
              }}
              placeholder="Cari proyek berdasarkan judul, fitur, atau teknologi (mis. Next.js, Laravel, WebRTC)..."
              aria-label="Cari proyek"
              className="w-full rounded-xl border border-abyss-700/60 bg-abyss-900/80 py-2 pl-10 pr-9 text-xs text-foam-100 placeholder:text-foam-500 outline-none transition-colors focus:border-sky-500"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setGalleryIndex(0);
                }}
                aria-label="Hapus pencarian"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-foam-400 hover:bg-abyss-800 hover:text-foam-100"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <select
            value={tech}
            onChange={(e) => {
              setTech(e.target.value);
              setGalleryIndex(0);
            }}
            aria-label="Filter teknologi"
            className="rounded-xl border border-abyss-700/60 bg-abyss-900/80 px-3.5 py-2 text-xs font-medium text-foam-100 outline-none focus:border-sky-500"
          >
            {allTech.map((t) => (
              <option key={t} value={t}>
                {t === "All" ? "Semua Teknologi" : t}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => {
                setCategory(c.key);
                setGalleryIndex(0);
              }}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all",
                category === c.key
                  ? "bg-sky-500 text-abyss-950 shadow-md shadow-sky-500/20"
                  : "bg-abyss-900/80 text-foam-300 ring-1 ring-inset ring-abyss-700/60 hover:bg-abyss-800 hover:text-foam-100"
              )}
            >
              <span>{c.label}</span>
              <span
                className={cn(
                  "text-[10px]",
                  category === c.key ? "text-abyss-950/80" : "text-foam-400"
                )}
              >
                ({c.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Control bar */}
      <div className="mt-5 flex items-center justify-between gap-3 border-b border-abyss-800/80 pb-3">
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium text-foam-400">
            Menampilkan <strong className="text-foam-100">{filtered.length}</strong> proyek
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          )}
        </div>
        <div className="flex rounded-lg border border-abyss-700/60 bg-abyss-900/60 p-0.5">
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-label="Tampilan Grid"
            className={cn(
              "rounded-md p-1.5 transition-colors",
              view === "grid"
                ? "bg-sky-500 font-bold text-abyss-950"
                : "text-foam-400 hover:text-foam-100"
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
              view === "gallery"
                ? "bg-sky-500 font-bold text-abyss-950"
                : "text-foam-400 hover:text-foam-100"
            )}
          >
            <Images className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content View */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-abyss-800 bg-abyss-900/30 p-12 text-center">
          <p className="text-sm text-foam-400">
            Tidak ada proyek yang sesuai dengan kata kunci atau filter yang dipilih.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-500/20"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset Filter
          </button>
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
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 900px"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
              <div>
                <p className="eyebrow">
                  {activeProject?.category} &middot;{" "}
                  {activeProject ? formatMonthYear(activeProject.date) : ""}
                </p>
                <h3 className="mt-2 text-xl font-bold text-foam-50 sm:text-2xl md:text-3xl">
                  {activeProject?.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-xl text-xs text-foam-300 sm:text-sm">
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
          <div className="flex flex-wrap gap-2 border-t border-abyss-800/80 bg-abyss-950/40 p-4">
            {filtered.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setGalleryIndex(index)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                  index === safeIndex
                    ? "bg-sky-500 font-bold text-abyss-950 shadow-sm"
                    : "bg-abyss-800/60 text-foam-300 hover:bg-abyss-700/60 hover:text-white"
                )}
              >
                {project.title.split("—")[0].trim()}
              </button>
            ))}
          </div>
          {activeProject && (
            <div className="flex items-center justify-between gap-3 px-4 pb-4">
              <button
                type="button"
                onClick={() => setSelected(activeProject)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-xs font-bold text-abyss-950 hover:bg-sky-400"
              >
                Buka Quick Preview <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
              <span className="text-[11px] text-foam-500">
                Gunakan tombol panah &larr; / &rarr; untuk berpindah
              </span>
            </div>
          )}
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
