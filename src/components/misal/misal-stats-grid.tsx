"use client";

import { misalStats } from "@/lib/misal-data";

export function MisalStatsGrid() {
  return (
    <section className="space-y-10 sm:space-y-12">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-navy sm:text-4xl">
          Key features
        </h2>
        <span
          className="mx-auto mt-4 block h-1 w-12 rounded-full bg-orange"
          aria-hidden="true"
        />
      </div>
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {misalStats.map((item) => (
          <article
            key={item.title}
            className="rounded-[var(--radius-card)] border border-hairline border-t-orange bg-surface p-6 shadow-[var(--shadow-card)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-navy sm:text-2xl">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
