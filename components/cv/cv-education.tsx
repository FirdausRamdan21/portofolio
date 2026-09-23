import type { HistoryItem } from "@/lib/types";

function fmt(date: string) {
  const [y, m] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
  ];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export default function CvEducation({ items }: { items: HistoryItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id} className="break-inside-avoid">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-sm font-semibold text-foam-100 print:text-black">
              {item.institution}
            </h3>
            <span className="text-xs text-foam-500 print:text-gray-600">
              {fmt(item.startDate)}
              {item.endDate && ` — ${fmt(item.endDate)}`}
            </span>
          </div>
          <p className="text-xs text-foam-300 print:text-gray-700">
            {item.title}
            {item.major && ` · ${item.major}`}
          </p>
          {item.description && (
            <p className="mt-1 text-xs leading-relaxed text-foam-300 print:text-gray-700">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}