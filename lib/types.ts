export type Skill = {
  name: string;
  category: "Language" | "Framework" | "Database" | "Tool";
  level?: "Beginner" | "Intermediate" | "Advanced";
};

export type Profile = {
  name: string;
  alias: string;
  role: string;
  tagline: string;
  location: string;
  photo: string;
  about: string;
  skills: Skill[];
  contacts: {
    email: string;
    github: string;
    linkedin: string;
    tiktok?: string;
    youtube?: string;
  };
  cvUrl: string;
};

export type HistoryItem = {
  id: string;
  title: string;
  institution: string;
  major?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images?: string[];
  tech: string[];
  learned: string[];
  date: string;
  category: "Web" | "Data" | "UI" | "Other";
  github?: string;
  live?: string;
  featured: boolean;
};

export type Activity = {
  id: string;
  slug: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  image?: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  type: "School" | "Extracurricular" | "Outside" | "Digital";
};

export type Tool = {
  name: string;
  category: string;
  url: string;
  icon: string;
  description?: string;
};

export type ToolNote = {
  id: string;
  title: string;
  description: string;
  type: "Note" | "File" | "Info";
  url?: string;
};