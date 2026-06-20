"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FadeUp } from "@/components/home/fade-up";
import { misalSpotlight } from "@/lib/home-data";

export function MisalSpotlight() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className="space-y-4 lg:order-2">
        <FadeUp as="p" delay={100} className="font-body text-lg font-semibold text-orange">
          {misalSpotlight.eyebrow}
        </FadeUp>
        <FadeUp as="h2" delay={200} className="font-display text-4xl font-bold tracking-[-0.05em] text-navy sm:text-5xl lg:text-6xl">
          {misalSpotlight.subtitle}
        </FadeUp>
        <FadeUp as="p" delay={300} className="max-w-2xl text-lg leading-8 text-muted">
          {misalSpotlight.description}
        </FadeUp>
        <FadeUp as="div" delay={400}>
          <Button as={Link} href={misalSpotlight.ctaHref} radius="full" className="bg-orange px-8 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            {misalSpotlight.ctaLabel}
          </Button>
        </FadeUp>
      </div>
      <FadeUp as="div" delay={150} className="overflow-hidden rounded-2xl transition duration-300 ease-out hover:-translate-y-1 lg:order-1">
        <Image
          src={misalSpotlight.image}
          alt="MISAL spotlight visual"
          width={1474}
          height={640}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-auto w-full transition duration-300 ease-out hover:scale-[1.02]"
        />
      </FadeUp>
    </section>
  );
}
