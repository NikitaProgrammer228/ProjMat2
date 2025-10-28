export const metadata = {
  title: "Your Company — Security & Life Safety Integrator",
  description: "Enterprise security & life safety systems. Design, deploy, and support at scale.",
};
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import HashTokenHandler from "../components/HashTokenHandler";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800 bg-white">
        <HashTokenHandler />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
