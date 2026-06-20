import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-10">
      <Container className="flex flex-col gap-2 text-sm text-caption sm:flex-row sm:items-center sm:justify-between">
        <p>© Smallstep AI</p>
        <p>Built with Marathi-first ambition.</p>
      </Container>
    </footer>
  );
}
