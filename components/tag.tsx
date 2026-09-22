import { cn } from "@/lib/utils";

export default function Tag({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "bg-abyss-800/70 text-abyss-300 ring-1 ring-inset ring-abyss-700/50",
        variant === "outline" &&
          "border border-abyss-700/60 text-foam-300"
      )}
    >
      {children}
    </span>
  );
}