import type { Activity } from "@/lib/types";

export const activities: Activity[] = [
  {
    id: "japanese-club",
    slug: "japanese-club",
    title: "Wakil Ketua Japanese Club Baka Danger",
    organization: "SMKN 8 Jakarta",
    role: "Wakil Ketua",
    description:
      "Membuat dan mengembangkan website official Japanese Club, membantu aktivitas organisasi, serta bekerja sama dengan pengurus lain dalam menjalankan program kerja.",
    image: "/images/activities/japanese-club.jpg",
    startDate: "2024-08",
    endDate: "2025-06",
    skills: ["Leadership", "Team Work", "Web Development", "Communication"],
    type: "Extracurricular",
  },
  {
    id: "perpustakaan",
    slug: "perpustakaan",
    title: "Volunteer Perpustakaan — Divisi Web",
    organization: "Perpustakaan Sekolah",
    role: "Web Division",
    description:
      "Mengelola data buku, administrasi perpustakaan, dan membantu siswa mengakses informasi perpustakaan melalui website.",
    startDate: "2024-09",
    endDate: "2025-05",
    skills: ["Data Management", "Web Development", "Administration"],
    type: "School",
  },
  {
    id: "minerva-cafe",
    slug: "minerva-cafe",
    title: "Event Organizer & Moderator — Minerva Cafe",
    organization: "Discord Community",
    role: "Event Organizer & Moderator",
    description:
      "Mengorganisir event komunitas dan menjaga ketertiban serta kenyamanan anggota di server Discord.",
    startDate: "2023-01",
    skills: ["Event Management", "Moderation", "Public Speaking"],
    type: "Outside",
  },
  {
    id: "freecodecamp-activity",
    slug: "freecodecamp-frontend-learning",
    title: "Front End Development Learning",
    organization: "freeCodeCamp",
    role: "Self-paced Learner",
    description:
      "Menyelesaikan kurikulum Front End Development Libraries secara mandiri.",
    startDate: "2024-10",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    type: "Outside",
  },
  {
    id: "mr-north",
    slug: "mr-north",
    title: "Content Creator Edukasi — MR_North",
    organization: "TikTok",
    role: "Creator & Editor",
    description:
      "Membuat konten edukasi seputar programming dan teknologi, serta mengedit video untuk platform TikTok.",
    startDate: "2024-06",
    skills: ["Video Editing", "Public Speaking", "Content Creation"],
    type: "Digital",
  },
];