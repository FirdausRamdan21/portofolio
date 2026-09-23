import Image from "next/image";
import type { Activity } from "@/lib/types";
import Tag from "./tag";

const typeLabel: Record<Activity["type"], string> = {
  School: "Sekolah",
  Extracurricular: "Ekstrakurikuler",
  Outside: "Luar Sekolah",
  Digital: "Digital",
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="card-glow group h-full overflow-hidden rounded-xl border border-abyss-700/40 bg-abyss-900/60 backdrop-blur-sm">
      {activity.image ? (
        <div className="relative aspect-video overflow-hidden bg-abyss-950">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950/70 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-abyss-800 to-abyss-900">
          <span className="text-3xl font-bold text-abyss-500">
            {activity.title.charAt(0)}
          </span>
        </div>
      )}
      <div className="p-4">
        <span className="text-xs font-medium text-abyss-300">
          {typeLabel[activity.type]}
        </span>
        <h3 className="mt-1 font-semibold text-foam-50">{activity.title}</h3>
        <p className="text-sm text-foam-500">{activity.organization}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-foam-300">
          {activity.description.split("<br><br>")[0]}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {activity.skills.slice(0, 3).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}