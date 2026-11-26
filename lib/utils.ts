import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MONTHS_ID = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

/** Formats YYYY-MM into Indonesian month + year, passing through non-ISO labels like "Sekarang". */
export function formatMonthYear(date: string): string {
  if (!/^\d{4}-\d{2}$/.test(date)) return date;
  const [year, month] = date.split("-");
  const idx = Number.parseInt(month, 10) - 1;
  if (idx < 0 || idx >= MONTHS_ID.length) return date;
  return `${MONTHS_ID[idx]} ${year}`;
}
