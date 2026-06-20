"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody } from "@heroui/react";
import { blogPromo } from "@/lib/home-data";

export function BlogPromo() {
  return (
    <section>
      <Card className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
        <CardBody className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:p-10">
          <div className="overflow-hidden rounded-[16px] border border-hairline bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_60%)]">
            <Image src={blogPromo.image} alt="Smallstep AI blog promo" width={4268} height={4268} className="h-auto w-full rounded-[16px]" />
          </div>
          <div className="space-y-4">
            <p className="font-body text-lg font-semibold text-orange">{blogPromo.eyebrow}</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">{blogPromo.title}</h2>
            <p className="max-w-2xl text-lg leading-8 text-muted">{blogPromo.description}</p>
            <Button as={Link} href={blogPromo.ctaHref} radius="full" className="bg-ink px-8 text-base font-semibold text-white">
              {blogPromo.ctaLabel}
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
