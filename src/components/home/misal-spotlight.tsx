"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { misalSpotlight } from "@/lib/home-data";

export function MisalSpotlight() {
  return (
    <section className="grid gap-8 rounded-2xl bg-white/60 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10 lg:py-14">
      <div className="space-y-4">
        <p className="font-body text-lg font-semibold text-orange">{misalSpotlight.eyebrow}</p>
        <h2 className="font-display text-6xl font-bold tracking-[-0.05em] text-orange sm:text-7xl lg:text-[120px] lg:leading-[1]">
          {misalSpotlight.title}
        </h2>
        <div className="space-y-3">
          <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl lg:text-5xl">
            {misalSpotlight.subtitle}
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-muted">{misalSpotlight.description}</p>
        </div>
        <Button as={Link} href={misalSpotlight.ctaHref} radius="full" className="bg-orange px-8 text-base font-semibold text-white">
          {misalSpotlight.ctaLabel}
        </Button>
      </div>
      <div className="overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_60%)]">
        <Image
          src={misalSpotlight.image}
          alt="MISAL spotlight visual"
          width={1474}
          height={640}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
