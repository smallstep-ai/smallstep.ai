"use client";

import Image from "next/image";
import { teamMembers, teamSection } from "@/lib/home-data";

export function TeamGrid() {
  const [founder, ...contributors] = teamMembers;

  return (
    <section className="space-y-12">
      <h2 className="text-center font-display text-4xl font-bold tracking-tight text-teal sm:text-5xl">
        {teamSection.title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={founder.image}
            alt={founder.name}
            width={640}
            height={854}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[3/4] w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="font-display text-3xl font-bold text-ink sm:text-4xl">{founder.name}</h3>
          <p className="text-lg text-muted">{founder.role}</p>
          {founder.linkedin && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} on LinkedIn`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-hairline text-offblack transition hover:bg-teal hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {contributors.map((member) => (
          <div key={member.name} className="space-y-3">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={member.image}
                alt={member.name}
                width={640}
                height={640}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-display text-lg font-bold text-navy">{member.name}</h3>
              <p className="text-sm leading-6 text-muted">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
