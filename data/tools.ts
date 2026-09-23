import type { Tool, ToolNote } from "@/lib/types";

export const tools: Tool[] = [
  {
    name: "GitHub",
    category: "Version Control",
    url: "https://github.com",
    icon: "github",
    description: "Hosting repository dan kolaborasi.",
  },
  {
    name: "Excalidraw",
    category: "Design",
    url: "https://excalidraw.com",
    icon: "figma",
    description: "Desain UI dan prototyping.",
  },
  {
    name: "Vercel",
    category: "Deployment",
    url: "https://vercel.com",
    icon: "triangle",
    description: "Deploy website Next.js.",
  },
  {
    name: "Postman",
    category: "API Testing",
    url: "https://postman.com",
    icon: "send",
    description: "Testing dan dokumentasi API.",
  },
  {
    name: "TikTok",
    category: "Content Platform",
    url: "https://www.tiktok.com/@mr_north9?is_from_webapp=1&sender_device=pc",
    icon: "send",
    description: "Platform publikasi konten edukasi teknologi.",
  },
];

export const toolNotes: ToolNote[] = [
  {
    id: "cheatsheet-git",
    title: "Git Cheatsheet",
    description: "Kumpulan perintah Git yang sering dipakai.",
    type: "Note",
    url: "/documents/git-cheatsheet.pdf",
  },
  {
    id: "setup-laravel",
    title: "Setup Laravel di Fedora",
    description: "Catatan pribadi untuk setup environment Laravel.",
    type: "Note",
  },
  {
    id: "cv",
    title: "Curriculum Vitae",
    description: "CV Firdaus Ramdan.",
    type: "File",
    url: "https://drive.google.com/file/d/1BQA7NolrfSSZ5nkliSBkhdsuoU-Uo1uo/view?usp=drive_link",
  },
];