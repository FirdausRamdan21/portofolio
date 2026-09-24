import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";
import SectionTitle from "@/components/section-title";
import Tag from "@/components/tag";
import { cn } from "@/lib/utils";

type PinnedItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  tags: string[];
  kind: "Project" | "Activity";
  date: string;
};

export default function PinnedGallery() {
  const pinned: PinnedItem[] = [
    ...projects
      .filter((p) => p.pinned)
      .map((p) => ({
        id: p.id,
        title: p.title,
        subtitle: p.description,
        image: p.thumbnail,
        href: `/inventory/projects/${p.slug}`,
        tags: p.tech.slice(0, 2),
        kind: "Project" as const,
        date: p.date,
      })),
    ...activities
      .filter((a) => a.pinned)
      .map((a) => ({
        id: a.id,
        title: a.title,
        subtitle: a.description,
        image: a.image ?? "/images/activities/placeholder.jpg",
        href: `/inventory/activities/${a.slug}`,
        tags: a.skills.slice(0, 2),
        kind: "Activity" as const,
        date: a.startDate,
      })),
  ].slice(0, 5);

  if (pinned.length === 0) return null;

  // Bento layout: item 0 besar (2x2), item 1-4 grid biasa
  const [feature, ...rest] = pinned;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionTitle
        title="Selected Work"
        subtitle="Beberapa catatan project dan aktivitas yang mewakili proses belajar, kontribusi, dan pekerjaan yang sedang saya dokumentasikan."
      />

      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {/* Feature — besar */}
        <GalleryCard
          item={feature}
          className="lg:col-span-2 lg:row-span-2 aspect-video lg:aspect-auto"
          large
        />

        {/* Rest */}
        {rest.slice(0, 2).map((item) => (
          <GalleryCard
            key={`${item.kind}-${item.id}`}
            item={item}
            className="aspect-video"
          />
        ))}

        {/* Bottom row — 2 kecil */}
        {rest.slice(2, 4).map((item) => (
          <GalleryCard
            key={`${item.kind}-${item.id}`}
            item={item}
            className="aspect-video"
          />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  className,
  large = false,
}: {
  item: PinnedItem;
  className?: string;
  large?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-abyss-700/40 bg-abyss-900 shadow-lg transition-all",
        "hover:border-abyss-500/60 hover:shadow-[0_25px_60px_-25px_rgba(60,140,234,0.5)]",
        className
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-contain bg-abyss-950/70 p-2 transition-transform duration-700 group-hover:scale-[1.02]"
        sizes={large ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/40 to-transparent" />

      {/* Top: kind badge */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full border border-abyss-500/40 bg-abyss-950/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-abyss-300 backdrop-blur-sm">
          {item.kind}
        </span>
      </div>

      {/* Arrow top-right */}
      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-abyss-500/40 bg-abyss-950/80 text-abyss-300 backdrop-blur-sm transition-transform group-hover:rotate-45 group-hover:bg-abyss-500 group-hover:text-white">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      {/* Bottom: content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[10px] font-medium uppercase tracking-wide text-abyss-300">
          {item.date}
        </p>
        <h3
          className={cn(
            "mt-1 font-bold text-foam-50",
            large ? "text-2xl md:text-3xl" : "text-base"
          )}
        >
          {item.title}
        </h3>
        {large && (
          <p className="mt-2 line-clamp-2 max-w-md text-sm text-foam-300">
            {item.subtitle}
          </p>
        )}
        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}