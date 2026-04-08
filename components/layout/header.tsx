"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "Bikes", href: "/bikes/" },
  { label: "Service", href: "/service/" },
  { label: "Trails", href: "/trails/" },
  { label: "Trade-In", href: "/trade-in/" },
  { label: "About", href: "/about/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--color-dark)] text-white/70 text-[11px] text-center py-2 px-4">
        Free shipping on orders over $150 in BC &nbsp;&middot;&nbsp; <Link href="/trade-in/" className="underline text-white/90 hover:text-white">Trade-in program now open</Link>
      </div>

      <header className={`sticky top-0 z-40 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`} style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-[family-name:var(--font-instrument-serif)] text-[22px] tracking-tight text-[var(--color-fg)]">
              Chain<span className="text-[var(--color-accent)]">Line</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-1">
              <a href="tel:2508601968" className="hidden sm:flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors mr-3">
                <Phone className="w-3.5 h-3.5" /> (250) 860-1968
              </a>
              <button className="p-2 text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors" aria-label="Search">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button onClick={openCart} className="relative p-2 text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors" aria-label="Cart">
                <ShoppingBag className="w-[18px] h-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-accent)] text-white rounded-full text-[9px] font-bold flex items-center justify-center">{itemCount}</span>
                )}
              </button>
              <button className="lg:hidden p-2 text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors" onClick={() => setOpen(!open)} aria-label="Menu">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
            <div className="px-5 py-4 space-y-1">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2.5 text-[15px] font-medium text-[var(--color-fg)]">
                  {item.label}
                </Link>
              ))}
              <a href="tel:2508601968" className="block py-2.5 text-[15px] text-[var(--color-accent)]">(250) 860-1968</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
