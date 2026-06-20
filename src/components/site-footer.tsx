import Link from "next/link";
import { Container } from "@/components/container";

const footerLinks = [
  { href: "https://www.linkedin.com/company/smallstep-ai/", label: "LinkedIn" },
  { href: "https://x.com/smallstepai", label: "Twitter" },
  { href: "mailto:hello@smallstep.ai", label: "hello@smallstep.ai" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-10">
      <Container className="flex flex-col gap-4 text-sm text-caption sm:flex-row sm:items-center sm:justify-between">
        <p>© smallstep.ai 2023</p>
        <div className="flex flex-wrap items-center gap-4 sm:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-orange"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
