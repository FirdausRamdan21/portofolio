import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import Tag from "@/components/tag";
import { GithubIcon } from "@/components/brand-icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} — Firdaus Ramdan`,
    description: project.description,
    path: `/inventory/projects/${project.slug}`,
    image: project.thumbnail,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/inventory?tab=projects"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-blue-600"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke Inventory
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.date}</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold">{project.title}</h1>
        <p className="mt-3 text-gray-700">{project.description}</p>
      </header>

      <div className="relative mt-8 aspect-video overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-video overflow-hidden rounded-xl bg-gray-100"
            >
              <Image
                src={img}
                alt={`${project.title} ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Yang Dipelajari</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-700">
          {project.learned.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 flex flex-wrap gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            <GithubIcon className="h-4 w-4" /> Lihat di GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
      </section>
    </article>
  );
}