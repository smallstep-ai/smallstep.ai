import { misalStats } from "@/lib/misal-data";

export function MisalStatsGrid() {
  return (
    <section className="space-y-8">
      <h2 className="text-center font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
        Key features
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {misalStats.map((item, i) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-2xl bg-orange/[0.05] px-6 py-5 sm:px-8 sm:py-6"
          >
            <span className="mt-0.5 shrink-0 font-sans text-xl font-bold leading-none text-orange/40 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-lg font-bold leading-snug text-navy sm:text-xl">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
