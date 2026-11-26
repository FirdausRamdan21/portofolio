import type { HistoryItem } from "@/lib/types";
import { formatMonthYear } from "@/lib/utils";

export default function CvEducation({ items }: { items: HistoryItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id} className="break-inside-avoid">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-sm font-semibold text-foam-100 print:text-black">
              {item.institution}
            </h3>
            <span className="text-xs text-foam-400 print:text-gray-600">
              {formatMonthYear(item.startDate)}
              {item.endDate && ` — ${formatMonthYear(item.endDate)}`}
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
