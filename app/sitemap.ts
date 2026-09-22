import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/history", priority: 0.7 },
    { path: "/activities", priority: 0.8 },
    { path: "/inventory", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${SITE.url}/inventory/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const activityRoutes = activities.map((a) => ({
    url: `${SITE.url}/inventory/activities/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...activityRoutes];
}