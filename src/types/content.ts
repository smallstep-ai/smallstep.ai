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
