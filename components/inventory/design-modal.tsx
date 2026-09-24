"use client";

import Image from "next/image";
import { ExternalLink, Maximize, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Design } from "@/lib/types";
import Tag from "@/components/tag";

export default function DesignModal({
  design,
  onClose,
}: {
  design: Design | null;
  onClose: () => void;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!design) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [design, onClose]);

  if (!design) return null;

  const openFullscreen = () => {
    if (mediaRef.current?.requestFullscreen) void mediaRef.current.requestFullscreen();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-abyss-950/85 p-4 backdrop-blur-md" onClick={onClose} role="dialog" aria-modal="true">
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-abyss-700/50 bg-abyss-900 shadow-2xl shadow-abyss-950/80" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full border border-abyss-700/50 bg-abyss-950/80 p-2 text-foam-300 backdrop-blur-sm transition-colors hover:bg-abyss-800 hover:text-foam-50" aria-label="Exit">
          <X className="h-4 w-4" />
        </button>

        <div ref={mediaRef} className="relative flex min-h-72 items-center justify-center bg-abyss-950 p-6 md:min-h-[32rem]">
          {design.mediaType === "image" && design.image ? (
            <Image src={design.image} alt={design.title} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 900px" />
          ) : (
            <video src={design.video} poster={design.image} controls playsInline className="max-h-[70vh] max-w-full" />
          )}
          <button type="button" onClick={openFullscreen} className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg bg-abyss-950/85 px-3 py-2 text-xs font-semibold text-foam-50 backdrop-blur-sm transition-colors hover:bg-abyss-800" aria-label="Lihat penuh">
            <Maximize className="h-4 w-4" /> Lihat Penuh
          </button>
        </div>

        <div className="p-6">
          <p className="eyebrow">{design.category} · Creative Activity</p>
          <h2 className="mt-2 text-2xl font-bold text-foam-50">{design.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foam-300">{design.description}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">{design.tools.map((tool) => <Tag key={tool}>{tool}</Tag>)}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            {design.source && <a href={design.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/50 px-3 py-2 text-sm font-medium text-foam-100 transition-colors hover:bg-abyss-800"><ExternalLink className="h-4 w-4" /> Lihat Sumber</a>}
            <button type="button" onClick={openFullscreen} className="inline-flex items-center gap-2 rounded-lg bg-coral-500 px-3 py-2 text-sm font-semibold text-abyss-950 transition-colors hover:bg-coral-400"><Maximize className="h-4 w-4" /> Lihat Penuh</button>
            <button type="button" onClick={onClose} className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/50 px-3 py-2 text-sm font-medium text-foam-300 transition-colors hover:bg-abyss-800 hover:text-foam-50"><X className="h-4 w-4" /> Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}