"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { brands } from "@/lib/data";
import { useCart } from "@/lib/cart";

const disciplines = [
  { name: "Mountain", href: "/bikes?discipline=mountain" },
  { name: "Road", href: "/bikes?discipline=road" },
  { name: "Gravel", href: "/bikes?discipline=gravel" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [bikesOpen, setBikesOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  return (
    <header className="fixed top-0 w-full z-40" style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px) saturate(180%)", borderBottom: "1px solid rgba(245,240,235,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="font-[family-name:var(--font-instrument-serif)] text-xl tracking-tight text-[var(--color-fg)]">
              Chain<span className="text-[var(--color-accent)]">Line</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group" onMouseEnter={() => setBikesOpen(true)} onMouseLeave={() => setBikesOpen(false)}>
              <Link href="/bikes" className="px-3 py-2 text-sm font-medium transition-colors" style={{ color: "rgba(245,240,235,0.7)" }}>Bikes</Link>
              {bikesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[480px] rounded-xl p-6 grid grid-cols-2 gap-6" style={{ background: "rgba(10,10,10,0.98)", border: "1px solid rgba(245,240,235,0.08)", backdropFilter: "blur(16px)" }}>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">By Discipline</p>
                    {disciplines.map((d) => (
                      <Link key={d.name} href={d.href} className="block py-1.5 text-sm transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.6)" }}>{d.name}</Link>
                    ))}
                    <Link href="/sale" className="block py-1.5 text-sm text-[var(--color-accent)] transition-colors hover:opacity-80 mt-2">Sale Bikes</Link>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">By Brand</p>
                    {brands.map((b) => (
                      <Link key={b.slug} href={`/bikes?brand=${b.slug}`} className="block py-1.5 text-sm transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.6)" }}>{b.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {[{ label: "Trails", href: "/trails" }, { label: "Service", href: "/service" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }].map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.7)" }}>{item.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.5)" }} aria-label="Search"><Search className="w-5 h-5" /></button>
            <button onClick={openCart} className="relative p-2 transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.5)" }} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full text-[10px] font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="lg:hidden p-2 transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.7)" }} onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-6 py-4 space-y-2" style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid rgba(245,240,235,0.06)" }}>
          {[{ label: "Bikes", href: "/bikes" }, { label: "Trails", href: "/trails" }, { label: "Service", href: "/service" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Sale", href: "/sale" }].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm" style={{ color: "rgba(245,240,235,0.7)" }}>{item.label}</Link>
          ))}
          <a href="tel:2508601968" className="block py-2 text-sm text-[var(--color-accent)]">(250) 860-1968</a>
        </div>
      )}
    </header>
  );
}
