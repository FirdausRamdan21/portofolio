import { cn } from "@/lib/utils";

export default function SectionTitle({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-foam-50 md:text-3xl">
        {title}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-abyss-300 to-abyss-500" />
      {subtitle && <p className="mt-3 text-foam-300">{subtitle}</p>}
    </div>
  );
}