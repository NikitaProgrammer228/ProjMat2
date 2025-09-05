import Image from "next/image";
import LogoCarousel from "../components/LogoCarousel";

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <Image src="/hero.jpg" alt="Security operations background" fill className="object-cover opacity-20" priority />
        <div className="container mx-auto px-4">
          <div className="relative py-20 md:py-28">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Local Focus — Global Reach</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-700">Enterprise security & life safety systems. Design, deploy, and support at scale.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-sky-600 text-white px-6 py-3 font-medium shadow hover:bg-sky-700">Get a Quote</a>
              <a href="/about" className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-50">How we work</a>
            </div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
            <p className="mt-3 text-slate-600">Tell us about your sites and timelines. We'll respond within one business day.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>📞 <a className="hover:underline" href="tel:+10000000000">+1 (000) 000-0000</a></li>
              <li>✉️ <a className="hover:underline" href="mailto:hello@example.com">hello@example.com</a></li>
              <li>📍 100 Main St, City, ST</li>
            </ul>
          </div>
          <form className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm" action="https://formspree.io/f/your-id" method="POST">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block" htmlFor="name"><span className="text-sm">Name</span><input id="name" name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"/></label>
              <label className="block" htmlFor="email"><span className="text-sm">Email</span><input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"/></label>
              <label className="block sm:col-span-2" htmlFor="company"><span className="text-sm">Company</span><input id="company" name="company" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"/></label>
              <label className="block sm:col-span-2" htmlFor="message"><span className="text-sm">Message</span><textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"></textarea></label>
            </div>
            <button className="mt-4 inline-flex items-center rounded-xl bg-sky-600 text-white px-6 py-3 font-medium shadow hover:bg-sky-700" type="submit">Send</button>
            <p className="mt-2 text-xs text-slate-500">By submitting, you agree to our <a className="underline" href="#">privacy policy</a>.</p>
          </form>
        </div>
      </section>
    </>
  );
}
