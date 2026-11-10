import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, FileDown, FileText } from "lucide-react";
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

  const groupedModules = project.report
    ? Array.from(
        project.report.sections.reduce((acc, sec) => {
          const list = acc.get(sec.module) ?? [];
          list.push(sec);
          acc.set(sec.module, list);
          return acc;
        }, new Map<string, typeof project.report.sections>())
      )
    : [];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/inventory?tab=projects"
        className="inline-flex items-center gap-1.5 text-sm text-foam-400 transition-colors hover:text-sky-300"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke Inventory
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-2 text-xs text-foam-400">
          <span className="rounded-full bg-abyss-800/70 px-2.5 py-0.5 text-sky-300 ring-1 ring-inset ring-sky-500/30">
            {project.category}
          </span>
          <span>·</span>
          <span>{project.date}</span>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
          {project.logo && (
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-abyss-700/60 bg-white p-1 shadow-md">
              <Image
                src={project.logo}
                alt={`Logo ${project.title}`}
                fill
                className="object-contain p-1"
              />
            </div>
          )}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foam-50 leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-foam-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/60 bg-abyss-900/60 px-4 py-2 text-xs sm:text-sm font-semibold text-foam-100 transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70"
            >
              <GithubIcon className="h-4 w-4" /> GitHub Repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-sky-950/50 transition-all hover:from-sky-400 hover:to-blue-500"
            >
              <ExternalLink className="h-4 w-4" /> Buka Live Demo
            </a>
          )}
          {project.report?.documentUrl && (
            <a
              href={project.report.documentUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20"
            >
              <FileDown className="h-4 w-4" /> Unduh Laporan (.docx)
            </a>
          )}
        </div>
      </header>

      <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-abyss-900 ring-1 ring-abyss-700/50 shadow-xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {!project.report && project.images && project.images.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-video overflow-hidden rounded-xl bg-abyss-900 ring-1 ring-abyss-700/40"
            >
              <Image
                src={img}
                alt={`${project.title} ${i + 1}`}
                fill
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}

      <section className="mt-10 rounded-2xl border border-abyss-800/80 bg-abyss-900/50 p-6">
        <h2 className="text-lg font-semibold text-foam-50">
          Ringkasan Arsitektur & Fitur Utama
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foam-300 marker:text-sky-400">
          {project.documentation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.report && (
        <section className="mt-12 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-abyss-800 pb-4">
            <div className="flex items-center gap-2.5">
              <FileText className="h-5 w-5 text-sky-400" />
              <h2 className="text-xl font-bold text-foam-50">
                {project.report.title}
              </h2>
            </div>
            {project.report.documentUrl && (
              <a
                href={project.report.documentUrl}
                download
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <FileDown className="h-3.5 w-3.5" /> Unduh Dokumen Lengkap
              </a>
            )}
          </div>

          {groupedModules.map(([moduleName, sections]) => (
            <div key={moduleName} className="space-y-6">
              <h3 className="inline-block rounded-lg border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-sm font-bold text-sky-300">
                {moduleName}
              </h3>

              <div className="space-y-6">
                {sections.map((sec) => (
                  <div
                    key={sec.title}
                    className="overflow-hidden rounded-2xl border border-abyss-800/80 bg-abyss-900/60"
                  >
                    <div className="border-b border-abyss-800/80 bg-abyss-950/60 px-5 py-3.5">
                      <h4 className="text-base font-bold text-foam-50">
                        {sec.title}
                      </h4>
                    </div>
                    <div className="relative aspect-[16/9] w-full bg-abyss-950 border-b border-abyss-800/60">
                      <Image
                        src={sec.image}
                        alt={sec.title}
                        fill
                        className="object-contain bg-abyss-950"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                    <div className="p-5">
                      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foam-300 marker:text-sky-400">
                        {sec.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foam-50">
          Teknologi & Tools
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foam-50">
          Pembelajaran & Kompetensi
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foam-300 marker:text-sky-400">
          {project.learned.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}