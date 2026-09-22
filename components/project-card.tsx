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
        "group h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-600">
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