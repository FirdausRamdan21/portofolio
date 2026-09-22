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
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  );
}