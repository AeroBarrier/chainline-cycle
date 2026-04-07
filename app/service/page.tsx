import Link from "next/link";
import { services } from "@/lib/data";
import { Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Service", description: "Expert bike service in Kelowna. Tune-ups, full service, suspension, wheel builds, bike fits. 100+ years combined experience." };

export default function ServicePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">The Workshop</p>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)] mb-4">Service Menu</h1>
        <p className="text-sm max-w-lg mb-12" style={{ color: "rgba(245,240,235,0.5)" }}>
          100+ years combined wrench experience. We work on everything from commuters to carbon enduro rigs. Drop your bike off or call ahead to book.
        </p>

        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.name} className="rounded-xl p-6 transition-colors" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-lg font-medium text-[var(--color-fg)]">{s.name}</h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-sm font-semibold text-[var(--color-accent)]">{s.price}</span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(245,240,235,0.4)" }}>
                      <Clock className="w-3 h-3" /> {s.time}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.5)" }}>{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl p-8 text-center" style={{ background: "rgba(212,160,74,0.05)", border: "1px solid rgba(212,160,74,0.15)" }}>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-3">Ready to book?</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(245,240,235,0.5)" }}>Call us or drop by the shop. We will get your bike on the stand.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:2508601968" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Call (250) 860-1968
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.15)", color: "var(--color-fg)" }}>
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
