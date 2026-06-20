"use client";

import { Card, CardBody } from "@heroui/react";
import { misalStats } from "@/lib/misal-data";

export function MisalStatsGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {misalStats.map((item) => (
        <Card key={item.label} className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
          <CardBody className="space-y-2 p-8">
            <p className="font-display text-5xl font-bold tracking-[-0.05em] text-navy">{item.value}</p>
            <p className="text-lg text-muted">{item.label}</p>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
