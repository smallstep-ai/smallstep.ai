"use client";

import Link from "next/link";
import { misalLinks } from "@/lib/misal-data";

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 4H4v8h8V10M8 8l4-4M8 4h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MisalLinksGrid() {
  return (
    <section className="grid gap-6 sm:gap-8 md:grid-cols-3">
      {misalLinks.map((item) => {
        const isExternal = /^https?:\/\//.test(item.href);
        const linkProps = isExternal
          ? { target: "_blank", rel: "noopener noreferrer" as const }
          : {};

        return (
          <article
            key={item.title}
            className="group flex h-full flex-col rounded-[var(--radius-card)] border border-hairline bg-surface p-6 shadow-[var(--shadow-card)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 sm:p-8"
          >
            <Link
              href={item.href}
              {...linkProps}
              className="group/link inline-flex items-center gap-2 rounded-sm font-display text-xl font-semibold tracking-tight text-navy transition-colors duration-200 hover:text-orange focus-visible:ring-2 focus-visible:ring-orange/40 focus-visible:outline-none sm:text-2xl"
            >
              {item.title}
              {isExternal ? (
                <ExternalIcon className="opacity-60 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              ) : null}
            </Link>

            {item.description ? (
              <p className="mt-4 text-base leading-7 text-muted">
                {item.description
                  .split(item.ctaLabel ?? "")
                  .map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && item.ctaLabel ? (
                        <Link
                          href={item.href}
                          {...linkProps}
                          className="font-semibold text-orange underline-offset-2 transition-colors hover:text-navy hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-orange/40 focus-visible:outline-none"
                        >
                          {item.ctaLabel}
                        </Link>
                      ) : null}
                    </span>
                  ))}
              </p>
            ) : null}

            {item.bullets ? (
              <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {item.ctaLabel && item.bullets ? (
              <div className="mt-auto pt-6">
                <Link
                  href={item.href}
                  {...linkProps}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-colors duration-200 hover:text-navy focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-orange/40 focus-visible:outline-none"
                >
                  {item.ctaLabel}
                  {isExternal ? <ExternalIcon className="opacity-80" /> : null}
                </Link>
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
