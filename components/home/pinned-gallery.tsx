import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/section-title";
import Tag from "@/components/tag";
import { cn } from "@/lib/utils";

export default function PinnedGallery() {
  const featuredProjects = projects.filter((p) => p.featured || p.pinned);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <SectionTitle
          title="Proyek Unggulan Terpilih"
          subtitle="Aplikasi web berskala produksi, sistem enterprise, dan platform digital yang telah saya rancang dan bangun."
          className="mb-0"
        />
        <Link
          href="/inventory"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          Lihat Semua Arsip Proyek <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <article
            key={project.id}
            className={cn(
              "card-glow group flex flex-col overflow-hidden rounded-2xl border border-abyss-800/80 bg-abyss-900/60 backdrop-blur-sm transition-all hover:border-sky-500/40",
              index === 0 ? "md:col-span-2 lg:col-span-2" : ""
            )}
          >
            {/* Thumbnail Preview Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-abyss-950 border-b border-abyss-800/80">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950/80 via-transparent to-transparent" />

              {/* Category Badge & Date */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-abyss-950/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md">
                  <Sparkles className="h-2.5 w-2.5" />
                  {project.category}
                </span>
                <span className="rounded-full bg-abyss-950/80 px-2.5 py-0.5 text-[10px] font-semibold text-foam-400 backdrop-blur-md">
                  {project.date}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="text-lg font-bold text-foam-50 group-hover:text-sky-300 transition-colors">
                  <Link href={`/inventory/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-foam-300">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] font-medium text-foam-500 self-center">
                      +{project.tech.length - 4} lainnya
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between border-t border-abyss-800/80 pt-4">
                <Link
                  href={`/inventory/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Detail Studi Kasus <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-abyss-700/60 bg-abyss-800/60 p-1.5 text-foam-300 hover:text-white hover:border-abyss-500 transition-colors"
                      title="Lihat Source Code di GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-sky-500/40 bg-sky-500/10 p-1.5 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 transition-colors"
                      title="Kunjungi Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
