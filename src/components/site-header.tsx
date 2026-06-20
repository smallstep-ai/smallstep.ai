"use client";

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Container } from "@/components/container";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <Container>
        <Navbar
          maxWidth="full"
          className="rounded-[var(--radius-pill)] border border-white/60 bg-white/90 px-4 shadow-[var(--shadow-nav)] backdrop-blur-md"
        >
          <NavbarBrand>
            <SiteLogo />
          </NavbarBrand>
          <NavbarContent justify="end" className="gap-6">
            {siteConfig.nav.map((item) => (
              <NavbarItem key={item.href}>
                <Link href={item.href} className="text-base font-medium text-offblack transition hover:text-orange">
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </Navbar>
      </Container>
    </header>
  );
}
