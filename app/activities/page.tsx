import { activities } from "@/data/activities";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";
import ActivityCard from "@/components/activity-card";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Activities — Firdaus Ramdan",
  description: "Aktivitas sekolah, ekstrakurikuler, dan digital.",
  path: "/activities",
});

const groups: { key: string; label: string; types: string[] }[] = [
  {
    key: "sekolah",
    label: "Sekolah & Ekstrakurikuler",
    types: ["School", "Extracurricular"],
  },
  {
    key: "luar",
    label: "Luar Sekolah",
    types: ["Outside"],
  },
  {
    key: "digital",
    label: "Digital",
    types: ["Digital"],
  },
];

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <SectionTitle
        as="h1"
        eyebrow="Pengalaman & Rekam Jejak"
        title="Activities"
        subtitle="Arsip pengalaman organisasi, pembelajaran, kontribusi sekolah, dan karya digital. Setiap entri terhubung dengan catatan lengkap di Inventory."
      />

      <div className="space-y-16">
        {groups.map((g) => {
          const items = activities.filter((a) => g.types.includes(a.type));
          if (!items.length) return null;
          return (
            <section key={g.key}>
              <div className="mb-6 flex items-center justify-between border-b border-abyss-800/80 pb-3">
                <h2 className="text-lg font-semibold text-foam-50">{g.label}</h2>
                <span className="rounded-full border border-abyss-700/60 bg-abyss-900/70 px-2.5 py-0.5 text-xs font-medium text-sky-300">
                  {items.length} entri
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a) => (
                  <Link
                    key={a.id}
                    href={`/inventory/activities/${a.slug}`}
                    className="block h-full"
                  >
                    <ActivityCard activity={a} />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
