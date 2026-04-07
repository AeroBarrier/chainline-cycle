import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(245,240,235,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-[family-name:var(--font-instrument-serif)] text-2xl tracking-tight">
              Chain<span className="text-[var(--color-accent)]">Line</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.45)" }}>
              Rider-owned since 2009. 100+ years combined wrench experience. Kelowna&apos;s bike shop.
            </p>
            <a href="https://www.instagram.com/chainline_cycle_kelowna/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.5)" }}>
              <ExternalLink className="w-4 h-4" /> @chainline_cycle_kelowna
            </a>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {["Mountain", "Road", "Gravel", "Sale Bikes"].map((item) => (
                <li key={item}><Link href="/bikes" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.5)" }}>{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-4">Service</h3>
            <ul className="space-y-2.5">
              {["Tune-Up", "Full Service", "Bike Fit", "Wheel Build", "Suspension"].map((item) => (
                <li key={item}><Link href="/service" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.5)" }}>{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-4">Visit</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgba(245,240,235,0.3)" }} />
                <span className="text-sm" style={{ color: "rgba(245,240,235,0.5)" }}>1139 Ellis St<br />Kelowna, BC V1Y 1Z5</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "rgba(245,240,235,0.3)" }} />
                <a href="tel:2508601968" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.5)" }}>(250) 860-1968</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "rgba(245,240,235,0.3)" }} />
                <a href="mailto:bikes@chainline.ca" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.5)" }}>bikes@chainline.ca</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgba(245,240,235,0.3)" }} />
                <span className="text-sm" style={{ color: "rgba(245,240,235,0.5)" }}>Mon 10-5 &middot; Tue-Fri 9:30-5:30<br />Sat 10-4 &middot; Sun Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(245,240,235,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(245,240,235,0.25)" }}>&copy; {new Date().getFullYear()} ChainLine Cycle &middot; 1139 Ellis St, Kelowna, BC</p>
        </div>
      </div>
    </footer>
  );
}
