import type { Metadata } from "next";

const BASE_URL = "https://firdausramdan.vercel.app";
const SITE_NAME = "Firdaus Ramdan";

export const SITE = {
  url: BASE_URL,
  name: SITE_NAME,
  description:
    "Portfolio Firdaus Ramdan — Software Engineering Student & Aspiring Data Analyst. Rekayasa Perangkat Lunak, SMKN 8 Jakarta.",
  locale: "id_ID",
  twitter: "@mr_north",
};

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? "/images/og-default.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE.locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} — Portfolio`,
    template: `%s`,
  },
  description: SITE.description,
  keywords: [
    "Firdaus Ramdan",
    "Firdaus Ramdan portfolio",
    "SMKN 8 Jakarta",
    "Rekayasa Perangkat Lunak",
    "Software Engineer Jakarta",
    "Web Developer Jakarta",
    "Next.js Developer",
    "Laravel Developer",
    "Data Analyst",
    "MR_North",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};