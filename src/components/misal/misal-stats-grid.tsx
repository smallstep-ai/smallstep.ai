"use client";

import { Card, CardBody } from "@heroui/react";
import { misalStats } from "@/lib/misal-data";

export function MisalStatsGrid() {
  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">Key features</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {misalStats.map((item) => (
          <Card key={item.title} className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
            <CardBody className="space-y-4 p-8">
              <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy">{item.title}</h3>
              <p className="text-base leading-7 text-muted">{item.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
