import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Truck, Repeat, Wrench } from "lucide-react";
import { bikes } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";

const categories = [
  { name: "Mountain", slug: "mountain", image: "/images/bikes/marin-bobcat-trail.jpg", count: 0 },
  { name: "Road", slug: "road", image: "/images/bikes/bianchi-sprint.jpg", count: 0 },
  { name: "Gravel", slug: "gravel", image: "/images/bikes/marin-gestalt-x.jpg", count: 0 },
  { name: "Commuter", slug: "commuter", image: "/images/bikes/marin-fairfax-1.jpg", count: 0 },
];
categories.forEach(c => { c.count = bikes.filter(b => b.discipline === c.slug).length; });

export default function HomePage() {
  const featured = bikes.slice(0, 8);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[var(--color-dark)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-4">Kelowna&apos;s Bike Shop &middot; Since 2009</p>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-5">
              Expert bikes.<br />Expert service.
            </h1>
            <p className="text-[16px] text-white/55 leading-relaxed max-w-md mb-8">
              Marin and Bianchi dealer. 100+ years combined wrench experience. Every bike leaves the shop built, tuned, and ready to ride.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/bikes/" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg text-[13px] font-semibold hover:bg-[var(--color-accent-hover)] transition-colors">
                Shop Bikes <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/service/" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg text-[13px] font-medium hover:bg-white/5 transition-colors">
                Book Service
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
            <Image src="/images/shop/tool-wall.jpg" alt="ChainLine Cycle workshop" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: Shield, text: "Expert assembly on every bike" },
            { icon: Truck, text: "Free pickup or ships Canada-wide" },
            { icon: Repeat, text: "Trade-in your old bike" },
            { icon: Wrench, text: "100+ years combined experience" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
              <span className="text-[12px] text-[var(--color-muted)]">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <h2 className="text-2xl font-semibold text-[var(--color-fg)] mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/bikes/?discipline=${cat.slug}`} className="group block rounded-lg overflow-hidden bg-[var(--color-light)] hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={cat.image} alt={cat.name} fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="px-4 py-3 bg-white border-t border-[var(--color-border)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] font-semibold text-[var(--color-fg)]">{cat.name}</h3>
                  <span className="text-[12px] text-[var(--color-muted)]">{cat.count} bikes</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED BIKES ── */}
      <section className="bg-white border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-[var(--color-fg)]">Featured Bikes</h2>
            <Link href="/bikes/" className="text-[13px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
            {featured.map((bike, i) => (
              <BikeCard key={bike.id} bike={bike} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CTA ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link href="/service/" className="group flex flex-col justify-end rounded-xl overflow-hidden relative h-64 sm:h-72 bg-[var(--color-dark)]">
            <Image src="/images/shop/shop-interior.jpg" alt="Service workshop" fill className="object-cover opacity-50 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">Expert Service</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">The Workshop</h3>
              <p className="text-[13px] text-white/50 mb-3">Tune-ups from $89. Full service $199.</p>
              <span className="text-[12px] font-medium text-[var(--color-accent)] group-hover:underline">Book now &rarr;</span>
            </div>
          </Link>
          <Link href="/trade-in/" className="group flex flex-col justify-end rounded-xl overflow-hidden relative h-64 sm:h-72 bg-[var(--color-dark)]">
            <Image src="/images/shop/fat-bike-winter.jpg" alt="Riding in the Okanagan" fill className="object-cover opacity-50 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">New Program</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">Trade In. Ride New.</h3>
              <p className="text-[13px] text-white/50 mb-3">Get a quote on your bike in 24 hours.</p>
              <span className="text-[12px] font-medium text-[var(--color-accent)] group-hover:underline">Start trade-in &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── VISIT ── */}
      <section className="bg-white border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">Visit</h3>
            <p className="text-[14px] text-[var(--color-fg)]">1139 Ellis St</p>
            <p className="text-[14px] text-[var(--color-muted)]">Kelowna, BC V1Y 1Z5</p>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">Hours</h3>
            <p className="text-[14px] text-[var(--color-muted)]">Mon 10-5 &middot; Tue-Fri 9:30-5:30</p>
            <p className="text-[14px] text-[var(--color-muted)]">Sat 10-4 &middot; Sun Closed</p>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">Contact</h3>
            <p className="text-[14px]"><a href="tel:2508601968" className="text-[var(--color-fg)] hover:text-[var(--color-accent)]">(250) 860-1968</a></p>
            <p className="text-[14px]"><a href="mailto:bikes@chainline.ca" className="text-[var(--color-muted)] hover:text-[var(--color-accent)]">bikes@chainline.ca</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
