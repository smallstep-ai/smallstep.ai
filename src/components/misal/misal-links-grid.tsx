"use client";

import Link from "next/link";
import { Card, CardBody } from "@heroui/react";
import { misalLinks } from "@/lib/misal-data";

export function MisalLinksGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {misalLinks.map((item) => {
        const isExternal = /^https?:\/\//.test(item.href);
        const linkProps = isExternal
          ? { target: "_blank", rel: "noopener noreferrer" as const }
          : {};

        return (
          <Card
            key={item.title}
            className="h-full rounded-[var(--radius-card)] border border-hairline bg-white/90 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            <CardBody className="flex h-full flex-col gap-4 p-6">
              <Link
                href={item.href}
                {...linkProps}
                className="font-display text-2xl font-bold text-ink transition hover:text-orange sm:text-3xl"
              >
                {item.title}
              </Link>

              {item.description ? (
                <p className="text-base leading-7 text-muted">
                  {item.description.split(item.ctaLabel ?? "").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && item.ctaLabel ? (
                        <Link
                          href={item.href}
                          {...linkProps}
                          className="font-semibold text-orange hover:underline"
                        >
                          {item.ctaLabel}
                        </Link>
                      ) : null}
                    </span>
                  ))}
                </p>
              ) : null}

              {item.bullets ? (
                <ul className="space-y-2 text-base leading-7 text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {item.ctaLabel && item.bullets ? (
                <div className="mt-auto pt-2">
                  <Link
                    href={item.href}
                    {...linkProps}
                    className="text-sm font-semibold text-orange hover:underline"
                  >
                    {item.ctaLabel}
                  </Link>
                </div>
              ) : null}
            </CardBody>
          </Card>
        );
      })}
    </section>
  );
}
