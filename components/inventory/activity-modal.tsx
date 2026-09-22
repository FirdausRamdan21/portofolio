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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-gray-600 shadow-sm"
          aria-label="Tutup"
        >
          <X className="h-4 w-4" />
        </button>

        {activity.image && (
          <div className="relative aspect-video bg-gray-100">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <p className="text-xs text-gray-500">{activity.organization}</p>
          <h2 className="mt-1 text-2xl font-bold">{activity.title}</h2>
          <p className="mt-1 text-sm text-blue-600">{activity.role}</p>
          <p className="mt-3 text-gray-700">{activity.description}</p>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-700">Skills</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {activity.skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={`/inventory/activities/${activity.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Lihat Detail <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}