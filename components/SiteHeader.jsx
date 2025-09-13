"use client";
import Link from "next/link";
import { useState } from "react";
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <img alt="FENS Logo" className="h-24 w-auto" src="/images/FENS-Hi-Res-Logo-16May22.pdf.png" />
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
