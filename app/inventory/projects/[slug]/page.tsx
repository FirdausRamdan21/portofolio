import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileDown,
  FileText,
  ListTree,
} from "lucide-react";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { formatMonthYear } from "@/lib/utils";
import Tag from "@/components/tag";
import { GithubIcon } from "@/components/brand-icons";
import ImageLightbox from "@/components/image-lightbox";

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
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

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
          <span>&middot;</span>
          <span>{formatMonthYear(project.date)}</span>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          {project.logo && (
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-abyss-700/60 bg-white p-1 shadow-md">
              <Image
                src={project.logo}
                alt={`Logo ${project.title}`}
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold leading-tight text-foam-50 sm:text-3xl">
              {project.title}
            </h1>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foam-300 sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/60 bg-abyss-900/60 px-4 py-2 text-xs font-semibold text-foam-100 transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70 sm:text-sm"
            >
              <GithubIcon className="h-4 w-4" /> GitHub Repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-sky-950/50 transition-all hover:from-sky-400 hover:to-blue-500 sm:text-sm"
            >
              <ExternalLink className="h-4 w-4" /> Buka Live Demo
            </a>
          )}
          {project.report?.documentUrl && (
            <a
              href={project.report.documentUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20 sm:text-sm"
            >
              <FileDown className="h-4 w-4" /> Unduh Laporan (.docx)
            </a>
          )}
        </div>
      </header>

      <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-abyss-900 shadow-xl ring-1 ring-abyss-700/50">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover object-top"
          priority
        />
      </div>

      {!project.report && project.images && project.images.length > 0 && (
        <div className="mt-4">
          <ImageLightbox
            images={project.images.map((img, i) => ({
              src: img,
              alt: `${project.title} — Pratinjau ${i + 1}`,
            }))}
            columnsClassName="grid gap-4 sm:grid-cols-2"
            thumbSizes="(max-width: 640px) 100vw, 440px"
          />
        </div>
      )}

      <section className="mt-10 space-y-6 rounded-2xl border border-abyss-800/80 bg-abyss-900/50 p-6">
        {project.overview && (
          <div>
            <h2 className="text-lg font-semibold text-foam-50">
              Tentang Proyek &amp; Latar Belakang
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-foam-300">
              {project.overview}
            </p>
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div
            className={
              project.overview ? "border-t border-abyss-800/70 pt-6" : ""
            }
          >
            <h2 className="text-lg font-semibold text-foam-50">
              Fitur Utama &amp; Kapabilitas Sistem
            </h2>
            <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-abyss-800/80 bg-abyss-950/60 p-4"
                >
                  <h3 className="text-sm font-bold text-sky-300">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foam-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className={
            project.overview ||
            (project.highlights && project.highlights.length > 0)
              ? "border-t border-abyss-800/70 pt-6"
              : ""
          }
        >
          <h2 className="text-lg font-semibold text-foam-50">
            Ringkasan Arsitektur &amp; Detail Teknis
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foam-300 marker:text-sky-400">
            {project.documentation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.report && (
        <section className="mt-12 space-y-10">
          <div className="flex flex-col justify-between gap-3 border-b border-abyss-800 pb-4 sm:flex-row sm:items-center">
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

          {groupedModules.length > 1 && (
            <nav
              aria-label="Navigasi modul laporan"
              className="rounded-xl border border-abyss-800/80 bg-abyss-900/40 p-4"
            >
              <div className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foam-400">
                <ListTree className="h-3.5 w-3.5 text-sky-400" /> Lompat ke Modul
              </div>
              <div className="flex flex-wrap gap-2">
                {groupedModules.map(([moduleName], moduleIdx) => (
                  <a
                    key={moduleName}
                    href={`#module-${moduleIdx}`}
                    className="rounded-lg border border-abyss-700/60 bg-abyss-950/70 px-3 py-1.5 text-xs font-medium text-foam-200 transition-colors hover:border-sky-500/50 hover:text-sky-300"
                  >
                    {moduleName}
                  </a>
                ))}
              </div>
            </nav>
          )}

          {groupedModules.map(([moduleName, sections], moduleIdx) => (
            <div
              key={moduleName}
              id={`module-${moduleIdx}`}
              className="scroll-mt-24 space-y-6"
            >
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
                    <div className="border-b border-abyss-800/60 bg-abyss-950 p-2">
                      <ImageLightbox
                        images={[
                          {
                            src: sec.image,
                            alt: sec.title,
                            caption: `${moduleName} — ${sec.title}`,
                          },
                        ]}
                        columnsClassName="grid grid-cols-1"
                        aspectClassName="aspect-[16/9] w-full"
                        imageClassName="object-contain bg-abyss-950"
                        thumbSizes="(max-width: 896px) 100vw, 880px"
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
          Teknologi &amp; Tools
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foam-50">
          Pembelajaran &amp; Kompetensi
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foam-300 marker:text-sky-400">
          {project.learned.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      {/* Prev / Next Project Navigation */}
      {(prevProject || nextProject) && (
        <nav
          aria-label="Navigasi proyek lainnya"
          className="mt-14 grid gap-4 border-t border-abyss-800/80 pt-8 sm:grid-cols-2"
        >
          {prevProject ? (
            <Link
              href={`/inventory/projects/${prevProject.slug}`}
              className="group rounded-2xl border border-abyss-800/80 bg-abyss-900/50 p-4 transition-colors hover:border-sky-500/40 hover:bg-abyss-900"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foam-400 group-hover:text-sky-400">
                <ArrowLeft className="h-3.5 w-3.5" /> Proyek Sebelumnya
              </span>
              <p className="mt-1.5 line-clamp-1 text-sm font-bold text-foam-50 group-hover:text-sky-300">
                {prevProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/inventory/projects/${nextProject.slug}`}
              className="group rounded-2xl border border-abyss-800/80 bg-abyss-900/50 p-4 text-right transition-colors hover:border-sky-500/40 hover:bg-abyss-900"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foam-400 group-hover:text-sky-400">
                Proyek Berikutnya <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="mt-1.5 line-clamp-1 text-sm font-bold text-foam-50 group-hover:text-sky-300">
                {nextProject.title}
              </p>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
