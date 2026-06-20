"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Container } from "@/components/container";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <Container>
        <div className="flex items-center justify-between rounded-[var(--radius-pill)] border border-white/60 bg-white/90 px-4 py-3 shadow-[var(--shadow-nav)] backdrop-blur-md md:px-5"
        >
          <SiteLogo />
          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-offblack transition hover:text-orange"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            className="flex h-10 w-10 items-center justify-center rounded-full text-offblack md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            >
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
