"use client";

import { Card, CardBody } from "@heroui/react";
import { misalStats } from "@/lib/misal-data";

export function MisalStatsGrid() {
  return (
    <section className="space-y-8">
      <h2 className="text-center font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
        Key features
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {misalStats.map((item) => (
          <Card
            key={item.title}
            className="rounded-[var(--radius-card)] border border-hairline bg-white/90 shadow-[var(--shadow-card)]"
          >
            <CardBody className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy sm:text-3xl">
                {item.title}
              </h3>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
