"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { brands } from "@/lib/data";
import { useCart } from "@/lib/cart";

const navLinks = [
  { label: "Bikes", href: "/bikes" },
  { label: "Trails", href: "/trails" },
  { label: "Service", href: "/service" },
  { label: "Trade-In", href: "/trade-in" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-40 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(6,6,6,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(245,240,235,0.04)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-18 py-5">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.span
                className="font-[family-name:var(--font-instrument-serif)] text-2xl tracking-tight"
                whileHover={{ opacity: 0.8 }}
              >
                <span className="text-[var(--color-fg)]">Chain</span>
                <span className="text-[var(--color-accent)]">Line</span>
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group relative py-2">
                  <span className="text-[13px] font-medium tracking-wide transition-colors group-hover:text-[var(--color-fg)]" style={{ color: "rgba(245,240,235,0.55)" }}>
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-2.5 rounded-full transition-colors hover:bg-white/5" style={{ color: "rgba(245,240,235,0.4)" }} aria-label="Search">
                <Search className="w-[18px] h-[18px]" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openCart} className="relative p-2.5 rounded-full transition-colors hover:bg-white/5" style={{ color: "rgba(245,240,235,0.4)" }} aria-label="Cart">
                <ShoppingBag className="w-[18px] h-[18px]" />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full text-[10px] font-bold flex items-center justify-center">
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="lg:hidden p-2.5 rounded-full transition-colors hover:bg-white/5" style={{ color: "rgba(245,240,235,0.5)" }} onClick={() => setOpen(!open)} aria-label="Menu">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 pt-20 lg:hidden"
            style={{ background: "rgba(6,6,6,0.98)", backdropFilter: "blur(24px)" }}
          >
            <div className="px-8 py-8 space-y-1">
              {navLinks.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 font-[family-name:var(--font-instrument-serif)] text-3xl text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-8 space-y-3" style={{ borderTop: "1px solid rgba(245,240,235,0.06)" }}>
                <a href="tel:2508601968" className="block text-sm text-[var(--color-accent)]">(250) 860-1968</a>
                <p className="text-xs" style={{ color: "rgba(245,240,235,0.3)" }}>1139 Ellis St, Kelowna, BC</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
