import { profile } from "@/data/profile";
import { tools } from "@/data/tools";
import SectionTitle from "@/components/section-title";
import { cn } from "@/lib/utils";

function SkillBar({
  name,
  progress,
  soft = false,
}: {
  name: string;
  progress: number;
  soft?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-foam-100">{name}</span>
        <span className="text-foam-500">{progress}%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-abyss-900 ring-1 ring-inset ring-abyss-700/40">
        <div
          className={cn(
            "h-full rounded-full",
            soft
              ? "bg-gradient-to-r from-emerald-500/70 to-emerald-400"
              : "bg-gradient-to-r from-abyss-500 to-abyss-300"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsTools() {
  const technical = profile.skills.filter(
    (s) => s.category !== "Soft Skill" && s.progress
  );
  const soft = profile.skills.filter((s) => s.category === "Soft Skill");

  return (
    <section className="relative overflow-hidden border-y border-abyss-700/20 bg-abyss-900/35 py-20 md:py-24">
      {/* depth glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-abyss-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Skills & Tools"
          subtitle="Kemampuan teknis, soft skill, dan tools yang aku pakai."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Skills */}
          <div>
            <h3 className="eyebrow">
              My Skills
            </h3>
            <div className="mt-4 space-y-3.5">
              {technical.map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  progress={s.progress!}
                />
              ))}
            </div>

            {soft.length > 0 && (
              <>
                <h3 className="eyebrow mt-10 text-emerald-300">
                  Soft Skills
                </h3>
                <div className="mt-4 space-y-3.5">
                  {soft.map((s) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      progress={s.progress!}
                      soft
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Tools */}
          <div>
            <h3 className="eyebrow">
              Tools & Technologies
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {tools.map((t) => (
                <a
                  key={t.name}
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-lg border border-abyss-700/40 bg-abyss-900/60 p-3 backdrop-blur-sm transition-all hover:border-coral-400/60 hover:bg-abyss-800/70"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-abyss-700 to-abyss-800 text-sm font-bold uppercase text-abyss-300 ring-1 ring-inset ring-abyss-500/20 transition-transform group-hover:scale-110">
                    {t.name.slice(0, 2)}
                  </div>
                  <span className="text-center text-[11px] font-medium leading-tight text-foam-100">
                    {t.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}