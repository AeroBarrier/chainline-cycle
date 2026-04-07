"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown, ChevronRight, Star, Shield, Truck, Repeat, HelpCircle } from "lucide-react";
import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import { InstagramFeed } from "@/components/ui/instagram-feed";
import { Reveal, RevealText, RevealScale } from "@/components/ui/reveal";

const disciplines = [
  { name: "Mountain", slug: "mountain", image: "/images/bikes/marin-bobcat-trail.jpg", desc: "Hardtails and full-sus for Okanagan singletrack" },
  { name: "Road", slug: "road", image: "/images/bikes/bianchi-sprint.jpg", desc: "Carbon and alloy for group rides and racing" },
  { name: "Gravel", slug: "gravel", image: "/images/bikes/marin-gestalt-x.jpg", desc: "Drop bars and big tires for KVR and beyond" },
  { name: "Commuter", slug: "commuter", image: "/images/bikes/marin-fairfax-1.jpg", desc: "Daily riders, hybrids, and belt-drive commuters" },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const mtb = bikes.filter(b => b.discipline === "mountain");
  const gravel = bikes.filter(b => b.discipline === "gravel");

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image src="/images/shop/tool-wall.jpg" alt="ChainLine Cycle workshop" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,6,6,0.1) 0%, rgba(6,6,6,0.25) 30%, rgba(6,6,6,0.7) 65%, rgba(6,6,6,1) 100%)" }} />
        <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--color-accent)] mb-8">Kelowna&apos;s Bike Shop &middot; Since 2009</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3.5rem,9vw,8rem)] font-normal text-[var(--color-fg)] leading-[0.88] tracking-tight max-w-4xl">
            Ride past<br />the noise.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="font-[family-name:var(--font-instrument-serif)] italic text-[clamp(1.2rem,2.5vw,2rem)] text-[var(--color-accent)] mt-4 mb-12">You are free.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4">
            <Link href="/bikes/" className="group inline-flex items-center gap-3 bg-[var(--color-fg)] text-[var(--color-bg)] px-8 py-4 rounded-full text-[13px] font-semibold hover:bg-[var(--color-accent)] transition-colors duration-300">Shop Bikes <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/trails/" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[13px] font-medium transition-all hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.12)" }}>Explore Trails</Link>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}><ArrowDown className="w-5 h-5" style={{ color: "rgba(245,240,235,0.2)" }} /></motion.div>
        </motion.div>
      </section>

      {/* DISCIPLINE CARDS (Canyon + Bici hybrid) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-20">
        <Reveal><div className="text-center mb-12"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Find Your Ride</p><h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,4vw,3rem)] text-[var(--color-fg)]">Shop by Discipline</h2></div></Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {disciplines.map((d, i) => (
            <motion.div key={d.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link href={`/bikes/?discipline=${d.slug}`} className="group block rounded-2xl overflow-hidden text-center" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.04)" }}>
                <div className="relative aspect-square overflow-hidden" style={{ background: "rgba(245,240,235,0.02)" }}><Image src={d.image} alt={d.name} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="py-4 px-3"><h3 className="text-[14px] font-semibold text-[var(--color-fg)] mb-0.5">{d.name}</h3><p className="text-[11px]" style={{ color: "rgba(245,240,235,0.35)" }}>{d.desc}</p></div>
              </Link>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.32 }}>
            <Link href="/contact/" className="group flex flex-col items-center justify-center h-full rounded-2xl text-center p-6 transition-colors hover:bg-white/[0.02]" style={{ border: "1px solid rgba(200,150,90,0.12)", background: "rgba(200,150,90,0.03)" }}>
              <HelpCircle className="w-10 h-10 text-[var(--color-accent)] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-[14px] font-semibold text-[var(--color-accent)] mb-1">Help Me Choose</h3>
              <p className="text-[11px]" style={{ color: "rgba(245,240,235,0.35)" }}>Not sure? We&apos;ll help</p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-20" style={{ background: "rgba(245,240,235,0.012)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <Reveal><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Just In</p><h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--color-fg)]">New Arrivals</h2></Reveal>
            <Link href="/bikes/" className="group hidden sm:flex items-center gap-2 text-[13px] font-medium hover:text-[var(--color-accent)] transition-colors" style={{ color: "rgba(245,240,235,0.4)" }}>View all <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></Link>
          </div>
          <HorizontalScroll>{bikes.slice(0, 8).map((bike, i) => (<div key={bike.id} className="shrink-0 w-[280px] sm:w-[300px]"><BikeCard bike={bike} index={i} /></div>))}</HorizontalScroll>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-14" style={{ borderTop: "1px solid rgba(245,240,235,0.04)", borderBottom: "1px solid rgba(245,240,235,0.04)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[{ icon: Shield, title: "Expert Assembly", desc: "Every bike leaves fully built and tuned" }, { icon: Truck, title: "Ships Across Canada", desc: "Free local pickup or delivered to your door" }, { icon: Repeat, title: "Trade-In Program", desc: "Bring your old bike, ride out on something new" }, { icon: Star, title: "100+ Years Experience", desc: "Combined wrench time across our team" }].map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.06}><div className="text-center sm:text-left"><Icon className="w-5 h-5 text-[var(--color-accent)] mb-3 mx-auto sm:mx-0" /><h3 className="text-[13px] font-semibold text-[var(--color-fg)] mb-1">{title}</h3><p className="text-[11px] leading-relaxed" style={{ color: "rgba(245,240,235,0.35)" }}>{desc}</p></div></Reveal>
          ))}
        </div>
      </section>

      {/* SHOP OUR BRANDS (Bici-style split) */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <Reveal><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Our Brands</p><h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,3.5vw,3rem)] text-[var(--color-fg)] mb-8">We carry what we ride.</h2></Reveal>
            <div className="space-y-1 mb-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-3">Bikes</p>
              {brands.map((brand) => (<RevealText key={brand.slug}><Link href={`/bikes/?brand=${brand.slug}`} className="group flex items-center justify-between py-3 transition-colors" style={{ borderBottom: "1px solid rgba(245,240,235,0.04)" }}><span className="font-[family-name:var(--font-instrument-serif)] text-xl text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">{brand.name}</span><span className="text-[11px] group-hover:text-[var(--color-accent)] transition-colors" style={{ color: "rgba(245,240,235,0.25)" }}>{brand.origin}</span></Link></RevealText>))}
            </div>
            <Reveal delay={0.2}><Link href="/bikes/" className="group inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors">Shop all bikes <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></Link></Reveal>
          </div>
          <RevealScale delay={0.15} className="lg:col-span-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/shop/fat-bike-winter.jpg" alt="Riding in the Okanagan" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,6,6,0.7) 0%, transparent 50%)" }} />
              <div className="absolute bottom-6 left-6"><p className="font-[family-name:var(--font-instrument-serif)] italic text-2xl text-white mb-1">Every season.</p><p className="text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>Four-season riding in the Okanagan.</p></div>
            </div>
          </RevealScale>
        </div>
      </section>

      {/* MOUNTAIN SHOWCASE */}
      <section className="py-20" style={{ background: "rgba(245,240,235,0.012)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <Reveal><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Mountain</p><h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--color-fg)]">Trail-Ready Rides</h2></Reveal>
            <Link href="/bikes/?discipline=mountain" className="group hidden sm:flex items-center gap-2 text-[13px] font-medium hover:text-[var(--color-accent)] transition-colors" style={{ color: "rgba(245,240,235,0.4)" }}>View all <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></Link>
          </div>
          <HorizontalScroll>{mtb.map((bike, i) => (<div key={bike.id} className="shrink-0 w-[280px] sm:w-[300px]"><BikeCard bike={bike} index={i} /></div>))}</HorizontalScroll>
        </div>
      </section>

      {/* EDITORIAL: WORKSHOP */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <Image src="/images/shop/shop-exterior.jpg" alt="ChainLine Cycle Kelowna" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,6,6,0.9) 0%, rgba(6,6,6,0.5) 50%, rgba(6,6,6,0.3) 100%)" }} />
        </motion.div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 py-24">
          <div className="max-w-lg">
            <Reveal><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">The Workshop</p><h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[0.92] mb-6">100+ years<br />of wrench time.</h2></Reveal>
            <RevealText delay={0.2}><p className="text-[16px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>Tune-ups from $89. Full service $199. Suspension rebuilds, wheel builds, bike fits. We work on everything we sell.</p></RevealText>
            <Reveal delay={0.3}><div className="flex flex-wrap gap-4"><Link href="/service/" className="group inline-flex items-center gap-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] px-7 py-3.5 rounded-full text-[13px] font-medium hover:bg-[var(--color-accent-light)] transition-colors">Book Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></Link><Link href="/trade-in/" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[13px] font-medium text-white hover:bg-white/5 transition-colors" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>Trade-In Program</Link></div></Reveal>
          </div>
        </div>
      </section>

      {/* GRAVEL */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <Reveal><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Gravel</p><h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--color-fg)]">Beyond the Pavement</h2></Reveal>
            <Link href="/bikes/?discipline=gravel" className="group hidden sm:flex items-center gap-2 text-[13px] font-medium hover:text-[var(--color-accent)] transition-colors" style={{ color: "rgba(245,240,235,0.4)" }}>View all <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></Link>
          </div>
          <HorizontalScroll>{gravel.map((bike, i) => (<div key={bike.id} className="shrink-0 w-[280px] sm:w-[300px]"><BikeCard bike={bike} index={i} /></div>))}</HorizontalScroll>
        </div>
      </section>

      {/* INSTAGRAM */}
      <InstagramFeed />

      {/* CONTACT STRIP */}
      <section className="py-20" style={{ borderTop: "1px solid rgba(245,240,235,0.04)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-4 gap-10">
          {[{ label: "Visit", content: "1139 Ellis St\nKelowna, BC V1Y 1Z5" }, { label: "Hours", content: "Mon 10-5\nTue-Fri 9:30-5:30\nSat 10-4" }, { label: "Call", content: "(250) 860-1968", href: "tel:2508601968" }, { label: "Email", content: "bikes@chainline.ca", href: "mailto:bikes@chainline.ca" }].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">{item.label}</p>{item.href ? <a href={item.href} className="text-[14px] text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors">{item.content}</a> : <p className="text-[14px] whitespace-pre-line leading-relaxed" style={{ color: "rgba(245,240,235,0.4)" }}>{item.content}</p>}</Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
