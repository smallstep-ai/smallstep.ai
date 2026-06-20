"use client";

import Link from "next/link";
import { Card, CardBody } from "@heroui/react";

export function ExternalLinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <Card className="h-full rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">
        <CardBody className="space-y-2 p-6">
          <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
          <p className="text-base leading-7 text-muted">{description}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
