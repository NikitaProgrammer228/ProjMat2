"use client";
import Link from "next/link";
import { useState } from "react";
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-900 text-slate-100 text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="tel:+10000000000" className="hover:underline">+1 (000) 000-0000</a>
          <nav className="space-x-6">
            <Link href="/#support" className="hover:underline">Support</Link>
            <Link href="/#login" className="hover:underline">Employee Login</Link>
          </nav>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <img alt="Your Logo" className="h-9 w-9" src="https://dummyimage.com/72x72/0ea5e9/ffffff.png&text=MM" />
              <span className="font-semibold text-lg tracking-tight">Your Company</span>
            </Link>
            <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2 rounded-md border border-slate-300" aria-expanded={open} aria-controls="primaryNav" aria-label="Open menu">☰</button>
            <nav id="primaryNav" className={`${open ? "" : "hidden"} lg:block`}>
              <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <li><Link className="hover:text-sky-600" href="/services">Services</Link></li>
                <li><Link className="hover:text-sky-600" href="/markets">Markets</Link></li>
                <li><Link className="hover:text-sky-600" href="/about">About</Link></li>
                <li><Link className="hover:text-sky-600" href="/blog">Blog</Link></li>
                <li><Link className="hover:text-sky-600" href="/#contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
