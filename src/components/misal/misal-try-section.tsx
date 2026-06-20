"use client";

import { misalTrySection } from "@/lib/misal-data";

export function MisalTrySection() {
  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
      <iframe
        src="https://tally.so/embed/m67N5e?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="320"
        frameBorder="0"
        title="Try our Misal"
        className="rounded-2xl"
      />

      <div className="space-y-5">
        <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
          {misalTrySection.title}
        </h2>
        <ul className="space-y-4 text-lg leading-8 text-muted">
          {misalTrySection.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
