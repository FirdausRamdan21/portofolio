import { Github, Globe, Linkedin, MapPin, Youtube } from "lucide-react";

import { profile } from "@/data/profile";

export default function CvHeader() {
  const links = [
    {
      label: "github.com/FirdausRamdan21",
      href: profile.contacts.github,
      icon: Github,
    },
    {
      label: "linkedin.com/in/firdaus-ramdan",
      href: profile.contacts.linkedin,
      icon: Linkedin,
    },
    {
      label: "youtube.com/@mr_north",
      href: profile.contacts.youtube,
      icon: Youtube,
    },
  ].filter((link) => link.href);

  return (
    <header className="border-b border-abyss-700/40 pb-6 print:border-b print:border-gray-300">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-abyss-300 print:text-gray-500">
            Curriculum Vitae
          </p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-foam-50 print:text-black md:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-abyss-300 print:text-gray-700">
            {profile.role}
          </p>
        </div>

        <div className="rounded-xl border border-abyss-700/40 bg-abyss-900/40 px-3 py-2 text-xs text-foam-300 print:border-gray-300 print:bg-white print:text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-foam-300 print:text-gray-700">
        {profile.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] print:text-[10px]">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-abyss-700/40 bg-abyss-900/40 px-2.5 py-1 text-foam-300 transition-colors hover:border-abyss-500/60 hover:text-foam-50 print:border-gray-300 print:bg-white print:text-gray-700"
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
          </a>
        ))}

        {profile.contacts.email && (
          <a
            href={`mailto:${profile.contacts.email}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-abyss-700/40 bg-abyss-900/40 px-2.5 py-1 text-foam-300 transition-colors hover:border-abyss-500/60 hover:text-foam-50 print:border-gray-300 print:bg-white print:text-gray-700"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{profile.contacts.email}</span>
          </a>
        )}
      </div>
    </header>
  );
}