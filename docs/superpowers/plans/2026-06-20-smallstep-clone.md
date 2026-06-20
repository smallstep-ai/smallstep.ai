# Smallstep.ai Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build static Next.js clone of `smallstep.ai` for `/`, `/misal`, `/making-misal`, `/blog`, and blog detail routes with local assets, MDX content, Tailwind-only styling, preserved fonts/colors/theme, and prebuilt UI primitives where practical.

**Architecture:** App Router Next.js app with static pages and MDX-backed content. Tailwind CSS is only styling system, with theme tokens defined in `src/app/globals.css` using Tailwind v4 `@theme`. Shared site shell, content loader, and route-specific sections stay modular so home, MISAL, and article/blog routes can evolve independently.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, gray-matter, next-mdx-remote, remark-gfm, rehype-slug, reading-time, HeroUI, shadcn/ui (selective), Playwright

---

### Task 1: Bootstrap Next.js app and Tailwind toolchain

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `components.json`
- Create: `src/app/layout.tsx`
- Create: `src/app/globals.css`
- Create: `src/app/not-found.tsx`
- Create: `src/app/sitemap.ts`
- Create: `src/lib/fonts.ts`
- Create: `src/lib/site-config.ts`
- Modify: `.gitignore`
- Test: root build and lint commands

- [ ] **Step 1: Write bootstrap files**

`package.json`
```json
{
  "name": "smallstep-ai",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@heroui/react": "^2.8.5",
    "@mdx-js/react": "^3.1.1",
    "@next/mdx": "^16.2.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gray-matter": "^4.0.3",
    "next": "16.2.1",
    "next-mdx-remote": "^6.0.0",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "reading-time": "^1.5.0",
    "rehype-slug": "^6.0.0",
    "remark-gfm": "^4.0.1",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@playwright/test": "^1.53.2",
    "@tailwindcss/postcss": "^4.1.11",
    "@types/node": "^24.0.10",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "eslint": "^9.30.1",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4.1.11",
    "typescript": "^5.8.3"
  }
}
```

`tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/*.mdx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

`next.config.ts`
```ts
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
```

`postcss.config.mjs`
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

`eslint.config.mjs`
```js
import nextVitals from "eslint-config-next/core-web-vitals";

export default [...nextVitals];
```

`src/lib/fonts.ts`
```ts
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});
```

`src/app/layout.tsx`
```tsx
import type { Metadata } from "next";
import "./globals.css";
import { inter, generalSans } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${generalSans.variable}`}>
      <body className="min-h-screen bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
```

`src/app/not-found.tsx`
```tsx
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="text-4xl font-bold text-navy">Page not found</h1>
      </div>
    </main>
  );
}
```

`src/app/sitemap.ts`
```ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/misal", "/making-misal", "/blog"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
```

`src/lib/site-config.ts`
```ts
export const siteConfig = {
  title: "Smallstep AI",
  description: "Building AI app stack and leading Marathi LLM experiences.",
  url: "https://smallstep.ai",
  nav: [
    { href: "/", label: "Home" },
    { href: "/misal", label: "Misal" },
    { href: "/blog", label: "Blog" },
  ],
};
```

- [ ] **Step 2: Add Tailwind-only global theme entrypoint**

`src/app/globals.css`
```css
@import "tailwindcss";

@theme {
  --color-orange: #fe911c;
  --color-teal: #2ca9a8;
  --color-navy: #001122;
  --color-ink: #000000;
  --color-offblack: #2a2b2b;
  --color-surface: #ffffff;
  --color-muted: #666666;
  --color-caption: #888888;
  --color-hairline: #e6e6e6;

  --font-sans: var(--font-inter);
  --font-display: var(--font-inter);
  --font-body: var(--font-general-sans);

  --radius-pill: 30px;
  --radius-card: 20px;
  --radius-sm: 8px;

  --shadow-nav: 0px 0.6px 0.6px -1.25px rgba(186, 186, 186, 0.447), 0px 2.29px 2.29px -2.5px rgba(186, 186, 186, 0.392), 0px 10px 10px -3.75px rgba(186, 186, 186, 0.157);
  --shadow-card: 0px 0.71px 0.71px -0.63px rgba(0, 0, 0, 0.15), 0px 1.81px 1.81px -1.25px rgba(0, 0, 0, 0.14), 0px 3.62px 3.62px -1.88px rgba(0, 0, 0, 0.12), 0px 6.87px 6.87px -2.5px rgba(0, 0, 0, 0.11), 0px 13.65px 13.65px -3.13px rgba(0, 0, 0, 0.09), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
}
```

- [ ] **Step 3: Update `.gitignore` if missing generated files**

Append if absent:
```gitignore
next-env.d.ts
playwright/.cache
```

- [ ] **Step 4: Install dependencies and generate Next files**

Run:
```bash
npm install
```
Expected: installs Next/Tailwind/MDX deps, creates `package-lock.json`

Run:
```bash
printf '/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n' > next-env.d.ts
```
Expected: `next-env.d.ts` exists

- [ ] **Step 5: Run bootstrap verification**

Run:
```bash
npm run typecheck
npm run lint
npm run build
```
Expected: all three succeed

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs components.json src/app src/lib .gitignore next-env.d.ts
git commit -m "feat: bootstrap nextjs app with tailwind and mdx"
```

### Task 2: Migrate local assets, homepage inventory, and font files

**Files:**
- Create: `public/images/shared/*`
- Create: `public/images/home/*`
- Create: `public/images/misal/*`
- Create: `public/images/making-misal/*`
- Create: `public/fonts/GeneralSans-Medium.woff2`
- Create: `public/fonts/GeneralSans-Semibold.woff2`
- Create: `scripts/download-home-assets.py`
- Create: `scripts/copy-design-assets.mjs`
- Modify: `design/assets/manifest.json`
- Test: local asset existence and no missing references

- [ ] **Step 1: Write asset copy script**

`scripts/copy-design-assets.mjs`
```js
import fs from "node:fs";
import path from "node:path";

const copies = [
  ["design/assets/shared", "public/images/shared"],
  ["design/assets/misal", "public/images/misal"],
  ["design/assets/making-misal", "public/images/making-misal"],
];

for (const [from, to] of copies) {
  fs.mkdirSync(to, { recursive: true });
  for (const file of fs.readdirSync(from)) {
    fs.copyFileSync(path.join(from, file), path.join(to, file));
  }
}

console.log("copied known route assets");
```

- [ ] **Step 2: Write homepage download script for remaining images**

`scripts/download-home-assets.py`
```python
from pathlib import Path
from urllib.request import urlopen, Request

assets = {
    "QvHe4KQKeF4SdlMfkZm4ZCghTk.png": "https://framerusercontent.com/images/QvHe4KQKeF4SdlMfkZm4ZCghTk.png",
    "cm62IqDlxSYtaLaLmTfJGnJz0C4.png": "https://framerusercontent.com/images/cm62IqDlxSYtaLaLmTfJGnJz0C4.png",
    "oP2yQYkBKtcqHMd3f5YjScXycKE.png": "https://framerusercontent.com/images/oP2yQYkBKtcqHMd3f5YjScXycKE.png",
    "UlG7lLA2mjPOj4AvUx8wFtZc24.jpeg": "https://framerusercontent.com/images/UlG7lLA2mjPOj4AvUx8wFtZc24.jpeg",
    "VyecrwKMqQCd5h4CE2nDPINgJbM.jpg": "https://framerusercontent.com/images/VyecrwKMqQCd5h4CE2nDPINgJbM.jpg",
    "t0CRvusbvD9Ne02lvEgEp9AzTs.jpg": "https://framerusercontent.com/images/t0CRvusbvD9Ne02lvEgEp9AzTs.jpg",
    "ISaGvV5ll1j9ZOxH80K8nKiUQ.jpg": "https://framerusercontent.com/images/ISaGvV5ll1j9ZOxH80K8nKiUQ.jpg",
    "gBHLHzPoYHd6qKq64EPMu0VGjFE.png": "https://framerusercontent.com/images/gBHLHzPoYHd6qKq64EPMu0VGjFE.png",
    "km9cVU6eBDKPpPZ7c6pVaBudfQY.png": "https://framerusercontent.com/assets/km9cVU6eBDKPpPZ7c6pVaBudfQY.png"
}

dest = Path("public/images/home")
dest.mkdir(parents=True, exist_ok=True)
headers = {"User-Agent": "Mozilla/5.0"}

for name, url in assets.items():
    req = Request(url, headers=headers)
    with urlopen(req) as response:
        dest.joinpath(name).write_bytes(response.read())
        print(name)
```

- [ ] **Step 3: Copy route assets and download homepage assets**

Run:
```bash
node scripts/copy-design-assets.mjs
python3 scripts/download-home-assets.py
```
Expected:
- `public/images/shared/*` populated
- `public/images/misal/*` populated
- `public/images/making-misal/*` populated
- `public/images/home/*` populated with 9 files

- [ ] **Step 4: Add General Sans font files**

Place files:
```text
public/fonts/GeneralSans-Medium.woff2
public/fonts/GeneralSans-Semibold.woff2
```
Source: legal local font files from user or existing licensed source. If unavailable, stop and ask user for font files before styling verification.

- [ ] **Step 5: Verify local assets exist**

Run:
```bash
find public/images -type f | sort
find public/fonts -type f | sort
```
Expected: lists shared, home, misal, making-misal assets and 2 font files

- [ ] **Step 6: Commit**

```bash
git add public/images public/fonts scripts design/assets/manifest.json
git commit -m "feat: migrate local image and font assets"
```

### Task 3: Build shared shell and reusable section primitives

**Files:**
- Create: `src/lib/utils.ts`
- Create: `src/components/container.tsx`
- Create: `src/components/site-logo.tsx`
- Create: `src/components/site-header.tsx`
- Create: `src/components/site-footer.tsx`
- Create: `src/components/section-heading.tsx`
- Create: `src/components/external-link-card.tsx`
- Modify: `src/app/layout.tsx`
- Test: shell renders on placeholder pages

- [ ] **Step 1: Add utility helper**

`src/lib/utils.ts`
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create shared primitives**

`src/components/container.tsx`
```tsx
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12", className)} {...props} />;
}
```

`src/components/site-logo.tsx`
```tsx
import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/images/shared/f0HEEzRQxCUtKyThUP60hvJiShI.png" alt="Smallstep AI" width={38} height={38} />
      <span className="font-display text-xl font-semibold text-ink">smallstep.ai</span>
    </Link>
  );
}
```

`src/components/site-header.tsx`
```tsx
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Container } from "@/components/container";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <Container>
        <Navbar maxWidth="full" className="rounded-[var(--radius-pill)] border border-white/60 bg-white/90 px-4 shadow-[var(--shadow-nav)] backdrop-blur-md">
          <NavbarBrand><SiteLogo /></NavbarBrand>
          <NavbarContent justify="end" className="gap-6">
            {siteConfig.nav.map((item) => (
              <NavbarItem key={item.href}>
                <Link href={item.href} className="text-base font-medium text-offblack transition hover:text-orange">
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </Navbar>
      </Container>
    </header>
  );
}
```

`src/components/site-footer.tsx`
```tsx
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
```

`src/components/section-heading.tsx`
```tsx
import { cn } from "@/lib/utils";

export function SectionHeading({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl lg:text-6xl", className)} {...props} />;
}
```

`src/components/external-link-card.tsx`
```tsx
import Link from "next/link";
import { Card, CardBody } from "@heroui/react";

export function ExternalLinkCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <Card className="h-full rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">
        <CardBody className="space-y-2 p-6">
          <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
          <p className="text-base leading-7 text-muted">{description}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
```

- [ ] **Step 3: Wire shell into root layout placeholders**

Update `src/app/layout.tsx` body:
```tsx
<body className="min-h-screen bg-white text-ink antialiased">
  {children}
</body>
```
Keep header/footer in page layouts, not root, so future alternate routes stay flexible.

- [ ] **Step 4: Create temporary route placeholders to test shell**

`src/app/page.tsx`
```tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="py-24" />
      <SiteFooter />
    </main>
  );
}
```

Create same minimal structure for:
- `src/app/misal/page.tsx`
- `src/app/making-misal/page.tsx`
- `src/app/blog/page.tsx`

- [ ] **Step 5: Verify shell routes render**

Run:
```bash
npm run build
```
Expected: static routes build successfully

- [ ] **Step 6: Commit**

```bash
git add src/components src/lib/utils.ts src/app/page.tsx src/app/misal/page.tsx src/app/making-misal/page.tsx src/app/blog/page.tsx src/app/layout.tsx
git commit -m "feat: add shared site shell and primitives"
```

### Task 4: Port minimal MDX content system and blog routes

**Files:**
- Create: `src/types/content.ts`
- Create: `src/lib/content.ts`
- Create: `src/components/mdx-renderer.tsx`
- Create: `src/components/blog-list.tsx`
- Create: `content/pages/making-misal.mdx`
- Create: `content/blog/misal-launch.mdx`
- Modify: `src/app/making-misal/page.tsx`
- Modify: `src/app/blog/page.tsx`
- Create: `src/app/blog/[...slug]/page.tsx`
- Test: content loading, static params, blog index, article render

- [ ] **Step 1: Create content types**

`src/types/content.ts`
```ts
export interface PostFrontmatter {
  title: string;
  date?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  cover?: string;
  slug?: string;
}

export interface Post {
  slug: string;
  path: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
  section: "blog" | "pages";
}
```

- [ ] **Step 2: Create simplified content loader adapted from sibling project**

`src/lib/content.ts`
```ts
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
  return fs.readdirSync(dir)
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
  if (!filePath) return null;
  return parseFile(filePath, "blog", slug, `/blog/${slug}`);
}
```

- [ ] **Step 3: Add MDX renderer and list components**

`src/components/mdx-renderer.tsx`
```tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export function MDXRenderer({ source }: { source: string }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-navy prose-p:font-body prose-p:text-muted prose-a:text-orange prose-strong:text-ink">
      <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }} />
    </div>
  );
}
```

`src/components/blog-list.tsx`
```tsx
import Link from "next/link";
import { Card, CardBody } from "@heroui/react";
import type { Post } from "@/types/content";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Link key={post.path} href={post.path}>
          <Card className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
            <CardBody className="space-y-2 p-6">
              <p className="text-sm text-caption">{post.frontmatter.date} · {post.readingTime}</p>
              <h2 className="font-display text-3xl font-bold text-navy">{post.frontmatter.title}</h2>
              <p className="text-base leading-7 text-muted">{post.frontmatter.summary}</p>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create initial content files**

`content/pages/making-misal.mdx`
```mdx
---
title: "Introducing Misal 7B & 1B"
description: "Smallstep AI introduces Misal, leading Marathi LLM family."
summary: "Technical deep dive into tokenizer, pretraining, finetuning, inference, and evaluation."
cover: "/images/making-misal/1neDfMk18fMbYVdHvaMGjVi7nY.jpg"
slug: "making-misal"
---

# Introducing Misal 7B & 1B

Replace this body with migrated exact article content from live route.
```

`content/blog/misal-launch.mdx`
```mdx
---
title: "Introducing Misal 7B & 1B"
date: "2026-06-20"
summary: "Leading Marathi LLM release notes and technical overview."
description: "Launch article for Misal."
tags: ["misal", "marathi", "llm"]
cover: "/images/making-misal/1neDfMk18fMbYVdHvaMGjVi7nY.jpg"
slug: "misal-launch"
---

# Introducing Misal 7B & 1B

Replace this body with migrated exact article or canonical excerpt.
```

- [ ] **Step 5: Wire routes**

`src/app/making-misal/page.tsx`
```tsx
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MDXRenderer } from "@/components/mdx-renderer";
import { getMakingMisalPage } from "@/lib/content";

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
```

`src/app/blog/page.tsx`
```tsx
import { Container } from "@/components/container";
import { BlogList } from "@/components/blog-list";
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
```

`src/app/blog/[...slug]/page.tsx`
```tsx
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { MDXRenderer } from "@/components/mdx-renderer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: [post.slug] }));
}

export default function BlogDetailPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/");
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main>
      <SiteHeader />
      <Container className="py-20">
        <article className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-3 text-center">
            <p className="text-sm text-caption">{post.frontmatter.date} · {post.readingTime}</p>
            <h1 className="font-display text-5xl font-bold tracking-[-0.05em] text-navy sm:text-6xl">{post.frontmatter.title}</h1>
            <p className="text-lg text-muted">{post.frontmatter.summary}</p>
          </header>
          <MDXRenderer source={post.content} />
        </article>
      </Container>
      <SiteFooter />
    </main>
  );
}
```

- [ ] **Step 6: Verify content routes**

Run:
```bash
npm run build
```
Expected: `/making-misal`, `/blog`, `/blog/misal-launch` static-generate successfully

- [ ] **Step 7: Commit**

```bash
git add src/types/content.ts src/lib/content.ts src/components/mdx-renderer.tsx src/components/blog-list.tsx content src/app/making-misal/page.tsx src/app/blog/page.tsx src/app/blog/[...slug]/page.tsx
git commit -m "feat: add mdx content pipeline and blog routes"
```

### Task 5: Implement `/misal` route with bento cards and external links

**Files:**
- Create: `src/lib/misal-data.ts`
- Create: `src/components/misal/misal-hero.tsx`
- Create: `src/components/misal/misal-stats-grid.tsx`
- Create: `src/components/misal/misal-links-grid.tsx`
- Modify: `src/app/misal/page.tsx`
- Test: route build and visual layout

- [ ] **Step 1: Add MISAL page data**

`src/lib/misal-data.ts`
```ts
export const misalStats = [
  { value: "2B+", label: "Marathi tokens" },
  { value: "200K", label: "Instructions" },
  { value: "7B", label: "Flagship variant" },
  { value: "1B", label: "Compact variant" },
];

export const misalLinks = [
  {
    title: "Blog",
    description: "Read how Misal 7B and 1B were built.",
    href: "/making-misal",
  },
  {
    title: "Colab Notebook",
    description: "Try inference and examples in notebook form.",
    href: "https://colab.research.google.com/",
  },
  {
    title: "Hugging Face",
    description: "Explore model weights and experiments.",
    href: "https://huggingface.co/",
  },
  {
    title: "Socials",
    description: "Follow team updates and launches.",
    href: "https://x.com/",
  },
];
```

- [ ] **Step 2: Create MISAL components**

`src/components/misal/misal-hero.tsx`
```tsx
export function MisalHero() {
  return (
    <section className="space-y-6 text-center">
      <p className="font-body text-lg font-semibold uppercase tracking-[0.2em] text-orange">Introducing</p>
      <h1 className="font-display text-6xl font-bold tracking-[-0.05em] text-orange sm:text-7xl lg:text-[120px] lg:leading-[1]">
        MISAL
      </h1>
      <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl lg:text-6xl">
        Unleash power of Marathi LLMs
      </h2>
      <p className="mx-auto max-w-3xl text-lg leading-8 text-muted">
        Leading Marathi language model family by Smallstep AI for reasoning, paraphrasing, reading comprehension, and sentiment.
      </p>
    </section>
  );
}
```

`src/components/misal/misal-stats-grid.tsx`
```tsx
import { Card, CardBody } from "@heroui/react";
import { misalStats } from "@/lib/misal-data";

export function MisalStatsGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {misalStats.map((item) => (
        <Card key={item.label} className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
          <CardBody className="space-y-2 p-8">
            <p className="font-display text-5xl font-bold tracking-[-0.05em] text-navy">{item.value}</p>
            <p className="text-lg text-muted">{item.label}</p>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
```

`src/components/misal/misal-links-grid.tsx`
```tsx
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
```

- [ ] **Step 3: Wire `/misal` page**

`src/app/misal/page.tsx`
```tsx
import Image from "next/image";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MisalHero } from "@/components/misal/misal-hero";
import { MisalStatsGrid } from "@/components/misal/misal-stats-grid";
import { MisalLinksGrid } from "@/components/misal/misal-links-grid";

export default function MisalPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_45%)]">
      <SiteHeader />
      <Container className="space-y-16 py-16 sm:py-20">
        <MisalHero />
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
          <Image src="/images/misal/7PuDqtkAui8aKVAttqppGTzNw.jpeg" alt="MISAL visual" width={1600} height={900} className="h-auto w-full" />
        </div>
        <MisalStatsGrid />
        <MisalLinksGrid />
      </Container>
      <SiteFooter />
    </main>
  );
}
```

- [ ] **Step 4: Replace placeholder text with exact live copy**

Update text in:
- `src/components/misal/misal-hero.tsx`
- `src/lib/misal-data.ts`

Source: live `/misal` route and migrated article references. Exact copy only.

- [ ] **Step 5: Verify MISAL route**

Run:
```bash
npm run build
```
Expected: `/misal` builds and uses only local image paths

- [ ] **Step 6: Commit**

```bash
git add src/lib/misal-data.ts src/components/misal src/app/misal/page.tsx
git commit -m "feat: implement misal landing page"
```

### Task 6: Implement homepage with hero, spotlight, team cards, and blog promo

**Files:**
- Create: `src/lib/home-data.ts`
- Create: `src/components/home/home-hero.tsx`
- Create: `src/components/home/misal-spotlight.tsx`
- Create: `src/components/home/team-grid.tsx`
- Create: `src/components/home/blog-promo.tsx`
- Modify: `src/app/page.tsx`
- Test: route build and local image references

- [ ] **Step 1: Add homepage data module**

`src/lib/home-data.ts`
```ts
export const teamMembers = [
  { name: "Sagar Sarkale", role: "Founder", image: "/images/home/oP2yQYkBKtcqHMd3f5YjScXycKE.png" },
  { name: "Pinaki Babar", role: "Early Contributor", image: "/images/home/UlG7lLA2mjPOj4AvUx8wFtZc24.jpeg" },
  { name: "Shraddha Sarkale", role: "Early Contributor", image: "/images/home/VyecrwKMqQCd5h4CE2nDPINgJbM.jpg" },
  { name: "Prasad Mane", role: "Early Contributor", image: "/images/home/t0CRvusbvD9Ne02lvEgEp9AzTs.jpg" },
];
```

- [ ] **Step 2: Create homepage sections**

`src/components/home/home-hero.tsx`
```tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

export function HomeHero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <h1 className="font-display text-5xl font-bold tracking-[-0.06em] text-navy sm:text-6xl lg:text-7xl">
          Your Dreams, Our AI App Stack
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Smallstep AI builds products, experiences, and Marathi-first intelligence with careful design and practical research.
        </p>
        <Button as={Link} href="/misal" radius="full" className="bg-orange px-8 text-base font-semibold text-white">
          Get Started
        </Button>
      </div>
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
        <Image src="/images/home/QvHe4KQKeF4SdlMfkZm4ZCghTk.png" alt="Smallstep AI hero" width={1200} height={900} className="h-auto w-full" />
      </div>
    </section>
  );
}
```

`src/components/home/misal-spotlight.tsx`
```tsx
import Link from "next/link";
import { Card, CardBody, Button } from "@heroui/react";
import { SectionHeading } from "@/components/section-heading";

export function MisalSpotlight() {
  return (
    <Card className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
      <CardBody className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
        <div className="space-y-4">
          <p className="font-body text-lg font-semibold text-orange">Introducing MISAL</p>
          <SectionHeading className="text-4xl sm:text-5xl">Leading Marathi LLM</SectionHeading>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            Smallstep AI&apos;s Marathi language model family pushes accessible open research and practical language capability.
          </p>
        </div>
        <Button as={Link} href="/misal" radius="full" className="bg-orange px-8 text-base font-semibold text-white">
          Explore MISAL
        </Button>
      </CardBody>
    </Card>
  );
}
```

`src/components/home/team-grid.tsx`
```tsx
import Image from "next/image";
import { Card, CardBody } from "@heroui/react";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers } from "@/lib/home-data";

export function TeamGrid() {
  return (
    <section className="space-y-8">
      <SectionHeading>Meet the brains behind</SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <Card key={member.name} className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
            <CardBody className="space-y-5 p-5">
              <div className="overflow-hidden rounded-[16px]">
                <Image src={member.image} alt={member.name} width={600} height={600} className="aspect-square w-full object-cover" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">{member.name}</h3>
                <p className="text-base text-muted">{member.role}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

`src/components/home/blog-promo.tsx`
```tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Button } from "@heroui/react";

export function BlogPromo() {
  return (
    <Card className="rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-card)]">
      <CardBody className="grid gap-8 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-10">
        <div className="overflow-hidden rounded-[16px]">
          <Image src="/images/home/cm62IqDlxSYtaLaLmTfJGnJz0C4.png" alt="Blog promo" width={1200} height={900} className="h-auto w-full" />
        </div>
        <div className="space-y-4">
          <p className="font-body text-lg font-semibold text-orange">Blog</p>
          <h3 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy">Read how we build</h3>
          <p className="text-lg leading-8 text-muted">Technical notes, launches, and product thinking from Smallstep AI.</p>
          <Button as={Link} href="/blog" radius="full" className="bg-ink px-8 text-base font-semibold text-white">
            Visit blog
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
```

- [ ] **Step 3: Wire homepage**

`src/app/page.tsx`
```tsx
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BlogPromo } from "@/components/home/blog-promo";
import { HomeHero } from "@/components/home/home-hero";
import { MisalSpotlight } from "@/components/home/misal-spotlight";
import { TeamGrid } from "@/components/home/team-grid";

export default function HomePage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#fff1e5,_#ffffff_45%)]">
      <SiteHeader />
      <Container className="space-y-16 py-16 sm:space-y-20 sm:py-20">
        <HomeHero />
        <MisalSpotlight />
        <BlogPromo />
        <TeamGrid />
      </Container>
      <SiteFooter />
    </main>
  );
}
```

- [ ] **Step 4: Replace placeholder copy with exact homepage text**

Update exact live copy in:
- `src/components/home/home-hero.tsx`
- `src/components/home/misal-spotlight.tsx`
- `src/components/home/blog-promo.tsx`
- `src/lib/home-data.ts`

Source: live homepage capture and screenshot notes.

- [ ] **Step 5: Verify homepage**

Run:
```bash
npm run build
```
Expected: homepage builds and references only `/images/...` local assets

- [ ] **Step 6: Commit**

```bash
git add src/lib/home-data.ts src/components/home src/app/page.tsx
git commit -m "feat: implement homepage sections"
```

### Task 7: Replace placeholder content with exact migrated site content and add Playwright smoke checks

**Files:**
- Modify: `content/pages/making-misal.mdx`
- Modify: `content/blog/misal-launch.mdx`
- Create: `playwright.config.ts`
- Create: `tests/routes.spec.ts`
- Test: build, Playwright route smoke, asset grep

- [ ] **Step 1: Migrate exact article and blog content**

Replace placeholder bodies in:
- `content/pages/making-misal.mdx`
- `content/blog/misal-launch.mdx`

Use exact headings, paragraphs, image references, and links from live content. Convert all remote image URLs to local `/images/making-misal/...` paths.

- [ ] **Step 2: Add Playwright config**

`playwright.config.ts`
```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
  },
});
```

- [ ] **Step 3: Add route smoke test**

`tests/routes.spec.ts`
```ts
import { test, expect } from "@playwright/test";

const routes = ["/", "/misal", "/making-misal", "/blog", "/blog/misal-launch"];

for (const route of routes) {
  test(`route ${route} renders`, async ({ page }) => {
    await page.goto(route);
    await expect(page).toHaveTitle(/Smallstep|Misal|Blog/i);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("img").first()).toBeVisible();
  });
}
```

- [ ] **Step 4: Verify no remote Framer assets remain in app source**

Run:
```bash
rg -n "framerusercontent|https://smallstep.ai" src content public
```
Expected: no matches in `src/` or `content/`; only acceptable matches in source manifests/docs if any

- [ ] **Step 5: Run final verification**

Run:
```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```
Expected:
- typecheck passes
- lint passes
- build passes
- Playwright smoke passes across 5 routes

- [ ] **Step 6: Commit**

```bash
git add content playwright.config.ts tests src
git commit -m "feat: migrate exact content and add route smoke tests"
```

## Self-Review

**Spec coverage:**
- Next.js app bootstrap covered in Task 1
- Tailwind-only theme and fonts covered in Tasks 1-2
- Local assets covered in Task 2
- Shared shell and prebuilt UI usage covered in Task 3
- MDX and blog reuse covered in Task 4
- `/misal` route covered in Task 5
- homepage covered in Task 6
- `/making-misal`, `/blog`, content fidelity, and verification covered in Task 7

**Placeholder scan:**
- Implementation snippets provided for each code-writing step
- Commands and expected outcomes included
- Remaining manual work explicitly scoped to exact content migration and legal font acquisition, both real dependencies rather than placeholders

**Type consistency:**
- `Post`, `PostFrontmatter`, content loader, and route usage align
- Shared component names match referenced imports
- Route paths and content filenames match plan references
