"use client";

import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomeHero } from "@/components/home/home-hero";
import { MisalSpotlight } from "@/components/home/misal-spotlight";
import { TeamGrid } from "@/components/home/team-grid";

export default function HomePage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_45%)]">
      <SiteHeader />
      <Container className="space-y-20 py-16 sm:space-y-28 sm:py-20">
        <HomeHero />
        <MisalSpotlight />
        <TeamGrid />
      </Container>
      <SiteFooter />
    </main>
  );
}
