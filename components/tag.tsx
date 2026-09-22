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
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-gray-100 text-gray-700",
        variant === "outline" && "border border-gray-300 text-gray-700"
      )}
    >
      {children}
    </span>
  );
}