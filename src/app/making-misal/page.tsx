import type { Metadata } from "next";
import { Container } from "@/components/container";
import { MDXRenderer } from "@/components/mdx-renderer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getMakingMisalPage } from "@/lib/content";

export function generateMetadata(): Metadata {
  const page = getMakingMisalPage();
  const description = page.frontmatter.description ?? page.frontmatter.summary;

  return {
    title: page.frontmatter.title,
    description,
    openGraph: page.frontmatter.cover
      ? {
          title: page.frontmatter.title,
          description,
          images: [page.frontmatter.cover],
        }
      : undefined,
  };
}

export default function MakingMisalPage() {
  const page = getMakingMisalPage();

  return (
    <main>
      <SiteHeader />
      <Container className="py-20">
        <article className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-4 text-center">
            <h1 className="font-display text-5xl font-bold tracking-[-0.05em] text-navy sm:text-6xl">
              {page.frontmatter.title}
            </h1>
            <p className="text-lg leading-8 text-muted">{page.frontmatter.summary}</p>
          </header>
          <MDXRenderer source={page.content} />
        </article>
      </Container>
      <SiteFooter />
    </main>
  );
}
