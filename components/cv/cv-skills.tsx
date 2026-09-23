import type { Skill } from "@/lib/types";

export default function CvSkills({ skills }: { skills: Skill[] }) {
  const groups = [
    {
      label: "Technical",
      match: (s: Skill) =>
        ["Language", "Framework", "Database", "Tool"].includes(s.category),
    },
    {
      label: "Soft Skills",
      match: (s: Skill) => s.category === "Soft Skill",
    },
  ];

  return (
    <div className="space-y-5">
      {groups.map((g) => {
        const items = skills.filter(g.match);
        if (!items.length) return null;
        return (
          <div key={g.label}>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-foam-500 print:text-gray-500">
              {g.label}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {items.map((s) => (
                <span
                  key={s.name}
                  className="rounded-md border border-abyss-700/40 bg-abyss-900/60 px-2 py-0.5 text-xs text-foam-100 print:border-gray-300 print:bg-white print:text-black"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}