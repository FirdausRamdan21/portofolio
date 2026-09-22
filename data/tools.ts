import type { Tool, ToolNote } from "@/lib/types";

export const tools: Tool[] = [
  {
    name: "VS Code",
    category: "Editor",
    url: "https://code.visualstudio.com",
    icon: "code",
    description: "Code editor utama untuk development.",
  },
  {
    name: "GitHub",
    category: "Version Control",
    url: "https://github.com",
    icon: "github",
    description: "Hosting repository dan kolaborasi.",
  },
  {
    name: "Figma",
    category: "Design",
    url: "https://figma.com",
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
    description: "CV terbaru dalam format PDF.",
    type: "File",
    url: "/documents/CV-Firdaus-Ramdan.pdf",
  },
];