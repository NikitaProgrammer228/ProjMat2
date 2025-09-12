import Image from "next/image";
import { getAllSlugs, getPostBySlug } from "../../../lib/posts";
export async function generateStaticParams() { const slugs = getAllSlugs(); return slugs.map(slug => ({ slug })); }
export const dynamic = 'force-dynamic';
export async function generateMetadata({ params }) { const { meta } = await getPostBySlug(params.slug).catch(() => ({ meta: null })); return { title: meta ? `${meta.title} — Blog` : "Post — Blog", description: meta?.excerpt || "Blog post" }; }
export default async function PostPage({ params }) {
  const { meta, contentHtml } = await getPostBySlug(params.slug);
  return (
    <article className="py-14">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
        {meta.date && <p className="mt-2 text-sm text-slate-500">{new Date(meta.date).toLocaleDateString()}</p>}
        {meta.cover && (<div className="mt-6"><Image src={meta.cover} alt={meta.title} width={1200} height={600} className="rounded-2xl border border-slate-200" /></div>)}
        <div className="prose prose-slate mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </article>
  );
}
