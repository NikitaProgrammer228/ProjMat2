import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");
export function getAllSlugs() { if (!fs.existsSync(postsDirectory)) return []; return fs.readdirSync(postsDirectory).filter(f=>f.endsWith(".md")).map(f=>f.replace(/\.md$/, "")); }
export function getAllPostsMeta() {
  const slugs = getAllSlugs();
  const items = slugs.map(slug => {
    const fullPath = path.join(postsDirectory, slug + ".md");
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContents);
    return { slug, title: data.title || slug, date: data.date ? new Date(data.date).toISOString() : null, excerpt: data.excerpt || "", cover: data.cover || null };
  });
  return items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}
export async function getPostBySlug(slug) {
  // Try a few filename candidates to be resilient to encoding issues
  const candidates = [];
  // incoming slug
  candidates.push(slug);
  // decoded URI component (if slug came from URL-encoded path)
  try { candidates.push(decodeURIComponent(slug)); } catch {}

  // If none of the candidates exist, try case-insensitive match against existing files
  let filePath = null;
  for (const candidate of candidates) {
    const attempt = path.join(postsDirectory, candidate + ".md");
    if (fs.existsSync(attempt)) {
      filePath = attempt;
      break;
    }
  }
  if (!filePath) {
    const files = fs.existsSync(postsDirectory) ? fs.readdirSync(postsDirectory) : [];
    const match = files.find((f) => f.toLowerCase() === (slug + ".md").toLowerCase());
    if (match) {
      filePath = path.join(postsDirectory, match);
    }
  }
  if (!filePath) {
    throw new Error("POST_NOT_FOUND");
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  const finalSlug = path.basename(filePath).replace(/\.md$/, "");
  return { meta: { slug: finalSlug, title: data.title || finalSlug, date: data.date ? new Date(data.date).toISOString() : null, excerpt: data.excerpt || "", cover: data.cover || null }, contentHtml };
}
