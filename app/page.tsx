import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/section-title";
import ProjectCard from "@/components/project-card";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full ring-4 ring-gray-100 md:h-56 md:w-56">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-blue-600">{profile.alias}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-gray-700">{profile.role}</p>
          <p className="mt-1 text-sm text-gray-500">{profile.tagline}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Lihat Project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
            >
              <Mail className="h-4 w-4" /> Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-20">
        <SectionTitle
          title="Featured Projects"
          subtitle="Beberapa project yang aku banggakan."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
          <Link key={p.id} href={`/inventory/projects/${p.slug}`} className="block">
            <ProjectCard project={p} />
          </Link>
        ))}
        </div>
      </section>

      {/* Skill Highlights */}
      <section className="mt-20">
        <SectionTitle title="Skills" subtitle="Tools dan bahasa yang aku pakai." />
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <span
              key={s.name}
              className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
            >
              {s.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}