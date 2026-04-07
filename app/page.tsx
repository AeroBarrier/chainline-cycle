import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Mountain, Clock } from "lucide-react";
import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";

export default function HomePage() {
  const featured = bikes.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/shop/tool-wall.jpg" alt="ChainLine Cycle workshop tool wall" fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.95) 100%)" }} />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6">Since 2009 &middot; Kelowna, BC</p>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl sm:text-7xl lg:text-8xl font-normal text-[var(--color-fg)] leading-[0.95] tracking-tight mb-6">
            Rider-owned.<br />
            <span className="italic text-[var(--color-accent)]">Rider-built.</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-lg leading-relaxed mb-10" style={{ color: "rgba(245,240,235,0.6)" }}>
            Marin. Transition. Pivot. Surly. Bianchi. Moots. Salsa. Expert service. 100+ years combined wrench experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/bikes" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Shop Bikes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/service" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.15)", color: "var(--color-fg)" }}>
              Book Service
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ borderBottom: "1px solid rgba(245,240,235,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { num: "2009", label: "Founded" },
            { num: "100+", label: "Years Combined Experience" },
            { num: "7", label: "Premium Brands" },
            { num: "1139", label: "Ellis St, Kelowna" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-2xl sm:text-3xl font-semibold text-[var(--color-fg)]">{stat.num}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest mt-1" style={{ color: "rgba(245,240,235,0.4)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">In Stock</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl text-[var(--color-fg)]">Featured Bikes</h2>
          </div>
          <Link href="/bikes" className="hidden sm:flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.5)" }}>
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </section>

      {/* Brands */}
      <section style={{ borderTop: "1px solid rgba(245,240,235,0.06)", borderBottom: "1px solid rgba(245,240,235,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-8 text-center">We Carry</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/bikes?brand=${brand.slug}`} className="font-[family-name:var(--font-instrument-serif)] text-2xl sm:text-3xl transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.25)" }}>
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Expert Service</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl text-[var(--color-fg)]">The Workshop</h2>
          </div>
          <Link href="/service" className="hidden sm:flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.5)" }}>
            Full menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: Wrench, title: "Full Service", desc: "Complete drivetrain clean, brake bleed, bearing check, wheel true. Your bike comes back feeling new.", price: "$199" },
            { icon: Mountain, title: "Suspension Service", desc: "Fox, RockShox, Manitou. Lower leg service, damper service, or full rebuild.", price: "$149+" },
            { icon: Clock, title: "Tune-Up", desc: "Shifting and brake adjustment, tire inflation, safety check. The basics done right.", price: "$89" },
          ].map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="rounded-xl p-6" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
              <Icon className="w-5 h-5 text-[var(--color-accent)] mb-4" />
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-sm font-medium text-[var(--color-fg)]">{title}</h3>
                <span className="font-mono text-sm text-[var(--color-accent)]">{price}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.5)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/shop/fat-bike-winter.jpg" alt="Winter fat biking on Kelowna trails" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">Kelowna Riding</p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-5xl text-[var(--color-fg)] mb-4 max-w-xl leading-tight">
            Ride the Okanagan.<br />We&apos;ll keep you rolling.
          </h2>
          <p className="text-lg max-w-md mb-8" style={{ color: "rgba(245,240,235,0.6)" }}>
            Knox Mountain. Myra-Bellevue. Crawford. KVR. Whatever you ride, we know the trails and we know the bikes.
          </p>
          <Link href="/service" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Book a Service <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact strip */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">Visit Us</p>
            <p className="text-sm" style={{ color: "rgba(245,240,235,0.6)" }}>1139 Ellis St<br />Kelowna, BC V1Y 1Z5</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">Hours</p>
            <p className="text-sm" style={{ color: "rgba(245,240,235,0.6)" }}>Mon 10-5 &middot; Tue-Fri 9:30-5:30<br />Sat 10-4 &middot; Sun Closed</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">Contact</p>
            <p className="text-sm" style={{ color: "rgba(245,240,235,0.6)" }}>
              <a href="tel:2508601968" className="hover:text-white transition-colors">(250) 860-1968</a><br />
              <a href="mailto:bikes@chainline.ca" className="hover:text-white transition-colors">bikes@chainline.ca</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
