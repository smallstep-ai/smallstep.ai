"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { misalSpotlight } from "@/lib/home-data";

export function MisalSpotlight() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className="space-y-4 lg:order-2">
        <p className="font-body text-lg font-semibold text-orange">{misalSpotlight.eyebrow}</p>
        <h2 className="font-display text-4xl font-bold tracking-[-0.05em] text-navy sm:text-5xl lg:text-6xl">
          {misalSpotlight.subtitle}
        </h2>
        <p className="max-w-2xl text-lg leading-8 text-muted">{misalSpotlight.description}</p>
        <Button as={Link} href={misalSpotlight.ctaHref} radius="full" className="bg-orange px-8 text-base font-semibold text-white">
          {misalSpotlight.ctaLabel}
        </Button>
      </div>
      <div className="overflow-hidden rounded-2xl lg:order-1">
        <Image
          src={misalSpotlight.image}
          alt="MISAL spotlight visual"
          width={1474}
          height={640}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
