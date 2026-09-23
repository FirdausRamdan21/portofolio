import { Mail } from "lucide-react";
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
    <footer className="relative mt-24 overflow-hidden">
      {/* Wave divider ke base */}
      <div className="absolute inset-x-0 -top-px">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-12 w-full text-abyss-950"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Deep gradient body */}
      <div className="relative bg-gradient-to-b from-abyss-900 via-abyss-950 to-black">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-abyss-500/15 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 pt-20 pb-10 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-semibold tracking-wide text-foam-50">{profile.name}<span className="text-coral-400">.</span></p>
            <p className="text-sm text-foam-300">{profile.role}</p>
          </div>

          <div className="flex gap-3">
            {profile.contacts.email && (
              <a
                href={`mailto:${profile.contacts.email}`}
                aria-label="Email"
                className="rounded-full border border-abyss-700/40 bg-abyss-900/50 p-2 text-foam-300 backdrop-blur-sm transition-all hover:border-abyss-500/60 hover:bg-abyss-800/60 hover:text-abyss-300"
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
                    className="rounded-full border border-abyss-700/40 bg-abyss-900/50 p-2 text-foam-300 backdrop-blur-sm transition-all hover:border-abyss-500/60 hover:bg-abyss-800/60 hover:text-abyss-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
            )}
          </div>
        </div>

        <div className="relative border-t border-abyss-700/20 py-4 text-center text-xs text-foam-500">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}