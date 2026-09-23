import Link from "next/link";
import type { Activity } from "@/lib/types";

export default function CvActivities({ items }: { items: Activity[] }) {
  const display = items.filter((item) => item.role !== "Certificate Holder").slice(0, 4);

  if (!display.length) return null;

  return (
    <div className="space-y-4">
      {display.map((item) => (
        <Link
          key={item.id}
          href={`/inventory/activities/${item.slug}`}
          className="block break-inside-avoid border-l-2 border-abyss-500/50 pl-3 transition-colors hover:border-coral-400"
        >
          <h3 className="text-sm font-semibold text-foam-100 print:text-black">
            {item.title}
          </h3>
          <p className="mt-0.5 text-xs text-foam-500 print:text-gray-600">
            {item.organization} · {item.role}
          </p>
        </Link>
      ))}
    </div>
  );
}
