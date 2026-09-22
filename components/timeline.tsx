import type { HistoryItem } from "@/lib/types";

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function Timeline({ items }: { items: HistoryItem[] }) {
  return (
    <ol className="relative border-l border-gray-200 pl-6">
      {items.map((item) => (
        <li key={item.id} className="mb-10 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 rounded-full border-2 border-white bg-blue-600" />
          <time className="text-xs font-medium text-gray-500">
            {formatDate(item.startDate)}
            {item.endDate && ` — ${formatDate(item.endDate)}`}
          </time>
          <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">
            {item.institution}
            {item.major && ` · ${item.major}`}
          </p>
          {item.description && (
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}