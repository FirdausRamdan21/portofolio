import { cn } from "@/lib/utils";

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  as: Heading = "h2",
  className,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("mb-9", className)}>
      <p className="eyebrow">{eyebrow ?? `Archive / ${title}`}</p>
      <Heading className="mt-2 text-2xl font-bold tracking-tight text-foam-50 md:text-3xl">
        {title}
      </Heading>
      <div className="mt-3 h-px w-16 bg-coral-400" />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-6 text-foam-300 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
