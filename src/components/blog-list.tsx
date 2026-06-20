"use client";

import { Card, CardBody } from "@heroui/react";
import Link from "next/link";
import type { Post } from "@/types/content";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Link key={post.path} href={post.frontmatter.slug === "making-misal" ? "/making-misal" : post.path}>
          <Card className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
            <CardBody className="space-y-2 p-6">
              <p className="text-sm text-caption">
                {post.frontmatter.date} · {post.readingTime}
              </p>
              <h2 className="font-display text-3xl font-bold text-navy">{post.frontmatter.title}</h2>
              <p className="text-base leading-7 text-muted">{post.frontmatter.summary}</p>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}
