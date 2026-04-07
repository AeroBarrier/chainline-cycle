import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(245,240,235,0.04)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="font-[family-name:var(--font-instrument-serif)] text-2xl tracking-tight">
              Chain<span className="text-[var(--color-accent)]">Line</span>
            </Link>
            <p className="mt-3 text-[13px] leading-relaxed max-w-[240px]" style={{ color: "rgba(245,240,235,0.35)" }}>
              Rider-owned since 2009. Kelowna&apos;s bike shop.
            </p>
          </div>
          {[
            { title: "Shop", links: [{ label: "All Bikes", href: "/bikes" }, { label: "Sale", href: "/sale" }, { label: "Used Bikes", href: "/used-bikes" }, { label: "Trade-In", href: "/trade-in" }] },
            { title: "Service", links: [{ label: "Full Menu", href: "/service" }, { label: "Bike Fit", href: "/service" }, { label: "Trail Guide", href: "/trails" }] },
            { title: "Info", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Instagram", href: "https://www.instagram.com/chainline_cycle_kelowna/" }] },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] transition-colors hover:text-[var(--color-fg)]" style={{ color: "rgba(245,240,235,0.35)" }}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid rgba(245,240,235,0.04)" }}>
          <p className="text-[11px]" style={{ color: "rgba(245,240,235,0.2)" }}>&copy; {new Date().getFullYear()} ChainLine Cycle &middot; 1139 Ellis St, Kelowna, BC</p>
          <p className="text-[11px]" style={{ color: "rgba(245,240,235,0.15)" }}>(250) 860-1968 &middot; bikes@chainline.ca</p>
        </div>
      </div>
    </footer>
  );
}
