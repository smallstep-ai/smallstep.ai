import Image from "next/image";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MisalHero } from "@/components/misal/misal-hero";
import { MisalLinksGrid } from "@/components/misal/misal-links-grid";
import { MisalStatsGrid } from "@/components/misal/misal-stats-grid";
import { misalIntro } from "@/lib/misal-data";

export default function MisalPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_45%)]">
      <SiteHeader />
      <Container className="space-y-16 py-16 sm:py-20">
        <MisalHero />
        <section className="grid gap-8 rounded-[var(--radius-card)] border border-hairline bg-white p-8 shadow-[var(--shadow-card)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-10">
          <div className="space-y-5">
            <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">{misalIntro.title}</h2>
            <ul className="space-y-4 text-lg leading-8 text-muted">
              {misalIntro.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[16px] border border-hairline bg-white">
            <Image
              src="/images/misal/7PuDqtkAui8aKVAttqppGTzNw.jpeg"
              alt="Misal model preview"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </section>
        <MisalStatsGrid />
        <MisalLinksGrid />
      </Container>
      <SiteFooter />
    </main>
  );
}
