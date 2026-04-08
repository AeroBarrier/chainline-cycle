import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="font-[family-name:var(--font-instrument-serif)] text-xl text-white">Chain<span className="text-[var(--color-accent)]">Line</span></Link>
            <p className="mt-3 text-[13px] leading-relaxed text-white/40">Rider-owned since 2009.<br />1139 Ellis St, Kelowna, BC</p>
          </div>
          {[
            { title: "Shop", links: [["All Bikes", "/bikes/"], ["Sale", "/sale/"], ["Used Bikes", "/used-bikes/"], ["Trade-In", "/trade-in/"]] },
            { title: "Service", links: [["Service Menu", "/service/"], ["Trail Guide", "/trails/"], ["About Us", "/about/"], ["Contact", "/contact/"]] },
            { title: "Contact", links: [["(250) 860-1968", "tel:2508601968"], ["bikes@chainline.ca", "mailto:bikes@chainline.ca"], ["Instagram", "https://instagram.com/chainline_cycle_kelowna/"]] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-white/80 mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-[13px] text-white/40 hover:text-white transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[11px] text-white/25">&copy; {new Date().getFullYear()} ChainLine Cycle</p>
          <p className="text-[11px] text-white/25">Mon 10-5 &middot; Tue-Fri 9:30-5:30 &middot; Sat 10-4</p>
        </div>
      </div>
    </footer>
  );
}
