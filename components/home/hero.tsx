import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail, CheckCircle2, Code2, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";

export default function Hero() {
  const stats = [
    { value: `${projects.length}+`, label: "Proyek Selesai", sub: "Enterprise & Web Apps" },
    { value: `${activities.length}+`, label: "Aktivitas & Event", sub: "Organisasi & Volunteer" },
    { value: "3+", label: "Tahun Eksplorasi", sub: "Software Engineering" },
  ];

  return (
    <section className="sea-hero relative overflow-hidden border-b border-abyss-800/60 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* LEFT: Elevator Pitch & Intro */}
          <div className="text-center lg:text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Terbuka untuk Magang &amp; Peluang Kerja Sama</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-foam-50 sm:text-5xl lg:text-6xl leading-[1.12]">
              Full-Stack Developer <br />
              <span className="text-gradient-sea">&amp; Software Engineering</span>
            </h1>

            {/* Professional Summary */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foam-300 sm:text-lg">
              Halo, saya <strong className="font-semibold text-foam-50">{profile.name}</strong>. Siswa Rekayasa Perangkat Lunak di SMKN 8 Jakarta yang berpengalaman membangun aplikasi web fungsional, arsitektur basis data relasional, dan sistem manajemen operasional yang aman, terukur, dan responsif.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href="/inventory"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-abyss-950 shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-500/35"
              >
                Lihat Portofolio Proyek <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/80 bg-abyss-900/60 px-5 py-3 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-sky-500/60 hover:bg-abyss-800"
              >
                <Download className="h-4 w-4 text-sky-400" /> Curriculum Vitae (CV)
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/80 bg-abyss-900/60 px-4 py-3 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-sky-500/60 hover:bg-abyss-800"
              >
                <Mail className="h-4 w-4 text-foam-300" /> Kontak
              </Link>
            </div>

            {/* Proven Track Record / Metric Row */}
            <div className="mt-10 grid grid-cols-3 gap-2 rounded-2xl border border-abyss-800/80 bg-abyss-900/40 p-4 backdrop-blur-sm sm:gap-4 md:max-w-xl">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-foam-50 sm:text-3xl tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-xs font-semibold text-foam-200 mt-0.5">{s.label}</p>
                  <p className="text-[10px] text-foam-500 hidden sm:block">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Profile Photo Card with Professional Accents */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            {/* Ambient Radial Glow */}
            <div
              aria-hidden
              className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-blue-600/10 to-indigo-500/20 blur-xl"
            />

            {/* Card Frame */}
            <div className="relative overflow-hidden rounded-3xl border border-abyss-700/60 bg-abyss-900/70 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-abyss-950">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950/85 via-abyss-950/20 to-transparent" />

                {/* Bottom Overlay Label inside Photo */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-abyss-950/85 px-3 py-1 text-xs font-medium text-sky-300 border border-sky-500/30 backdrop-blur-sm mb-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Verified Portfolio
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-foam-300">
                    Rekayasa Perangkat Lunak &middot; SMKN 8 Jakarta
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Top Left */}
              <div className="absolute -left-3 top-6 hidden rounded-xl border border-abyss-700/80 bg-abyss-950/90 p-3 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400 border border-sky-500/30">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-foam-500">
                    Core Focus
                  </p>
                  <p className="text-xs font-bold text-foam-50">
                    Next.js &middot; PHP &middot; SQL
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right */}
              <div className="absolute -right-3 bottom-12 hidden rounded-xl border border-abyss-700/80 bg-abyss-950/90 p-3 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-foam-500">
                    Pendidikan Formal
                  </p>
                  <p className="text-xs font-bold text-foam-50">
                    SMKN 8 Jakarta (RPL)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
