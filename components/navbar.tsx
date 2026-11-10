"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/inventory" },
  { label: "Experience & History", href: "/history" },
  { label: "Activities", href: "/activities" },
  { label: "About / CV", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-abyss-800/80 bg-abyss-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-bold tracking-tight text-foam-50 transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 text-xs font-black text-white shadow-md shadow-sky-500/20">
            FR
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-foam-50 group-hover:text-sky-400 transition-colors">
              {profile.name}
            </span>
            <span className="text-[10px] font-medium text-foam-500 tracking-wide">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                    active
                      ? "text-sky-300 font-semibold bg-sky-500/10"
                      : "text-foam-300 hover:text-foam-50 hover:bg-abyss-900/60"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-sky-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Action Button (Desktop) */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-all hover:border-sky-400 hover:bg-sky-500/20"
          >
            Hire Me <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-abyss-700/60 bg-abyss-900/80 p-2 text-foam-200 hover:bg-abyss-800 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[59px] bottom-0 z-40 flex flex-col bg-abyss-950/98 backdrop-blur-2xl md:hidden">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-foam-500">
              Navigasi Menu
            </p>
            <ul className="mt-3 space-y-1">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-sky-500/15 text-sky-300 font-semibold"
                          : "text-foam-200 hover:bg-abyss-900/80 hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 border-t border-abyss-800/80 pt-6">
              <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-foam-500">
                Akses Dokumen & Kontak
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href={profile.cvUrl}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl border border-abyss-700/60 bg-abyss-900/80 px-4 py-2.5 text-xs font-semibold text-foam-100 hover:bg-abyss-800"
                >
                  <FileText className="h-4 w-4 text-sky-400" /> Unduh CV
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-semibold text-abyss-950 hover:bg-sky-400"
                >
                  Hubungi <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Footer Info */}
          <div className="border-t border-abyss-800/80 bg-abyss-900/60 p-4 text-center text-xs text-foam-500">
            {profile.name} &middot; {profile.location}
          </div>
        </div>
      )}
    </nav>
  );
}
