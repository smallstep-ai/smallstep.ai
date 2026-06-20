"use client";

import { misalTrySection } from "@/lib/misal-data";

export function MisalTrySection() {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-surface shadow-[var(--shadow-card)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5">
        <div className="border-b border-hairline bg-orange/[0.03] px-6 py-4 sm:px-8 sm:py-5">
          <h2 className="font-display text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            {misalTrySection.title}
          </h2>
        </div>
        <iframe
          src="https://tally.so/embed/m67N5e?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="320"
          frameBorder="0"
          title="Try our Misal"
          className="h-[320px] w-full bg-transparent sm:h-[360px]"
        />
      </div>

      <ul className="space-y-5">
        {misalTrySection.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-[var(--shadow-card)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 sm:p-6"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8.5L6.5 12L13 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="pt-0.5 text-base leading-7 text-muted sm:text-lg">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
