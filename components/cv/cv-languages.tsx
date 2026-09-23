import type { Language } from "@/lib/types";

export default function CvLanguages({ items }: { items: Language[] }) {
  if (!items.length) return null;

  return (
    <ul className="space-y-2">
      {items.map((l) => (
        <li
          key={l.name}
          className="flex items-center justify-between text-sm"
        >
          <span className="text-foam-100 print:text-black">{l.name}</span>
          <span className="text-xs text-foam-500 print:text-gray-600">
            {l.level}
          </span>
        </li>
      ))}
    </ul>
  );
}