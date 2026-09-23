"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import type { Activity } from "@/lib/types";
import Tag from "@/components/tag";

export default function ActivityModal({
  activity,
  onClose,
}: {
  activity: Activity | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!activity) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activity, onClose]);

  if (!activity) return null;

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

        {activity.image ? (
          <div className="relative aspect-video bg-abyss-950">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-900 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-abyss-800 to-abyss-900">
            <span className="text-3xl font-bold text-abyss-500">
              {activity.title.charAt(0)}
            </span>
          </div>
        )}

        <div className="p-6">
          <p className="text-xs text-foam-500">{activity.organization}</p>
          <h2 className="mt-1 text-2xl font-bold text-foam-50">
            {activity.title}
          </h2>
          <p className="mt-1 text-sm text-abyss-300">{activity.role}</p>
          <p className="mt-3 text-foam-300">{activity.description}</p>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-foam-100">Skills</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {activity.skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={`/inventory/activities/${activity.slug}`}
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