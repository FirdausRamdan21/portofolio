import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BookOpen } from "lucide-react";
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
    <article className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/inventory?tab=activities"
        className="inline-flex items-center gap-1.5 text-sm text-foam-500 transition-colors hover:text-abyss-300"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke Inventory
      </Link>

      <header className="mt-6 border-y border-abyss-700/50 py-7">
        <p className="eyebrow">{activity.organization} · {activity.startDate}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight text-foam-50 md:text-6xl">
          {activity.title}
        </h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-coral-400">{activity.role}</p>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-foam-300">
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
        <h2 className="text-lg font-semibold text-foam-50">Dokumentasi</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-foam-300 marker:text-coral-400">
          {activity.documentation.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foam-50">Kegiatan</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-foam-300 marker:text-coral-400">
          {activity.activities.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foam-50">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {activity.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foam-50">Yang Dipelajari</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-foam-300 marker:text-coral-400">
          {activity.learned.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {activity.url && (
        <section className="mt-8 flex flex-wrap gap-2">
          <a href={activity.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/60 px-4 py-2 text-sm font-medium text-foam-100 hover:border-coral-400/60">
            <BookOpen className="h-4 w-4" /> Sumber
          </a>
        </section>
      )}
    </article>
  );
}