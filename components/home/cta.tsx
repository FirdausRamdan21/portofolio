import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { profile } from "@/data/profile";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-br from-abyss-900 via-abyss-950 to-abyss-950 p-8 sm:p-12 md:p-16 shadow-2xl shadow-abyss-950/80">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
          />

          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
              Peluang Kerja Sama &amp; Karir
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foam-50 sm:text-4xl md:text-5xl leading-tight">
              Tertarik Berkolaborasi atau Merekrut?
              <br className="hidden sm:block" /> Mari Diskusikan Proyek Anda.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-foam-300">
              Saya siap berkontribusi secara profesional untuk posisi magang (*internship*), junior web developer, maupun pengembangan proyek sistem perangkat lunak di organisasi Anda.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-abyss-950 shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-500/35"
              >
                Hubungi Saya <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/80 bg-abyss-900/80 px-6 py-3 text-sm font-semibold text-foam-100 backdrop-blur-sm transition-colors hover:border-sky-500/60 hover:bg-abyss-800"
              >
                <FileText className="h-4 w-4 text-sky-400" /> Lihat Resume (CV)
              </Link>
              {profile.contacts.email && (
                <a
                  href={`mailto:${profile.contacts.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-abyss-700/80 bg-abyss-900/80 px-6 py-3 text-sm font-semibold text-foam-100 backdrop-blur-sm transition-colors hover:border-sky-500/60 hover:bg-abyss-800"
                >
                  <Mail className="h-4 w-4 text-foam-400" /> Email Langsung
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
