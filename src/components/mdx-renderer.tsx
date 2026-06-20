import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

const mdxComponents = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1 className={cn("font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl", className)} {...props} />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className={cn("mt-12 font-display text-3xl font-bold tracking-[-0.03em] text-navy", className)} {...props} />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className={cn("mt-10 font-display text-2xl font-semibold text-navy", className)} {...props} />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className={cn("text-base leading-8 text-muted", className)} {...props} />
  ),
  a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a className={cn("font-medium text-orange underline underline-offset-4 transition hover:text-orange/80", className)} {...props} />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className={cn("font-semibold text-ink", className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("list-disc space-y-3 pl-6 text-base leading-8 text-muted", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className={cn("list-decimal space-y-3 pl-6 text-base leading-8 text-muted", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => <li className={cn("pl-1", className)} {...props} />,
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className={cn("border-l-4 border-orange/30 pl-6 italic text-muted", className)} {...props} />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className={cn("my-10 border-hairline", className)} {...props} />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code className={cn("rounded bg-black/5 px-1.5 py-0.5 font-mono text-sm text-ink", className)} {...props} />
  ),
  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className={cn("overflow-x-auto rounded-2xl bg-ink p-5 text-sm text-white", className)} {...props} />
  ),
};

export function MDXRenderer({ source }: { source: string }) {
  return (
    <div className="max-w-none space-y-6">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
      />
    </div>
  );
}
