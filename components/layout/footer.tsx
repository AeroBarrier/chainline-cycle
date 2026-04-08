import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-hero-bg)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="font-[family-name:var(--font-playfair-display)] text-xl text-white">Chain<span className="text-[var(--color-accent)]">Line</span></Link>
            <p className="mt-3 text-[13px] leading-relaxed text-white/30 font-light">Rider-owned since 2009.<br />1139 Ellis St, Kelowna, BC</p>
          </div>
          {[
            { title: "Shop", links: [["All Bikes", "/bikes/"], ["Sale", "/sale/"], ["Used Bikes", "/used-bikes/"], ["Trade-In", "/trade-in/"]] },
            { title: "Service", links: [["Service Menu", "/service/"], ["Trail Guide", "/trails/"], ["About", "/about/"], ["Contact", "/contact/"]] },
            { title: "Contact", links: [["250.860.1968", "tel:2508601968"], ["bikes@chainline.ca", "mailto:bikes@chainline.ca"], ["Instagram", "https://instagram.com/chainline_cycle_kelowna/"]] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-white/50 mb-4">{col.title}</h3>
              <ul className="space-y-2.5">{col.links.map(([label, href]) => (<li key={label}><Link href={href} className="text-[13px] text-white/30 hover:text-white transition-colors font-light">{label}</Link></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-white/[0.06]">
          <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-white/20">&copy; {new Date().getFullYear()} ChainLine Cycle</p>
        </div>
      </div>
    </footer>
  );
}
