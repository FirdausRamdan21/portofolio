import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Firdaus Ramdan",
  alias: "Firdaus",
  role: "Full-Stack Web Developer & Software Engineering Student",
  tagline: "Rekayasa Perangkat Lunak · SMKN 8 Jakarta · Full-Stack & Data Specialist",
  location: "Jakarta, Indonesia",
  photo: "/images/profile/firdaus.jpg",
  about:
    "Saya Firdaus Ramdan, pengembang perangkat lunak (Full-Stack Developer) dan siswa Rekayasa Perangkat Lunak di SMKN 8 Jakarta dengan keahlian dalam perancangan sistem web modern, arsitektur basis data, dan analisis data. Berpengalaman membangun aplikasi fungsional skala nyata—mulai dari sistem manajemen armada perkeretaapian berskala kompleks, platform kasir POS & inventaris, hingga portal web organisasi—dengan komitmen tinggi terhadap kualitas kode, keamanan, dan pengalaman pengguna.",
  skills: [
    // Languages
    { name: "PHP", category: "Language", level: "Advanced", progress: 88 },
    { name: "JavaScript", category: "Language", level: "Advanced", progress: 85 },
    { name: "TypeScript", category: "Language", level: "Intermediate", progress: 78 },
    { name: "SQL (MySQL & PostgreSQL)", category: "Language", level: "Advanced", progress: 85 },
    { name: "HTML5 & CSS3", category: "Language", level: "Advanced", progress: 92 },
    { name: "Python", category: "Language", level: "Intermediate", progress: 65 },

    // Frameworks & Libraries
    { name: "Next.js", category: "Framework", level: "Advanced", progress: 84 },
    { name: "React", category: "Framework", level: "Advanced", progress: 82 },
    { name: "Tailwind CSS", category: "Framework", level: "Advanced", progress: 90 },
    { name: "Laravel", category: "Framework", level: "Intermediate", progress: 75 },
    { name: "Node.js & Express", category: "Framework", level: "Intermediate", progress: 72 },
    { name: "Bootstrap 5", category: "Framework", level: "Advanced", progress: 88 },

    // Databases & ORM
    { name: "MySQL / MariaDB", category: "Database", level: "Advanced", progress: 88 },
    { name: "PostgreSQL", category: "Database", level: "Intermediate", progress: 78 },
    { name: "Prisma ORM", category: "Database", level: "Intermediate", progress: 80 },
    { name: "Database Normalization & Indexing", category: "Database", level: "Advanced", progress: 82 },

    // Tools & DevOps
    { name: "Git & GitHub", category: "Tool", level: "Advanced", progress: 86 },
    { name: "RESTful API Design", category: "Tool", level: "Advanced", progress: 85 },
    { name: "VS Code & Laragon Environment", category: "Tool", level: "Advanced", progress: 92 },
    { name: "Figma (UI/UX Implementation)", category: "Tool", level: "Intermediate", progress: 78 },
    { name: "Postman API Testing", category: "Tool", level: "Intermediate", progress: 80 },
    { name: "Vercel Deployment", category: "Tool", level: "Advanced", progress: 85 },

    // Soft Skills / Professional
    { name: "Problem Solving & Algoritma", category: "Soft Skill", progress: 90 },
    { name: "Kolaborasi Tim & Kepemimpinan", category: "Soft Skill", progress: 88 },
    { name: "Komunikasi Teknis & Dokumentasi", category: "Soft Skill", progress: 86 },
    { name: "Manajemen Waktu & Tanggung Jawab Proyek", category: "Soft Skill", progress: 92 },
    { name: "Berpikir Kritis & Analisis Kebutuhan", category: "Soft Skill", progress: 88 },
  ],
  contacts: {
    email: "firdausramdan.dev@gmail.com",
    github: "https://github.com/FirdausRamdan21",
    linkedin: "https://www.linkedin.com/in/firdaus-ramdan/",
    tiktok: "https://www.tiktok.com/@mr_north9?is_from_webapp=1&sender_device=pc",
    youtube: "https://youtube.com/@mr_north",
  },
  cvUrl: "/documents/CV-Firdaus-Ramdan.pdf",

  summary:
    "Siswa Rekayasa Perangkat Lunak di SMKN 8 Jakarta dengan rekam jejak terbukti dalam membangun sistem web Full-Stack, perancangan basis data relasional terstruktur, dan REST API. Menguasai ekosistem Next.js, TypeScript, PHP/Laravel, dan Tailwind CSS, serta aktif berorganisasi dengan kemampuan pemecahan masalah dan kerja sama tim yang solid. Siap berkontribusi sebagai pengembang perangkat lunak magang atau junior web developer.",

  languages: [
    { name: "Bahasa Indonesia", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
};
