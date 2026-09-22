import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "japanese-club-web",
    slug: "japanese-club-web",
    title: "Website Official Japanese Club",
    description:
      "Website resmi ekstrakurikuler Japanese Club Baka Danger untuk publikasi kegiatan, galeri, dan informasi anggota.",
    thumbnail: "/images/projects/japanese.png",
    images: ["/images/projects/japanese.png"],
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    learned: [
      "Membangun website responsif dari nol",
      "Kolaborasi dengan tim pengurus",
      "Deploy dan maintenance website organisasi",
    ],
    date: "2025-03",
    category: "Web",
    github: "https://github.com/username/japanese-club",
    live: "https://japanese-club.vercel.app",
    featured: true,
  }
]