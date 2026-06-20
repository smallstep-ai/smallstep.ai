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
        <Navbar
          maxWidth="full"
          className="rounded-[var(--radius-pill)] border border-white/60 bg-white/90 px-4 shadow-[var(--shadow-nav)] backdrop-blur-md"
        >
          <NavbarBrand>
            <SiteLogo />
          </NavbarBrand>
          <NavbarContent justify="end" className="gap-6">
            <NavbarItem className="hidden md:flex">
              <div className="flex gap-6">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-offblack transition hover:text-orange"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </NavbarItem>
            <NavbarItem className="flex md:hidden">
              <NavbarMenuToggle className="text-offblack" />
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu className="top-[calc(var(--navbar-height)+1rem)] mt-4 rounded-2xl border border-white/60 bg-white/95 px-4 py-4 shadow-[var(--shadow-nav)] backdrop-blur-md">
            {siteConfig.nav.map((item) => (
              <NavbarMenuItem key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-offblack transition hover:text-orange"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </Container>
    </header>
  );
}
