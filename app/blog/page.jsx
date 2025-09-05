import Link from "next/link";
import Image from "next/image";
import { getAllPostsMeta } from "../../lib/posts";
export const metadata = { title: "Blog — Your Company" };
export default function BlogPage() {
  const posts = getAllPostsMeta();
  return (
    <section className="py-14 bg-slate-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight">News & Insights</h1>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.slug} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              {p.cover ? (<Image src={p.cover} alt={p.title} width={1200} height={480} className="w-full h-40 object-cover" />) : (<div className="w-full h-40 bg-slate-200" />)}
              <div className="p-6">
                <h3 className="font-semibold"><Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link></h3>
                {p.excerpt && <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>}
                {p.date && <p className="mt-2 text-xs text-slate-500">{new Date(p.date).toLocaleDateString()}</p>}
              </div>
            </article>
          ))}
          {posts.length === 0 && (<p className="text-slate-600">No posts yet. Add some in <code>content/posts</code> or via <code>/admin</code>.</p>)}
        </div>
      </div>
    </section>
  );
}
