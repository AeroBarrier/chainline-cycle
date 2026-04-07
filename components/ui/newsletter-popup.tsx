"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function NewsletterPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("newsletter_dismissed");
    if (dismissed) {
      const ts = parseInt(dismissed, 10);
      if (Date.now() - ts < 30 * 24 * 60 * 60 * 1000) return;
    }
    const timer = setTimeout(() => setShow(true), 8000);
    const handleScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct > 0.5) { setShow(true); window.removeEventListener("scroll", handleScroll); }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener("scroll", handleScroll); };
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem("newsletter_dismissed", String(Date.now()));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dismiss();
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={dismiss} />
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 20 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-2xl overflow-hidden" style={{ background: "#0D0D0D", border: "1px solid rgba(200,150,90,0.15)" }}>
            {/* Hero image */}
            <div className="relative h-40 overflow-hidden">
              <Image src="/images/shop/tool-wall.jpg" alt="ChainLine Cycle" fill className="object-cover opacity-60" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, #0D0D0D 100%)" }} />
              <button onClick={dismiss} className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 pb-6 -mt-8 relative z-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">Join the Crew</p>
              <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-1">Get 10% Off</h3>
              <p className="text-[13px] mb-5" style={{ color: "rgba(245,240,235,0.45)" }}>Your first order. Plus trail updates and new arrivals.</p>

              <div className="space-y-3">
                <input type="text" placeholder="First name" required className="w-full px-4 py-2.5 rounded-lg text-[13px] text-[var(--color-fg)] placeholder:text-white/20 outline-none focus:ring-1 focus:ring-[var(--color-accent)]" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.08)" }} />
                <input type="email" placeholder="Email" required className="w-full px-4 py-2.5 rounded-lg text-[13px] text-[var(--color-fg)] placeholder:text-white/20 outline-none focus:ring-1 focus:ring-[var(--color-accent)]" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.08)" }} />
                <select className="w-full px-4 py-2.5 rounded-lg text-[13px] text-[var(--color-fg)] outline-none focus:ring-1 focus:ring-[var(--color-accent)]" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.08)" }}>
                  <option value="">What brings you in today?</option>
                  <option>Mountain Biking</option>
                  <option>Road Cycling</option>
                  <option>Gravel</option>
                  <option>Commuting</option>
                  <option>Service</option>
                  <option>Just Looking</option>
                </select>
                <button type="submit" className="w-full bg-[var(--color-accent)] text-[var(--color-bg)] py-3 rounded-lg text-[13px] font-semibold hover:bg-[var(--color-accent-light)] transition-colors">
                  SIGN UP NOW
                </button>
              </div>
              <p className="text-[10px] text-center mt-3" style={{ color: "rgba(245,240,235,0.2)" }}>No spam. Unsubscribe anytime.</p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
