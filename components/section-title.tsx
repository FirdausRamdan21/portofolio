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
    <div className={cn("mb-9", className)}>
      <p className="eyebrow">Archive / {title}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-foam-50 md:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-16 bg-coral-400" />
      {subtitle && <p className="mt-4 max-w-2xl text-sm leading-6 text-foam-300 md:text-base">{subtitle}</p>}
    </div>
  );
}