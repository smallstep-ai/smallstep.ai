"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody } from "@heroui/react";
import { FadeUp } from "@/components/home/fade-up";
import { blogPromo } from "@/lib/home-data";

export function BlogPromo() {
  return (
    <section>
      <Card className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
        <CardBody className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:p-10">
          <FadeUp as="div" delay={100} className="overflow-hidden rounded-[16px] border border-hairline bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_60%)]">
            <Image src={blogPromo.image} alt="Smallstep AI blog promo" width={4268} height={4268} className="h-auto w-full rounded-[16px] transition duration-300 ease-out hover:scale-[1.02]" />
          </FadeUp>
          <div className="space-y-4">
            <FadeUp as="p" delay={200} className="font-body text-lg font-semibold text-orange">{blogPromo.eyebrow}</FadeUp>
            <FadeUp as="h2" delay={300} className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">{blogPromo.title}</FadeUp>
            <FadeUp as="p" delay={400} className="max-w-2xl text-lg leading-8 text-muted">{blogPromo.description}</FadeUp>
            <FadeUp as="div" delay={500}>
              <Button as={Link} href={blogPromo.ctaHref} radius="full" className="bg-ink px-8 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                {blogPromo.ctaLabel}
              </Button>
            </FadeUp>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
