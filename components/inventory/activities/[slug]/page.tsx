import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { activities } from "@/data/activities";
import { buildMetadata } from "@/lib/seo";
import Tag from "@/components/tag";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return {};
  return buildMetadata({
    title: `${activity.title} — Firdaus Ramdan`,
    description: activity.description,
    path: `/inventory/activities/${activity.slug}`,
    image: activity.image,
  });
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/inventory?tab=activities"
        className="inline-flex items-center gap-1.5 text-sm text-foam-500 transition-colors hover:text-abyss-300"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke Inventory
      </Link>

      <header className="mt-6">
        <p className="text-xs text-foam-500">{activity.organization}</p>
        <h1 className="mt-2 text-3xl font-bold text-foam-50">
          {activity.title}
        </h1>
        <p className="mt-1 text-sm text-abyss-300">{activity.role}</p>
        <div className="mt-4 space-y-4 text-sm leading-7 text-foam-300">
          {activity.description.split("<br><br>").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      {activity.image && (
        <div className="relative mt-8 aspect-video overflow-hidden rounded-xl bg-abyss-900 ring-1 ring-abyss-700/40">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foam-50">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {activity.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </section>
    </article>
  );
}