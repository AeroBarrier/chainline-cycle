import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { Clock, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Service", description: "Expert bike service in Kelowna. Tune-ups, full service, suspension, wheel builds, bike fits." };

export default function ServicePage() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 overflow-hidden bg-[var(--color-hero-bg)]">
        <Image src="/images/shop/tool-wall.jpg" alt="ChainLine workshop" fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hero-bg)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1280px] mx-auto px-5 sm:px-8 pb-8">
          <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">The Workshop</p>
          <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl text-white">Service Menu</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-10">
        <AnimateIn>
          <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-10">
            100+ years combined wrench experience. We work on everything from commuters to carbon enduro rigs. Drop your bike off or call ahead.
          </p>
        </AnimateIn>

        <div className="space-y-4">
          {services.map((s, i) => (
            <AnimateIn key={s.name} delay={i * 0.08}>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-6">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg font-semibold text-[var(--color-fg)]">{s.name}</h2>
                  <span className="font-[family-name:var(--font-space-mono)] text-lg font-bold text-[var(--color-accent)]">{s.price}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-muted)]" />
                  <span className="text-[12px] text-[var(--color-muted)]">{s.time}</span>
                </div>
                <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">{s.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} className="mt-10">
          <div className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] p-8 text-center">
            <h2 className="font-[family-name:var(--font-playfair-display)] text-2xl text-[var(--color-fg)] mb-3">Ready to book?</h2>
            <p className="text-[14px] text-[var(--color-muted)] mb-6">Call us or drop by. We{"'"}ll get your bike on the stand.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="tel:2508601968" className="inline-flex items-center gap-2 bg-[var(--color-hero-bg)] text-white px-6 py-3 rounded-lg text-[13px] font-medium hover:bg-[var(--color-accent)] transition-colors">
                Call 250.860.1968
              </a>
              <Link href="/contact/" className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-fg)] px-6 py-3 rounded-lg text-[13px] font-medium hover:bg-[var(--color-surface)] transition-colors">
                Contact Us <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
