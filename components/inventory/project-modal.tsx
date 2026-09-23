"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import Tag from "@/components/tag";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-abyss-950/80 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-abyss-700/50 bg-abyss-900 shadow-2xl shadow-abyss-950/80"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full border border-abyss-700/50 bg-abyss-950/80 p-1.5 text-foam-300 backdrop-blur-sm transition-colors hover:bg-abyss-800 hover:text-foam-50"
          aria-label="Tutup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-video bg-abyss-950">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-900 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-foam-500">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.date}</span>
          </div>
          <h2 className="mt-1 text-2xl font-bold text-foam-50">
            {project.title}
          </h2>
          <p className="mt-3 text-foam-300">{project.description}</p>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-foam-100">Tech</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-foam-100">
              Yang Dipelajari
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foam-300 marker:text-abyss-400">
              {project.learned.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={`/inventory/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-abyss-500 to-abyss-600 px-3 py-2 text-sm font-medium text-white shadow-md shadow-abyss-950/50 transition-all hover:from-abyss-400 hover:to-abyss-500"
            >
              Lihat Detail <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}