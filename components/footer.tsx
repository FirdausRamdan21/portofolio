import Link from "next/link";
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
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-gray-500">{profile.role}</p>
        </div>

        <div className="flex gap-3">
          <a
            href={`mailto:${profile.contacts.email}`}
            aria-label="Email"
            className="rounded-full border border-gray-200 bg-white p-2 text-gray-600 transition-colors hover:border-blue-500 hover:text-blue-600"
          >
            <Mail className="h-4 w-4" />
          </a>
          {socials.map(
            ({ href, label, Icon }) =>
              href && (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-gray-200 bg-white p-2 text-gray-600 transition-colors hover:border-blue-500 hover:text-blue-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &
        Tailwind CSS.
      </div>
    </footer>
  );
}