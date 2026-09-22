import Image from "next/image";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";

export const metadata = buildMetadata({
  title: "About — Firdaus Ramdan",
  description: "Tentang Firdaus Ramdan, Software Engineering Student.",
  path: "/about",
});

const skillGroups = ["Language", "Framework", "Database", "Tool"] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <SectionTitle title="About Me" />

      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl ring-1 ring-gray-200">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{profile.name}</h3>
          <p className="text-sm text-gray-500">{profile.location}</p>
          <p className="mt-4 text-gray-700">{profile.about}</p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="mt-4 space-y-6">
          {skillGroups.map((group) => {
            const items = profile.skills.filter((s) => s.category === group);
            if (!items.length) return null;
            return (
              <div key={group}>
                <h4 className="mb-2 text-sm font-medium text-gray-500">
                  {group}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s.name}
                      className="rounded-md border border-gray-200 px-3 py-1 text-sm"
                    >
                      {s.name}
                      {s.level && (
                        <span className="ml-2 text-xs text-gray-400">
                          {s.level}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}