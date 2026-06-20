import Image from "next/image";

export function MisalHero() {
  return (
    <section className="space-y-8 text-center">
      <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl lg:text-6xl">
        Unleash the Power of Misal
      </h1>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-offblack sm:text-xl">
        smallstep.ai brings to you a revolutionary LLM specifically designed for
        Marathi
      </p>
      <div className="mx-auto overflow-hidden rounded-2xl max-w-2xl">
        <Image
          src="/images/misal/QvHe4KQKeF4SdlMfkZm4ZCghTk.png"
          alt="Misal Marathi LLM hero graphic"
          width={1474}
          height={640}
          sizes="(max-width: 768px) 100vw, 42rem"
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
