"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Truck, Repeat, Wrench } from "lucide-react";
import { bikes } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";

const categories = [
  { name: "Mountain", slug: "mountain", image: "/images/bikes/marin-bobcat-trail.jpg", color: "#3D5A3E" },
  { name: "Road", slug: "road", image: "/images/bikes/bianchi-sprint.jpg", color: "#4A5568" },
  { name: "Gravel", slug: "gravel", image: "/images/bikes/marin-gestalt-x.jpg", color: "#5C4A3A" },
  { name: "Commuter", slug: "commuter", image: "/images/bikes/marin-presidio-3.jpg", color: "#3A4A5C" },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } } as const;
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } };

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const featured = bikes.slice(0, 4);
  const mtb = bikes.filter(b => b.discipline === "mountain").slice(0, 4);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative bg-[var(--color-hero-bg)] overflow-hidden">
        <div className="max-w-[1280px] mx-auto min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Text */}
          <motion.div className="px-5 sm:px-8 py-16 lg:py-24 relative z-10" variants={stagger} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6">
              Kelowna, BC {"\u2022"} Since 2009
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-[family-name:var(--font-playfair-display)] text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-[1.02] tracking-[-0.03em] mb-6">
              Expert bikes.<br />Expert service.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[16px] text-white/45 leading-relaxed max-w-md mb-10 font-light">
              Marin and Bianchi dealer. 100+ years combined wrench experience. Every bike leaves built, tuned, and ready to ride.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link href="/bikes/" className="inline-flex items-center gap-2 bg-white text-[var(--color-hero-bg)] px-7 py-3.5 rounded-lg text-[13px] font-medium hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300">
                Shop Bikes <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/service/" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-lg text-[13px] font-light hover:bg-white/5 transition-colors">
                Book Service
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="relative h-full min-h-[400px] lg:min-h-[85vh]" style={{ y: imgY }}>
            <Image src="/images/shop/tool-wall.jpg" alt="ChainLine Cycle workshop" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-hero-bg)] via-[var(--color-hero-bg)]/30 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hero-bg)] to-transparent lg:hidden" />
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { icon: Shield, text: "Expert assembly on every bike" },
            { icon: Truck, text: "Free pickup or ships Canada-wide" },
            { icon: Repeat, text: "Trade-in your old bike" },
            { icon: Wrench, text: "100+ years combined experience" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
              <span className="text-[12px] text-[var(--color-muted)] font-light">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY CARDS ── */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="font-[family-name:var(--font-playfair-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--color-fg)] tracking-[-0.02em] mb-10">
          Shop by Discipline
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <Link href={`/bikes/?d=${cat.slug}`} className="group block rounded-xl overflow-hidden" style={{ background: cat.color }}>
                <div className="relative aspect-[3/4]">
                  <Image src={cat.image} alt={cat.name} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-white mb-0.5">{cat.name}</h3>
                    <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-white/50 uppercase tracking-wider">
                      {bikes.filter(b => b.discipline === cat.slug).length} bikes
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED: EDITORIAL SPLIT ── */}
      <section className="bg-white border-y border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Editorial left */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:sticky lg:top-32">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">Featured</p>
              <h2 className="font-[family-name:var(--font-playfair-display)] text-[clamp(2rem,4vw,3rem)] text-[var(--color-fg)] leading-[1.1] tracking-[-0.02em] mb-4">
                The bikes we{"\u0027"}d ride ourselves.
              </h2>
              <p className="text-[15px] text-[var(--color-muted)] leading-relaxed font-light mb-6">
                Every bike on the floor is one our team would take on a trail, a road, or a commute. No filler. No house brands. Just bikes we believe in.
              </p>
              <Link href="/bikes/" className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
                View all bikes <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Bike grid right */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-x-5 gap-y-8">
              {featured.map((bike, i) => (
                <BikeCard key={bike.id} bike={bike} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE BREAK ── */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image src="/images/shop/fat-bike-winter.jpg" alt="Winter riding in the Okanagan" fill className="object-cover" />
      </motion.section>

      {/* ── MOUNTAIN BIKES ── */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Mountain</p>
            <h2 className="font-[family-name:var(--font-playfair-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--color-fg)] tracking-[-0.02em]">Trail-Ready</h2>
          </motion.div>
          <Link href="/bikes/?d=mountain" className="text-[13px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] flex items-center gap-1">View all <ArrowRight className="w-3.5 h-3.5" /></Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {mtb.map((bike, i) => <BikeCard key={bike.id} bike={bike} index={i} />)}
        </div>
      </section>

      {/* ── SERVICE / TRADE-IN SPLIT ── */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Service — 45% */}
          <Link href="/service/" className="group lg:col-span-5 relative rounded-xl overflow-hidden h-72 sm:h-80 bg-[var(--color-hero-bg)] block">
            <Image src="/images/shop/shop-interior.jpg" alt="Workshop" fill className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7 sm:p-9">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Expert Service</p>
              <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-white mb-1">The Workshop</h3>
              <p className="text-[13px] text-white/45 font-light mb-3">Tune-ups from $89. Full service $199.</p>
              <span className="text-[12px] font-medium text-[var(--color-accent)] group-hover:underline">Book now {"\u2192"}</span>
            </div>
          </Link>
          {/* Trade-in — 55% */}
          <Link href="/trade-in/" className="group lg:col-span-7 relative rounded-xl overflow-hidden h-72 sm:h-80 bg-[var(--color-hero-bg)] block">
            <Image src="/images/shop/shop-exterior.jpg" alt="ChainLine Cycle" fill className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7 sm:p-9">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">New Program</p>
              <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-white mb-1">Trade In. Ride New.</h3>
              <p className="text-[13px] text-white/45 font-light mb-3">Get a quote on your bike in 24 hours. Apply credit toward your next ride.</p>
              <span className="text-[12px] font-medium text-[var(--color-accent)] group-hover:underline">Start trade-in {"\u2192"}</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── VISIT STRIP ── */}
      <section className="bg-white border-t border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] mb-2">Visit</h3>
            <p className="text-[14px] text-[var(--color-fg)]">1139 Ellis St</p>
            <p className="text-[14px] text-[var(--color-muted)]">Kelowna, BC V1Y 1Z5</p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] mb-2">Hours</h3>
            <p className="text-[14px] text-[var(--color-muted)]">Mon 10-5 {"\u00B7"} Tue-Fri 9:30-5:30</p>
            <p className="text-[14px] text-[var(--color-muted)]">Sat 10-4 {"\u00B7"} Sun Closed</p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] mb-2">Contact</h3>
            <p className="text-[14px]"><a href="tel:2508601968" className="text-[var(--color-fg)] hover:text-[var(--color-accent)]">250.860.1968</a></p>
            <p className="text-[14px]"><a href="mailto:bikes@chainline.ca" className="text-[var(--color-muted)] hover:text-[var(--color-accent)]">bikes@chainline.ca</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
