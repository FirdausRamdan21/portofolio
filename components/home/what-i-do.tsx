import { services } from "@/data/services";
import SectionTitle from "@/components/section-title";
import { serviceIcons } from "@/components/icon-map";

export default function WhatIDo() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle
        title="Keahlian & Spesialisasi"
        subtitle="Bidang kompetensi teknis dan rekayasa perangkat lunak yang saya tekuni untuk menghadirkan solusi digital berkualitas."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s) => {
          const Icon = serviceIcons[s.icon];
          return (
            <div
              key={s.id}
              className="card-glow group rounded-xl border border-abyss-800/80 bg-abyss-900/60 p-5 backdrop-blur-sm transition-all hover:border-sky-500/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 ring-1 ring-inset ring-sky-500/30">
                <Icon className="h-5 w-5 text-sky-400 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-foam-50">
                {s.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foam-300">
                {s.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
