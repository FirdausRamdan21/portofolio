export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "layout" | "server" | "chart" | "video";
};

export type Skill = {
  name: string;
  category: "Language" | "Framework" | "Database" | "Tool" | "Soft Skill";
  level?: "Beginner" | "Intermediate" | "Advanced";
  progress?: number;
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
   summary: string;      
  languages: Language[];
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
  documentation: string[];
  tech: string[];
  learned: string[];
  date: string;
  category: "Web" | "Data" | "UI" | "Other";
  github: string;
  live: string;
  featured: boolean;
  pinned?: boolean;
};

export type Activity = {
  id: string;
  slug: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  image?: string;
  documentation: string[];
  activities: string[];
  learned: string[];
  startDate: string;
  endDate?: string;
  skills: string[];
  type: "School" | "Extracurricular" | "Outside" | "Digital";
  pinned?: boolean;
  url: string;
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

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export type Language = {
  name: string;
  level: "Native" | "Fluent" | "Intermediate" | "Basic";
};