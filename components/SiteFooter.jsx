export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img alt="FENS Logo" className="h-9 w-auto" src="/images/FENS-Hi-Res-Logo-16May22.pdf.png"/>
            <span className="font-semibold">FENS</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">Security & life safety technology integrator.</p>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} FENS.</p>
        </div>
        <div><h4 className="font-semibold">Services</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="/services">Video Surveillance</a></li>
            <li><a className="hover:underline" href="/services">Access Control</a></li>
            <li><a className="hover:underline" href="/services">Fire Alarm</a></li>
            <li><a className="hover:underline" href="/services">Managed Services</a></li>
          </ul>
        </div>
        <div><h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/blog">Blog</a></li>
            <li><a className="hover:underline" href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div><h4 className="font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="#">Privacy Policy</a></li>
            <li><a className="hover:underline" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
