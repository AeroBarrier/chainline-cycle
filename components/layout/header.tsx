"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "Bikes", href: "/bikes/" },
  { label: "Service", href: "/service/" },
  { label: "Rides", href: "/rides/" },
  { label: "Trade-In", href: "/trade-in/" },
  { label: "About", href: "/about/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--color-hero-bg)] text-center py-2 px-4">
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.1em] text-white/50">
          FREE SHIPPING ON ORDERS OVER $150 IN BC {" \u2022 "} <Link href="/trade-in/" className="underline text-white/70 hover:text-white">TRADE-IN PROGRAM OPEN</Link>
        </p>
      </div>

      <header className={`sticky top-0 z-40 bg-[var(--color-bg)] transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_12px_rgba(0,0,0,0.06)]" : ""}`} style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[60px]">
            <Link href="/" className="font-[family-name:var(--font-playfair-display)] text-[22px] tracking-[-0.02em] text-[var(--color-fg)]">
              Chain<span className="text-[var(--color-accent)]">Line</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-[13px] font-normal text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors tracking-wide">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              <a href="tel:2508601968" className="hidden md:flex items-center gap-1.5 text-[11px] font-[family-name:var(--font-space-mono)] text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors mr-2">
                <Phone className="w-3 h-3" /> 250.860.1968
              </a>
              <button className="p-2 text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"><Search className="w-[17px] h-[17px]" /></button>
              <button onClick={openCart} className="relative p-2 text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors">
                <ShoppingBag className="w-[17px] h-[17px]" />
                {itemCount > 0 && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-accent)] text-white rounded-full text-[9px] font-bold flex items-center justify-center">{itemCount}</span>}
              </button>
              <button className="lg:hidden p-2 text-[var(--color-muted)]" onClick={() => setOpen(!open)}>{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-6 space-y-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 font-[family-name:var(--font-playfair-display)] text-2xl text-[var(--color-fg)]">{item.label}</Link>
            ))}
            <a href="tel:2508601968" className="block pt-4 text-[13px] text-[var(--color-accent)]">250.860.1968</a>
          </div>
        )}
      </header>
    </>
  );
}
