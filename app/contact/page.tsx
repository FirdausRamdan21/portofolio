import type { ComponentType, SVGProps } from "react";
import { Mail, MapPin, Send, MessageSquare, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TiktokIcon,
} from "@/components/brand-icons";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";
import {
  CopyEmailButton,
  QuickMessageForm,
} from "@/components/contact-actions";

export const metadata = buildMetadata({
  title: "Kontak & Informasi Komunikasi — Firdaus Ramdan",
  description:
    "Hubungi Firdaus Ramdan via email resmi, GitHub, LinkedIn, atau jaringan profesional lainnya.",
  path: "/contact",
});

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const emailAddress = profile.contacts.email || "firdausramdan.dev@gmail.com";

const channels: {
  key: string;
  label: string;
  value: string;
  icon: IconType;
  href?: string;
}[] = [
  {
    key: "email",
    label: "Email Resmi",
    value: emailAddress,
    icon: Mail,
    href: `mailto:${emailAddress}`,
  },
  {
    key: "linkedin",
    label: "LinkedIn Professional",
    value: "linkedin.com/in/firdaus-ramdan",
    icon: LinkedinIcon,
    href: profile.contacts.linkedin,
  },
  {
    key: "github",
    label: "GitHub Repositories",
    value: "github.com/FirdausRamdan21",
    icon: GithubIcon,
    href: profile.contacts.github,
  },
  {
    key: "youtube",
    label: "YouTube Channel",
    value: "youtube.com/@mr_north",
    icon: YoutubeIcon,
    href: profile.contacts.youtube,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <SectionTitle
        as="h1"
        eyebrow="Komunikasi & Kolaborasi"
        title="Kontak & Kerja Sama"
        subtitle="Terbuka untuk peluang magang (internship), rekrutmen posisi junior developer, kerja sama proyek sistem web, maupun diskusi teknis."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: Direct Contact Information + Quick Composer */}
        <div className="space-y-4 lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map(({ key, label, value, icon: Icon, href }) => {
              if (!href) return null;
              return (
                <div
                  key={key}
                  className="card-glow group flex flex-col justify-between rounded-2xl border border-abyss-800/80 bg-abyss-900/60 p-5 backdrop-blur-sm transition-all hover:border-sky-500/40"
                >
                  <a
                    href={href}
                    target={key === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-start gap-3.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-abyss-800 text-sky-400 transition-colors group-hover:bg-sky-500/15 group-hover:text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-foam-400">
                          {label}
                        </p>
                        <ArrowUpRight className="h-3.5 w-3.5 text-foam-500 transition-colors group-hover:text-sky-400" />
                      </div>
                      <p className="mt-1 truncate text-sm font-bold text-foam-50 transition-colors group-hover:text-sky-300">
                        {value}
                      </p>
                    </div>
                  </a>

                  {key === "email" && (
                    <div className="mt-3 flex justify-end border-t border-abyss-800/70 pt-3">
                      <CopyEmailButton email={emailAddress} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {profile.contacts.tiktok && (
            <a
              href={profile.contacts.tiktok}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-abyss-800/80 bg-abyss-900/40 p-4 text-xs font-semibold text-foam-300 transition-all hover:border-abyss-700 hover:bg-abyss-800/60 hover:text-white"
            >
              <TiktokIcon className="h-4 w-4" />
              <span>Media Edukasi &amp; Konten Digital: TikTok (@mr_north9)</span>
            </a>
          )}

          <QuickMessageForm email={emailAddress} />
        </div>

        {/* Right: Location & Availability Card */}
        <div className="flex flex-col justify-between self-start rounded-2xl border border-abyss-800/80 bg-abyss-900/60 p-6 backdrop-blur-sm">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Status Ketersediaan
            </div>
            <h2 className="text-base font-bold text-foam-50">
              Siap Menerima Tantangan Baru
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-foam-300">
              Berdomisili di Jakarta dan siap bertugas secara On-Site, Hybrid,
              maupun Remote untuk proyek rekayasa perangkat lunak.
            </p>

            <div className="mt-6 space-y-3 border-t border-abyss-800/80 pt-4 text-xs text-foam-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-sky-400" />
                <span>DKI Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 shrink-0 text-sky-400" />
                <span>Waktu Respon Cepat: &lt; 24 Jam</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-abyss-800/80 pt-4">
            <a
              href={`mailto:${emailAddress}?subject=Peluang%20Kolaborasi%20/%20Magang%20-%20Firdaus%20Ramdan`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-3 text-xs font-bold text-abyss-950 shadow-md shadow-sky-500/20 transition-all hover:bg-sky-400"
            >
              <Send className="h-3.5 w-3.5" /> Kirim Pesan Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
