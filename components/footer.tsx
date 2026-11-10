import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TiktokIcon,
} from "./brand-icons";

const socials = [
  { href: profile.contacts.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.contacts.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.contacts.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: profile.contacts.tiktok, label: "TikTok", Icon: TiktokIcon },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-abyss-800/80 bg-abyss-950/80">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500 text-xs font-black text-abyss-950">
                FR
              </span>
              <p className="font-bold tracking-tight text-foam-50 text-base">
                {profile.name}
              </p>
            </div>
            <p className="mt-1 text-xs text-foam-400 max-w-md">
              {profile.role} &middot; Rekayasa Perangkat Lunak SMKN 8 Jakarta. Berfokus pada pengembangan sistem web fungsional dan arsitektur basis data.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3">
            {profile.contacts.email && (
              <a
                href={`mailto:${profile.contacts.email}`}
                aria-label="Email"
                className="rounded-xl border border-abyss-800 bg-abyss-900/60 p-2.5 text-foam-300 transition-all hover:border-sky-500/40 hover:bg-abyss-800 hover:text-sky-300"
                title="Kirim Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {socials.map(
              ({ href, label, Icon }) =>
                href && (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-xl border border-abyss-800 bg-abyss-900/60 p-2.5 text-foam-300 transition-all hover:border-sky-500/40 hover:bg-abyss-800 hover:text-sky-300"
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-abyss-800/80 pt-6 text-xs text-foam-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. Portofolio Rekayasa Perangkat Lunak.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-sky-400 transition-colors">
              Curriculum Vitae
            </Link>
            <Link href="/inventory" className="hover:text-sky-400 transition-colors">
              Proyek
            </Link>
            <Link href="/contact" className="hover:text-sky-400 transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
