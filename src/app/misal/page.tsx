import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MisalHero } from "@/components/misal/misal-hero";
import { MisalLinksGrid } from "@/components/misal/misal-links-grid";
import { MisalStatsGrid } from "@/components/misal/misal-stats-grid";
import { MisalTrySection } from "@/components/misal/misal-try-section";

export default function MisalPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-[#E17029] via-[#FEAB55] via-[#FCF0C1] to-white pb-16 sm:pb-20">
        <SiteHeader />
        <Container className="pt-16 sm:pt-20">
          <MisalHero />
        </Container>
      </div>
      <Container className="space-y-16 py-16 sm:py-20">
        <MisalTrySection />
        <MisalStatsGrid />
        <MisalLinksGrid />
      </Container>
      <SiteFooter />
    </main>
  );
}
