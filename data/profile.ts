import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Firdaus Ramdan",
  alias: "MR_North",
  role: "Software Engineering Student & Aspiring Data Analyst",
  tagline: "Rekayasa Perangkat Lunak · SMKN 8 Jakarta · Aktif Berkarya",
  location: "Jakarta, Indonesia",
  photo: "/images/profile/firdaus.jpg",
  about:
    "Saya Firdaus Ramdan, siswa Rekayasa Perangkat Lunak di SMKN 8 Jakarta dengan fokus pada Software Engineering dan Data Analysis. Saya membangun website yang rapi, responsif, dan fungsional, serta mengembangkan kemampuan melalui project nyata, organisasi, dan pembelajaran mandiri.",
  skills: [
    // Technical
    { name: "HTML & CSS", category: "Language", level: "Advanced", progress: 90 },
    { name: "JavaScript", category: "Language", level: "Intermediate", progress: 80 },
    { name: "TypeScript", category: "Language", level: "Beginner", progress: 60 },
    { name: "PHP", category: "Language", level: "Intermediate", progress: 75 },
    { name: "Python", category: "Language", level: "Beginner", progress: 55 },
    { name: "Next.js", category: "Framework", level: "Beginner", progress: 65 },
    { name: "React", category: "Framework", level: "Beginner", progress: 60 },
    { name: "Laravel", category: "Framework", level: "Intermediate", progress: 78 },
    { name: "Node.js", category: "Framework", level: "Beginner", progress: 55 },
    { name: "MySQL", category: "Database", level: "Intermediate", progress: 75 },
    { name: "PostgreSQL", category: "Database", level: "Beginner", progress: 55 },
    { name: "Git & GitHub", category: "Tool", level: "Intermediate", progress: 80 },
    { name: "VS Code", category: "Tool", level: "Advanced", progress: 90 },
    { name: "Figma", category: "Tool", level: "Intermediate", progress: 70 },

    // Soft Skills
    { name: "Team Work", category: "Soft Skill", progress: 90 },
    { name: "Communication", category: "Soft Skill", progress: 85 },
    { name: "Critical Thinking", category: "Soft Skill", progress: 85 },
    { name: "Responsibility", category: "Soft Skill", progress: 92 },
    { name: "Problem Solving", category: "Soft Skill", progress: 88 },
  ],
  contacts: {
    email: "",
    github: "https://github.com/FirdausRamdan21",
    linkedin: "https://www.linkedin.com/in/firdaus-ramdan/",
    tiktok: "https://www.tiktok.com/@mr_north9?is_from_webapp=1&sender_device=pc",
    youtube: "https://youtube.com/@mr_north",
  },
  cvUrl: "/documents/CV-Firdaus-Ramdan.pdf",

  summary:
  "Siswa Rekayasa Perangkat Lunak di SMKN 8 Jakarta dengan fokus pada web development dan data analysis. Berpengalaman membangun website responsif, REST API, dan aplikasi CRUD dengan Next.js, Laravel, dan PostgreSQL. Aktif dalam organisasi dan pembelajaran mandiri, dengan kemampuan kerja sama serta problem solving yang terus dikembangkan.",

languages: [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "English", level: "Intermediate" },
],
};