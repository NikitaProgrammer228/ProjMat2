import Image from "next/image";
import LogoCarousel from "../components/LogoCarousel";

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative overflow-hidden min-h-[360px] sm:min-h-[420px] md:min-h-[520px]">
        <Image 
          src="/images/Main-Picture.png" 
          alt="Security operations background" 
          fill 
          className="object-cover object-top md:object-contain md:object-center opacity-30 md:opacity-40" 
          priority
          sizes="100vw"
        />
        {/* Mobile overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
        <div className="container mx-auto px-4">
          <div className="relative py-20 md:py-28">
            <p className="mt-20 max-w-2xl text-xl font-semibold text-white md:text-slate-700 drop-shadow-lg">Custom Solutions for Real Needs<br />From perimeter protection to smart networks — we make it simple.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-sky-600 text-white px-6 py-3 font-medium shadow hover:bg-sky-700">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* All Tech Needs Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              All Your Tech Needs Covered
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              One company for all your security, AV, network, and solar projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/Camers.jpeg" 
                  alt="FENS technology solutions" 
                  width={600} 
                  height={400}
                  className="h-auto object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Fens for Every Task
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Why hire four different companies when you can hire one? We manage your entire project, from installing security cameras to setting up your office for video calls. Our ability to make custom parts means we always find the best solution.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Total Security</h4>
                    <p className="text-sm text-slate-600">We install cameras, alarms, and systems to control who comes and goes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Great Audio & Video</h4>
                    <p className="text-sm text-slate-600">We set up everything from meeting rooms to large event screens.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Powerful Connections</h4>
                    <p className="text-sm text-slate-600">We make sure your internet is fast and your power is reliable with solar.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Custom-Built Quality</h4>
                    <p className="text-sm text-slate-600">We create any metal parts needed for a clean and strong installation.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a href="/services" className="inline-flex items-center rounded-xl bg-sky-600 text-white px-6 py-3 font-medium shadow hover:bg-sky-700 transition-colors">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
