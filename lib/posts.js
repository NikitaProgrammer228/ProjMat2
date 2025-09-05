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
  const fullPath = path.join(postsDirectory, slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return { meta: { slug, title: data.title || slug, date: data.date ? new Date(data.date).toISOString() : null, excerpt: data.excerpt || "", cover: data.cover || null }, contentHtml };
}
