import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    description:
      "Merancang dan membangun aplikasi web komprehensif dari sisi antarmuka hingga server menggunakan ekosistem Next.js, React, PHP, dan Tailwind CSS.",
    icon: "code",
  },
  {
    id: "backend",
    title: "Backend & RESTful API",
    description:
      "Mengembangkan arsitektur backend yang aman dan efisien, manajemen otentikasi sesi & token, serta integrasi API berkinerja tinggi.",
    icon: "server",
  },
  {
    id: "database",
    title: "Database Architecture",
    description:
      "Perancangan skema relasional terstandar, normalisasi data, query optimization, dan integrasi ORM (MySQL, PostgreSQL, Prisma).",
    icon: "chart",
  },
  {
    id: "ui-impl",
    title: "UI/UX Engineering",
    description:
      "Menerjemahkan wireframe dan desain Figma menjadi antarmuka web yang interaktif, aksesibel, responsif lintas perangkat, dan pixel-perfect.",
    icon: "layout",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Automasi",
    description:
      "Pengolahan data operasional, penyusunan dashboard visual analitik, dan otomatisasi proses bisnis menggunakan SQL dan Python.",
    icon: "video",
  },
];
