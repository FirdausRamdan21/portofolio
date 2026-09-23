import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TiktokIcon,
} from "@/components/brand-icons";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";

export const metadata = buildMetadata({
  title: "Contact — Firdaus Ramdan",
  description:
    "Hubungi Firdaus Ramdan via email, GitHub, LinkedIn, atau media sosial.",
  path: "/contact",
});

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const items: {
  key: string;
  label: string;
  icon: IconType;
  href?: string;
}[] = [
  {
    key: "email",
    label: "Email",
    icon: Mail,
    href: profile.contacts.email
      ? `mailto:${profile.contacts.email}`
      : undefined,
  },
  {
    key: "github",
    label: "GitHub",
    icon: GithubIcon,
    href: profile.contacts.github,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: profile.contacts.linkedin,
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: YoutubeIcon,
    href: profile.contacts.youtube,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <SectionTitle
        title="Contact"
        subtitle="Terbuka untuk kolaborasi, project, atau sekadar ngobrol."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ key, label, icon: Icon, href }) => {
          if (!href) return null;
          return (
            <a
              key={key}
              href={href}
              target={key === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-abyss-700/40 bg-abyss-900/60 p-4 backdrop-blur-sm transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70"
            >
              <Icon className="h-5 w-5 text-abyss-300" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-foam-100">{label}</p>
                <p className="truncate text-xs text-foam-500">{href}</p>
              </div>
            </a>
          );
        })}
      </div>

      {profile.contacts.tiktok && (
        <a
          href={profile.contacts.tiktok}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-abyss-700/40 bg-abyss-900/60 p-4 text-sm font-medium text-foam-100 backdrop-blur-sm transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/70"
        >
          <TiktokIcon className="h-4 w-4" />
          TikTok — {profile.alias}
        </a>
      )}
    </div>
  );
}