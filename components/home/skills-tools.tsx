import { profile } from "@/data/profile";
import { tools } from "@/data/tools";
import SectionTitle from "@/components/section-title";
import ToolIcon from "@/components/tool-icon";
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Users,
  Terminal,
} from "lucide-react";

function SkillItem({
  name,
  level,
  progress,
}: {
  name: string;
  level?: string;
  progress?: number;
}) {
  return (
    <div className="rounded-xl border border-abyss-800/80 bg-abyss-950/60 p-3.5 backdrop-blur-sm transition-all hover:border-sky-500/30">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-foam-100">{name}</span>
        {level && (
          <span className="rounded-full border border-abyss-700/60 bg-abyss-800 px-2 py-0.5 text-[10px] font-medium text-sky-300">
            {level}
          </span>
        )}
      </div>
      {progress !== undefined && (
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-abyss-900 ring-1 ring-inset ring-abyss-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default function SkillsTools() {
  const languages = profile.skills.filter((s) => s.category === "Language");
  const frameworks = profile.skills.filter((s) => s.category === "Framework");
  const databases = profile.skills.filter((s) => s.category === "Database");
  const toolSkills = profile.skills.filter((s) => s.category === "Tool");
  const softSkills = profile.skills.filter((s) => s.category === "Soft Skill");

  const skillColumns = [
    {
      title: "Bahasa Pemrograman",
      Icon: Code2,
      items: languages,
    },
    {
      title: "Framework & Frontend",
      Icon: Layers,
      items: frameworks,
    },
    {
      title: "Basis Data & Arsitektur",
      Icon: Database,
      items: databases,
    },
    {
      title: "Workflow, API & DevOps",
      Icon: Terminal,
      items: toolSkills,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-abyss-800/80 bg-abyss-900/30 py-16 md:py-24">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Keahlian Teknis & Perangkat Kerja"
          subtitle="Teknologi, bahasa pemrograman, basis data, dan perangkat rekayasa perangkat lunak yang saya kuasai secara mendalam."
        />

        {/* 2x2 Categorized Technical Skill Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillColumns.map(({ title, Icon, items }) => (
            <div key={title} className="space-y-3">
              <div className="flex items-center gap-2 border-b border-abyss-800/80 pb-2.5">
                <Icon className="h-4 w-4 text-sky-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {title}
                </h3>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {items.map((s) => (
                  <SkillItem
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    progress={s.progress}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Work Tools Section */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Soft Skills */}
          <div className="rounded-2xl border border-abyss-800/80 bg-abyss-900/60 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 border-b border-abyss-800/80 pb-3">
              <Users className="h-4 w-4 text-emerald-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Kompetensi Profesional &amp; Soft Skills
              </h3>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {softSkills.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between gap-2 rounded-xl border border-abyss-800/60 bg-abyss-950/60 p-3"
                >
                  <span className="text-xs font-medium text-foam-100">
                    {s.name}
                  </span>
                  <span className="shrink-0 text-[11px] font-bold text-emerald-400">
                    {s.progress}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="rounded-2xl border border-abyss-800/80 bg-abyss-900/60 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 border-b border-abyss-800/80 pb-3">
              <Wrench className="h-4 w-4 text-sky-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Perangkat &amp; Lingkungan Kerja
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {tools.map((t) => (
                <a
                  key={t.name}
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center rounded-xl border border-abyss-800/80 bg-abyss-950/60 p-3 text-center transition-all hover:border-sky-500/40 hover:bg-abyss-800/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-abyss-800 text-sky-300 ring-1 ring-inset ring-abyss-700/60 transition-transform group-hover:scale-105">
                    <ToolIcon icon={t.icon} name={t.name} className="h-5 w-5" />
                  </div>
                  <span className="mt-2 text-xs font-bold text-foam-100">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-foam-400">
                    {t.category}
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
