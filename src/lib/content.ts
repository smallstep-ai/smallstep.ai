import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFrontmatter } from "@/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content");
const MARKDOWN_EXTENSION_REGEX = /\.(md|mdx)$/;

function parseFile(filePath: string, section: "blog" | "pages", slug: string, urlPath: string): Post {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  if (!frontmatter.title) {
    throw new Error(`Missing required frontmatter field "title" in ${filePath}`);
  }

  return {
    slug,
    path: urlPath,
    frontmatter,
    content,
    readingTime: readingTime(content).text,
    section,
  };
}

function getMarkdownFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getMarkdownFiles(entryPath);
    }

    return MARKDOWN_EXTENSION_REGEX.test(entry.name) ? [entryPath] : [];
  });
}

export function getMakingMisalPage() {
  const filePath = path.join(CONTENT_DIR, "pages", "making-misal.mdx");
  return parseFile(filePath, "pages", "making-misal", "/making-misal");
}

export function getBlogPosts() {
  const dir = path.join(CONTENT_DIR, "blog");

  return getMarkdownFiles(dir)
    .map((filePath) => {
      const relativePath = path.relative(dir, filePath).replace(MARKDOWN_EXTENSION_REGEX, "");
      const slug = relativePath.split(path.sep).join("/");
      return parseFile(filePath, "blog", slug, `/blog/${slug}`);
    })
    .sort((a, b) => String(b.frontmatter.date ?? "").localeCompare(String(a.frontmatter.date ?? "")));
}

export function getBlogPost(slug: string) {
  const blogDir = path.join(CONTENT_DIR, "blog");
  const candidates = [path.join(blogDir, `${slug}.md`), path.join(blogDir, `${slug}.mdx`)];
  const filePath = candidates.find((candidate) => fs.existsSync(candidate));

  if (!filePath) {
    return null;
  }

  return parseFile(filePath, "blog", slug, `/blog/${slug}`);
}
