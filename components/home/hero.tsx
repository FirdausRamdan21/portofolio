import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";
import Bubbles from "@/components/bubbles";

export default function Hero() {
  const stats = [
    { value: `${projects.length}+`, label: "Projects" },
    { value: `${activities.length}+`, label: "Activities" },
    { value: "3", label: "Years Learning" },
  ];

  return (
    <section className="sea-hero relative overflow-hidden">
      <Bubbles />

      {/* glow bawah */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 bg-gradient-to-b from-transparent to-abyss-950"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <span className="eyebrow inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Hi, I am {profile.alias}
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-foam-50 md:text-6xl lg:text-7xl">
              Software{" "}
              <span className="text-gradient-sea">Engineer</span>
              <br />& Data Analyst
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-foam-300 md:text-lg">
              {profile.about}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/inventory"
                className="inline-flex items-center gap-2 rounded-lg bg-coral-500 px-5 py-2.5 text-sm font-semibold text-abyss-950 shadow-lg shadow-coral-500/20 transition-all hover:bg-coral-400"
              >
                Lihat Project <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/60 bg-abyss-900/40 px-5 py-2.5 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-abyss-700/60 bg-abyss-900/40 px-5 py-2.5 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70"
              >
                <Mail className="h-4 w-4" /> Contact
              </Link>
            </div>

            {/* Stats mini */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 md:mx-0 mx-auto">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-foam-50 md:text-3xl">
                    {s.value}
                  </p>
                  <p className="text-xs text-foam-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Foto + floating badge */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Glow ring belakang */}
            <div
              aria-hidden
              className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-abyss-400/30 via-abyss-500/20 to-transparent blur-2xl"
            />

            {/* Frame foto */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-abyss-500/30 bg-abyss-900/60 shadow-2xl shadow-abyss-950/80 backdrop-blur-sm">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, 480px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950/70 via-transparent to-transparent" />
            </div>

            {/* Floating badge — kiri atas */}
            <div className="absolute -left-4 top-6 hidden rounded-xl border border-abyss-500/30 bg-abyss-900/90 px-3 py-2 shadow-xl backdrop-blur-md sm:block">
              <p className="text-[10px] uppercase tracking-wide text-foam-500">
                Top Achieved
              </p>
              <p className="text-sm font-semibold text-foam-50">
                {projects.length}+ Projects Built
              </p>
            </div>

            {/* Floating badge — kanan bawah */}
            <div className="absolute -right-4 bottom-6 hidden rounded-xl border border-abyss-500/30 bg-abyss-900/90 px-3 py-2 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
              <p className="text-xs font-medium text-foam-100">
                Available for work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}