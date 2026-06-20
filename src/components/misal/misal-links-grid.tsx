import Image from "next/image";
import Link from "next/link";
import { misalLinks } from "@/lib/misal-data";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex aspect-[16/9] w-full items-center justify-center rounded-2xl bg-neutral-50">
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}

export function MisalLinksGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {misalLinks.map((item) => {
        const isExternal = /^https?:\/\//.test(item.href);
        const linkProps = isExternal
          ? { target: "_blank", rel: "noopener noreferrer" as const }
          : {};

        return (
          <div key={item.title} className="group flex flex-col">
            {item.image ? (
              item.image.endsWith("-logo.png") ? (
                <LogoImage src={item.image} alt={item.imageAlt ?? ""} />
              ) : (
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    width={600}
                    height={340}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )
            ) : null}

            <div className="flex flex-1 flex-col pt-4">
              <Link
                href={item.href}
                {...linkProps}
                className="font-display text-xl font-bold text-navy transition-colors hover:text-orange sm:text-2xl"
              >
                {item.title}
              </Link>

              {item.description ? (
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description
                    .split(item.ctaLabel ?? "")
                    .map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && item.ctaLabel ? (
                          <Link
                            href={item.href}
                            {...linkProps}
                            className="font-semibold text-orange hover:underline"
                          >
                            {item.ctaLabel}
                          </Link>
                        ) : null}
                      </span>
                    ))}
                </p>
              ) : null}

              {item.bullets ? (
                <ul className="mt-2 space-y-2 text-sm leading-6 text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {item.ctaLabel && item.bullets ? (
                <div className="mt-4">
                  <Link
                    href={item.href}
                    {...linkProps}
                    className="text-sm font-semibold text-orange hover:underline"
                  >
                    {item.ctaLabel}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
}
