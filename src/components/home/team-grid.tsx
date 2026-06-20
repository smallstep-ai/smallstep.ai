"use client";

import Image from "next/image";
import { FadeUp } from "@/components/home/fade-up";
import { teamMembers, teamSection } from "@/lib/home-data";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function TeamGrid() {
  const [founder, ...contributors] = teamMembers;

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="text-center">
        <FadeUp as="div" delay={100}>
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-wider text-teal">
            Founder
          </p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl lg:text-5xl">
            Meet the brains behind
          </h2>
        </FadeUp>
        <div className="mt-10 flex justify-center">
          <FadeUp as="div" delay={200} className="w-full max-w-[280px] sm:max-w-[320px]">
            <div className="group overflow-hidden rounded-[20px] transition duration-300 ease-out hover:-translate-y-1">
              <Image
                src={founder.image}
                alt={founder.name}
                width={480}
                height={640}
                sizes="(max-width: 640px) 280px, 320px"
                className="aspect-[3/4] w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5">
              <h3 className="font-display text-2xl font-bold text-navy">{founder.name}</h3>
              <p className="mt-1 text-base text-muted">{founder.role}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-hairline text-offblack transition hover:-translate-y-0.5 hover:bg-teal hover:text-white"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                )}
                {founder.x && (
                  <a
                    href={founder.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on X`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-hairline text-offblack transition hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                  >
                    <XIcon className="h-[18px] w-[18px]" />
                  </a>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section>
        <FadeUp as="div" delay={100} className="mb-10 text-center">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-wider text-teal">
            {teamSection.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl lg:text-5xl">
            {teamSection.title}
          </h2>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {contributors.map((member, index) => (
            <FadeUp
              key={member.name}
              as="div"
              delay={Math.min((index + 1) * 100, 700)}
              className="group text-center transition duration-300 ease-out hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="aspect-square w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-display text-base font-semibold text-navy">{member.name}</h3>
                <p className="mt-0.5 text-sm text-muted">{member.role}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
