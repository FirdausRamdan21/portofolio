import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import Tag from "./tag";

export default function ProjectCard({
  project,
  className,
  onSelect,
}: {
  project: Project;
  className?: string;
  onSelect?: (p: Project) => void;
}) {
  return (
    <article
      className={cn(
        "card-glow group flex flex-col justify-between overflow-hidden rounded-2xl border border-abyss-800/80 bg-abyss-900/60 backdrop-blur-sm transition-all hover:border-sky-500/40",
        className
      )}
    >
      <div>
        {/* Thumbnail */}
        <div
          onClick={() => onSelect?.(project)}
          className={cn(
            "relative block aspect-video overflow-hidden bg-abyss-950 border-b border-abyss-800/80",
            onSelect && "cursor-pointer"
          )}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950/70 via-transparent to-transparent" />

          {/* Badge Category & Date */}
          <div className="absolute left-3 top-3 flex items-center gap-1.5">
            <span className="rounded-full bg-abyss-950/85 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-300 border border-sky-500/30 backdrop-blur-md">
              {project.category}
            </span>
            <span className="rounded-full bg-abyss-950/85 px-2.5 py-0.5 text-[10px] font-semibold text-foam-400 backdrop-blur-md">
              {project.date}
            </span>
          </div>

          {project.logo && (
            <div className="absolute right-3 top-3 h-9 w-9 overflow-hidden rounded-lg border border-abyss-700/60 bg-white p-0.5 shadow-md">
              <Image
                src={project.logo}
                alt={`Logo ${project.title}`}
                fill
                className="object-contain p-0.5"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-foam-50 group-hover:text-sky-300 transition-colors line-clamp-1">
            <Link href={`/inventory/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-foam-300">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] font-medium text-foam-500 self-center">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between border-t border-abyss-800/80 px-5 py-3 bg-abyss-950/40">
        <Link
          href={`/inventory/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
        >
          Lihat Detail <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-foam-400 hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
              title="Kunjungi Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
