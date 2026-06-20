"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (item: (typeof siteConfig.nav)[number], isActive: boolean) => {
    const color =
      item.label === "Misal"
        ? "text-orange"
        : item.label === "Blog"
          ? "text-teal"
          : "text-offblack";
    return cn(
      "text-base font-medium transition hover:opacity-80",
      isActive ? "text-ink underline decoration-2 underline-offset-4" : color
    );
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex items-center justify-between rounded-[var(--radius-pill)] border border-white/60 bg-white/90 px-4 py-3 shadow-[var(--shadow-nav)] backdrop-blur-md md:px-5">
          <SiteLogo />
          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(item, isActive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-offblack md:hidden"
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-[var(--radius-card)] border border-white/60 bg-white/95 p-4 shadow-[var(--shadow-card)] backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass(item, isActive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
