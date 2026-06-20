import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFrontmatter } from "@/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content");

function parseFile(filePath: string, section: "blog" | "pages", slug: string, urlPath: string): Post {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    slug,
    path: urlPath,
    frontmatter,
    content,
    readingTime: readingTime(content).text,
    section,
  };
}

export function getMakingMisalPage() {
  const filePath = path.join(CONTENT_DIR, "pages", "making-misal.mdx");
  return parseFile(filePath, "pages", "making-misal", "/making-misal");
}

export function getBlogPosts() {
  const dir = path.join(CONTENT_DIR, "blog");

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      return parseFile(path.join(dir, file), "blog", slug, `/blog/${slug}`);
    })
    .sort((a, b) => String(b.frontmatter.date ?? "").localeCompare(String(a.frontmatter.date ?? "")));
}

export function getBlogPost(slug: string) {
  const candidates = [
    path.join(CONTENT_DIR, "blog", `${slug}.md`),
    path.join(CONTENT_DIR, "blog", `${slug}.mdx`),
  ];
  const filePath = candidates.find((candidate) => fs.existsSync(candidate));

  if (!filePath) {
    return null;
  }

  return parseFile(filePath, "blog", slug, `/blog/${slug}`);
}
