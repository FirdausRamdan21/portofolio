import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Membangun website responsif dan modern dengan HTML, CSS, JavaScript, dan framework seperti Next.js.",
    icon: "code",
  },
  {
    id: "ui-impl",
    title: "UI Implementation",
    description:
      "Menerjemahkan desain Figma menjadi kode rapi, aksesibel, dan pixel-perfect.",
    icon: "layout",
  },
  {
    id: "backend",
    title: "Backend & API",
    description:
      "Membuat REST API, autentikasi, dan relasi database dengan Laravel, Node.js, dan PostgreSQL.",
    icon: "server",
  },
  {
    id: "data",
    title: "Data Analysis",
    description:
      "Mengolah dan memvisualisasikan data dengan Python dan SQL untuk insight yang berguna.",
    icon: "chart",
  },
  {
    id: "content",
    title: "Content & Education",
    description:
      "Membuat konten edukasi teknologi dan mengedit video untuk platform digital.",
    icon: "video",
  },
];