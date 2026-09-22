"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Activities", href: "/activities" },
  { label: "Inventory", href: "/inventory" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-abyss-700/30 bg-abyss-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="bg-gradient-to-r from-abyss-300 to-abyss-500 bg-clip-text text-lg font-bold text-transparent"
        >
          Firdaus Ramdan
        </Link>
        <ul className="flex gap-4 overflow-x-auto text-sm md:gap-6">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-1 transition-colors",
                    active
                      ? "text-foam-50"
                      : "text-foam-300 hover:text-abyss-300"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-[2px] left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-abyss-300 to-abyss-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}