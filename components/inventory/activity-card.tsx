import Image from "next/image";
import type { Activity } from "@/lib/types";
import Tag from "../tag";

const typeLabel: Record<Activity["type"], string> = {
  School: "Sekolah",
  Extracurricular: "Ekstrakurikuler",
  Outside: "Luar Sekolah",
  Digital: "Digital",
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg">
      {activity.image ? (
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
          <span className="text-3xl font-bold text-gray-300">
            {activity.title.charAt(0)}
          </span>
        </div>
      )}
      <div className="p-4">
        <span className="text-xs font-medium text-blue-600">
          {typeLabel[activity.type]}
        </span>
        <h3 className="mt-1 font-semibold">{activity.title}</h3>
        <p className="text-sm text-gray-500">{activity.organization}</p>
        <p className="mt-2 line-clamp-3 text-sm text-gray-600">
          {activity.description}
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