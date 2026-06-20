"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { homeHero } from "@/lib/home-data";

export function HomeHero() {
  return (
    <section className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className="order-2 space-y-5 text-center lg:order-1 lg:text-left">
        <h1 className="font-display text-4xl font-bold tracking-[-0.05em] text-navy sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {homeHero.title}
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:mx-0">{homeHero.description}</p>
        <Button as={Link} href={homeHero.ctaHref} radius="full" className="bg-orange px-8 text-base font-semibold text-white">
          {homeHero.ctaLabel}
        </Button>
      </div>
      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-none">
          <Image
            src={homeHero.image}
            alt="Smallstep AI hero illustration"
            width={1474}
            height={640}
            priority
            sizes="(max-width: 1024px) 280px, 50vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
