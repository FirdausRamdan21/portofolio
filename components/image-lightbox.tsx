"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

/** Clickable image grid/preview with an accessible full-screen lightbox modal. */
export default function ImageLightbox({
  images,
  columnsClassName = "grid gap-4 sm:grid-cols-2",
  aspectClassName = "aspect-video",
  imageClassName = "object-cover object-top",
  thumbSizes = "(max-width: 768px) 100vw, 448px",
}: {
  images: LightboxImage[];
  columnsClassName?: string;
  aspectClassName?: string;
  imageClassName?: string;
  thumbSizes?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const current = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length
        );
      } else if (e.key === "ArrowRight" && images.length > 1) {
        setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className={columnsClassName}>
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Perbesar gambar: ${img.alt}`}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-abyss-950 ring-1 ring-abyss-700/40 transition-all hover:ring-sky-500/60 focus-visible:outline-none",
              aspectClassName
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={thumbSizes}
              className={cn(
                "transition-transform duration-500 group-hover:scale-[1.03]",
                imageClassName
              )}
            />
            <span className="pointer-events-none absolute right-2.5 bottom-2.5 inline-flex items-center gap-1 rounded-lg border border-abyss-700/70 bg-abyss-950/85 px-2.5 py-1 text-[11px] font-semibold text-foam-100 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomIn className="h-3.5 w-3.5 text-sky-400" /> Perbesar
            </span>
          </button>
        ))}
      </div>

      {current && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-abyss-950/90 p-4 backdrop-blur-md"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-abyss-700/60 bg-abyss-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-abyss-800/80 px-4 py-3">
              <p className="truncate text-xs font-semibold text-foam-200">
                {current.caption ?? current.alt}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                {images.length > 1 && (
                  <span className="text-xs font-medium text-foam-400">
                    {activeIndex + 1} / {images.length}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Tutup pratinjau"
                  className="rounded-lg border border-abyss-700/60 bg-abyss-950/80 p-1.5 text-foam-300 transition-colors hover:bg-abyss-800 hover:text-foam-50"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative h-[70vh] w-full bg-abyss-950">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="95vw"
                className="object-contain p-3"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + images.length) % images.length
                      )
                    }
                    aria-label="Gambar sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-abyss-700/70 bg-abyss-950/85 p-2.5 text-foam-100 backdrop-blur-sm transition-colors hover:bg-abyss-800"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % images.length)
                    }
                    aria-label="Gambar berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-abyss-700/70 bg-abyss-950/85 p-2.5 text-foam-100 backdrop-blur-sm transition-colors hover:bg-abyss-800"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
