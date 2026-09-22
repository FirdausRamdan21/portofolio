import Image from "next/image";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import Tag from "./tag";

export default function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card-glow group h-full overflow-hidden rounded-xl border border-abyss-700/40 bg-abyss-900/60 backdrop-blur-sm",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-abyss-950">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950/70 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foam-50">{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-foam-300">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}