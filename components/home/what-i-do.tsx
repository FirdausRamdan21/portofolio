import { services } from "@/data/services";
import SectionTitle from "@/components/section-title";
import { serviceIcons } from "@/components/icon-map";

export default function WhatIDo() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
      <SectionTitle
        title="What I Do"
        subtitle="Bidang yang aku tekuni dan kembangkan."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s) => {
          const Icon = serviceIcons[s.icon];
          return (
            <div
              key={s.id}
              className="card-glow group rounded-lg border border-abyss-700/40 bg-abyss-900/65 p-5 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-abyss-500/25 to-abyss-700/30 ring-1 ring-inset ring-abyss-500/30">
                <Icon className="h-5 w-5 text-coral-400" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foam-50">
                {s.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-foam-300">
                {s.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}