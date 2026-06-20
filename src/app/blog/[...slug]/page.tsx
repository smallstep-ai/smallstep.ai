import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { MDXRenderer } from "@/components/mdx-renderer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug: slugParts } = await params;
  const post = getBlogPost(slugParts.join("/"));

  if (!post) {
    return {};
  }

  const description = post.frontmatter.description ?? post.frontmatter.summary;

  return {
    title: post.frontmatter.title,
    description,
    openGraph: post.frontmatter.cover
      ? {
          title: post.frontmatter.title,
          description,
          images: [post.frontmatter.cover],
        }
      : undefined,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <Container className="py-20">
        <article className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-3 text-center">
            <p className="text-sm text-caption">
              {post.frontmatter.date} · {post.readingTime}
            </p>
            <h1 className="font-display text-5xl font-bold tracking-[-0.05em] text-navy sm:text-6xl">
              {post.frontmatter.title}
            </h1>
            <p className="text-lg text-muted">{post.frontmatter.summary}</p>
          </header>
          <MDXRenderer source={post.content} />
        </article>
      </Container>
      <SiteFooter />
    </main>
  );
}
