import { ExternalLinkCard } from "@/components/external-link-card";
import { misalLinks } from "@/lib/misal-data";

export function MisalLinksGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-2">
      {misalLinks.map((item) => (
        <ExternalLinkCard key={item.title} {...item} />
      ))}
    </section>
  );
}
