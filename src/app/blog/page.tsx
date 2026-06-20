import { BlogList } from "@/components/blog-list";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBlogPosts } from "@/lib/content";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main>
      <SiteHeader />
      <Container className="space-y-10 py-20">
        <div className="space-y-3 text-center">
          <h1 className="font-display text-5xl font-bold tracking-[-0.05em] text-navy sm:text-6xl">Blog</h1>
          <p className="text-lg text-muted">Notes, launches, and research from Smallstep AI.</p>
        </div>
        <BlogList posts={posts} />
      </Container>
      <SiteFooter />
    </main>
  );
}
