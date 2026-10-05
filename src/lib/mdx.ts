import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  updated: string;
  author: string;
  readTime: string;
  pillar: string;
  draft: boolean;
  content: string;
  headings: HeadingItem[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(content: string): HeadingItem[] {
  const lines = content.split("\n");
  const headings: HeadingItem[] = [];

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const rawText = match[2].trim();
      const text = rawText.replace(/#+\s*$/, "").trim();
      const id = slugify(text);
      headings.push({ id, text, level });
    }
  }

  return headings;
}

export function getAllBlogPosts(includeDrafts: boolean = false): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = data.slug || fileName.replace(/\.mdx?$/, "");
      const headings = extractHeadings(content);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        category: data.category || "General Legal Insights",
        date: data.date || "2026-10-01",
        updated: data.updated || data.date || "2026-10-01",
        author: data.author || "Advocate Shubham Singh",
        readTime: data.readTime || "5 min read",
        pillar: data.pillar || "criminal-lawyer-delhi",
        draft: Boolean(data.draft),
        content,
        headings,
      };
    });

  const isProd = process.env.NODE_ENV === "production";
  const filteredPosts = posts.filter((post) => {
    if (includeDrafts) return true;
    if (isProd && post.draft) return false;
    return true;
  });

  return filteredPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPostBySlug(slug: string, includeDrafts: boolean = true): BlogPost | null {
  const posts = getAllBlogPosts(includeDrafts);
  return posts.find((post) => post.slug === slug) || null;
}
