import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import { baseMetadata, SITE } from "@/lib/seo";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sameAs = [
    profile.contacts.github,
    profile.contacts.linkedin,
    profile.contacts.youtube,
    profile.contacts.tiktok,
  ].filter((v): v is string => Boolean(v));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: profile.name,
        alternateName: profile.alias,
        jobTitle: profile.role,
        description: profile.summary,
        url: SITE.url,
        image: `${SITE.url}${profile.photo}`,
        email: `mailto:${profile.contacts.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jakarta",
          addressCountry: "ID",
        },
        sameAs,
      },
      {
        "@type": "WebSite",
        name: `${SITE.name} — Portfolio`,
        url: SITE.url,
        description: SITE.description,
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <html lang="id" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-abyss-950 focus:shadow-lg"
        >
          Lewati ke konten utama
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
