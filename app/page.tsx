import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/section-title";
import ProjectCard from "@/components/project-card";
import Bubbles from "@/components/bubbles";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="sea-hero relative overflow-hidden">
        <Bubbles />

        {/* subtle glow bawah hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-abyss-950"
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-20 md:flex-row md:gap-12 md:py-28">
          <div className="relative h-40 w-40 shrink-0 md:h-56 md:w-56">
            {/* ring glow */}
            <div
              aria-hidden
              className="sea-glow absolute inset-0 rounded-full"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-abyss-500/50">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-abyss-300">{profile.alias}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-foam-50 md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-foam-100">{profile.role}</p>
            <p className="mt-1 text-sm text-foam-300">{profile.tagline}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/inventory"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-abyss-500 to-abyss-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-abyss-950/60 transition-all hover:from-abyss-400 hover:to-abyss-500"
              >
                Lihat Project <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/60 bg-abyss-900/40 px-4 py-2 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/50"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/60 bg-abyss-900/40 px-4 py-2 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/50"
              >
                <Mail className="h-4 w-4" /> Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="mx-auto max-w-5xl px-4 py-16">
        <section>
          <SectionTitle
            title="Featured Projects"
            subtitle="Beberapa project yang aku banggakan."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.id}
                href={`/inventory/projects/${p.slug}`}
                className="block"
              >
                <ProjectCard project={p} />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle
            title="Skills"
            subtitle="Tools dan bahasa yang aku pakai."
          />
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <span
                key={s.name}
                className="rounded-full border border-abyss-700/50 bg-abyss-900/60 px-3 py-1.5 text-sm font-medium text-foam-100 transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70 hover:text-abyss-300"
              >
                {s.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}