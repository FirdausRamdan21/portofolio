import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import Tag from "./tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/inventory/projects/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
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
    </Link>
  );
}