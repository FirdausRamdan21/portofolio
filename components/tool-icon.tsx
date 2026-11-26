import { PenTool, Send, Triangle, Wrench } from "lucide-react";
import { GithubIcon, TiktokIcon } from "@/components/brand-icons";

/** Renders a crisp vector icon matching a tool's icon key or name. */
export default function ToolIcon({
  icon,
  name,
  className = "h-5 w-5",
}: {
  icon: string;
  name: string;
  className?: string;
}) {
  const key = name.toLowerCase();
  if (key.includes("tiktok")) return <TiktokIcon className={className} />;
  if (key.includes("github") || icon === "github") {
    return <GithubIcon className={className} />;
  }
  if (key.includes("excalidraw") || icon === "figma") {
    return <PenTool className={className} />;
  }
  if (key.includes("vercel") || icon === "triangle") {
    return <Triangle className={className} />;
  }
  if (key.includes("postman") || icon === "send") {
    return <Send className={className} />;
  }
  return <Wrench className={className} />;
}
