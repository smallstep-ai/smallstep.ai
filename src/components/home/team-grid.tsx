"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers, teamSection } from "@/lib/home-data";

export function TeamGrid() {
  const [founder, ...contributors] = teamMembers;

  return (
    <section className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <SectionHeading>{teamSection.title}</SectionHeading>
          <p className="font-display text-3xl font-bold text-teal sm:text-4xl">{teamSection.eyebrow}</p>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={teamSection.illustration}
            alt="Smallstep AI team illustration"
            width={1587}
            height={1587}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-5 rounded-2xl bg-white/60 p-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:p-6">
          <div className="overflow-hidden rounded-2xl">
            <Image src={founder.image} alt={founder.name} width={1587} height={2245} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-2">
            <p className="font-body text-lg font-semibold text-orange">Founder</p>
            <h3 className="font-display text-3xl font-bold text-navy sm:text-4xl">{founder.name}</h3>
            <p className="text-lg leading-8 text-muted">{founder.role}</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {contributors.map((member) => (
            <div key={member.name} className="space-y-3">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-display text-xl font-bold text-navy">{member.name}</h3>
                <p className="text-sm leading-6 text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
