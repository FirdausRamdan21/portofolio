import { activities } from "@/data/activities";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";
import ActivityCard from "@/components/activity-card";

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
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionTitle
        title="Activities"
        subtitle="Pengalaman organisasi, volunteer, dan konten digital."
      />

      <div className="space-y-16">
        {groups.map((g) => {
          const items = activities.filter((a) => g.types.includes(a.type));
          if (!items.length) return null;
          return (
            <section key={g.key}>
              <h3 className="mb-6 text-lg font-semibold">{g.label}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a) => (
                  <ActivityCard key={a.id} activity={a} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}