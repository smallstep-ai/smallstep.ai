/* Hallmark · macrostructure: Stat-Led · tone: serious/professional · anchor hue: warm orange */

import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MisalHero } from "@/components/misal/misal-hero";
import { MisalLinksGrid } from "@/components/misal/misal-links-grid";
import { MisalStatsGrid } from "@/components/misal/misal-stats-grid";
import { MisalTrySection } from "@/components/misal/misal-try-section";

export default function MisalPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white">
      <div className="bg-gradient-to-b from-orange/5 to-white pb-16 sm:pb-20">
        <SiteHeader />
        <Container className="pt-16 sm:pt-24">
          <MisalHero />
        </Container>
      </div>
      <Container className="space-y-20 py-20 sm:space-y-24 sm:py-24">
        <MisalTrySection />
        <MisalStatsGrid />
        <MisalLinksGrid />
      </Container>
      <SiteFooter />
    </main>
  );
}
