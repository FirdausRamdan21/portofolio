import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export default function CvProjects({ items }: { items: Project[] }) {
  const display = items.filter((p) => p.featured || p.pinned).slice(0, 4);

  if (!display.length) {
    return (
      <p className="text-xs text-foam-500 print:text-gray-500">
        Belum ada project yang dipilih.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
      {display.map((p) => (
        <Link
          key={p.id}
          href={`/inventory/projects/${p.slug}`}
          className="group block break-inside-avoid"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg border border-abyss-700/40 bg-abyss-950 print:hidden">
            <Image
              src={p.thumbnail}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 300px"
            />
          </div>
          <h3 className="mt-2 text-sm font-semibold leading-tight text-foam-100 print:text-black">
            {p.title}
          </h3>
          <p className="mt-0.5 text-[11px] text-foam-500 print:text-gray-600">
            {p.tech.slice(0, 3).join(" · ")}
          </p>
        </Link>
      ))}
    </div>
  );
}