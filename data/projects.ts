import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "japanese-club-web",
    slug: "japanese-club-web",
    title: "Website Official Japanese Club",
    description:
      "Website resmi ekstrakurikuler Japanese Club Baka Danger untuk publikasi kegiatan, galeri, dan informasi anggota.",
    thumbnail: "/images/projects/japanese-club.jpg",
    images: ["/images/projects/japanese-club-1.jpg"],
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
  },
  {
    id: "freecodecamp-frontend",
    slug: "freecodecamp-frontend",
    title: "freeCodeCamp Front End Projects",
    description:
      "Kumpulan project latihan dari kurikulum freeCodeCamp Front End Development Libraries.",
    thumbnail: "/images/projects/freecodecamp.jpg",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    learned: [
      "Dasar-dasar React dan state management",
      "Layout responsif dengan Flexbox dan Grid",
      "Problem solving lewat latihan terstruktur",
    ],
    date: "2025-01",
    category: "Web",
    github: "https://github.com/username/freecodecamp",
    featured: true,
  },
  {
    id: "crud-laravel",
    slug: "crud-laravel",
    title: "Aplikasi CRUD Perpustakaan",
    description:
      "Aplikasi manajemen data buku berbasis Laravel dengan fitur CRUD, relasi tabel, dan autentikasi.",
    thumbnail: "/images/projects/crud-laravel.jpg",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    learned: [
      "Relasi antar tabel (one-to-many, many-to-many)",
      "Membuat sistem autentikasi",
      "Migrasi dan seeding database",
    ],
    date: "2024-11",
    category: "Web",
    github: "https://github.com/username/crud-perpustakaan",
    featured: false,
  },
];