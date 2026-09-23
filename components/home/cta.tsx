import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-abyss-500/30 bg-gradient-to-br from-abyss-800 via-abyss-900 to-abyss-950 p-10 shadow-2xl shadow-abyss-950/60 md:p-14">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-abyss-500/20 blur-3xl"
          />

          <div className="relative text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-abyss-300">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foam-50 md:text-4xl">
              Punya project atau ide?
              <br className="hidden sm:block" /> Yuk, ngobrol.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foam-300">
              Aku terbuka untuk kolaborasi, freelance, magang, atau sekadar
              diskusi seputar web development dan data.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-coral-500 px-5 py-2.5 text-sm font-semibold text-abyss-950 shadow-lg shadow-coral-500/20 transition-all hover:bg-coral-400"
              >
                Hubungi Aku <ArrowRight className="h-4 w-4" />
              </Link>
              {profile.contacts.email && (
                <a
                  href={`mailto:${profile.contacts.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-abyss-500/40 bg-abyss-900/60 px-5 py-2.5 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-abyss-400 hover:bg-abyss-800/70"
                >
                  <Mail className="h-4 w-4" /> Email Langsung
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}