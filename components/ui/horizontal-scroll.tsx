"use client";
import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HorizontalScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const amount = ref.current.clientWidth * 0.75;
    ref.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className={`group relative ${className}`}>
      <div ref={ref} className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
        {children}
      </div>
      <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110" style={{ background: "rgba(6,6,6,0.8)", border: "1px solid rgba(245,240,235,0.1)", backdropFilter: "blur(8px)" }}>
        <ChevronLeft className="w-4 h-4 text-[var(--color-fg)]" />
      </button>
      <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110" style={{ background: "rgba(6,6,6,0.8)", border: "1px solid rgba(245,240,235,0.1)", backdropFilter: "blur(8px)" }}>
        <ChevronRight className="w-4 h-4 text-[var(--color-fg)]" />
      </button>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}
