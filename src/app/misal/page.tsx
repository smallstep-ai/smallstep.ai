import Image from "next/image";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MisalHero } from "@/components/misal/misal-hero";
import { MisalLinksGrid } from "@/components/misal/misal-links-grid";
import { MisalStatsGrid } from "@/components/misal/misal-stats-grid";

export default function MisalPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_45%)]">
      <SiteHeader />
      <Container className="space-y-16 py-16 sm:py-20">
        <MisalHero />
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
          <Image
            src="/images/misal/7PuDqtkAui8aKVAttqppGTzNw.jpeg"
            alt="MISAL visual"
            width={1600}
            height={900}
            className="h-auto w-full"
          />
        </div>
        <MisalStatsGrid />
        <MisalLinksGrid />
      </Container>
      <SiteFooter />
    </main>
  );
}
