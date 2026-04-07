"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown, ChevronRight, Star, Shield, Truck, Repeat } from "lucide-react";
import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import { InstagramFeed } from "@/components/ui/instagram-feed";
import { Reveal, RevealText, RevealScale } from "@/components/ui/reveal";

const disciplines = [
  { name: "Mountain", slug: "mountain", desc: "Knox. Myra. Crawford. Built for Okanagan singletrack.", image: "/images/shop/fat-bike-winter.jpg" },
  { name: "Road", slug: "road", desc: "Carbon, aero, and ready for the Saturday group ride.", image: "/images/bikes/bianchi-sprint.jpg" },
  { name: "Gravel", slug: "gravel", desc: "KVR. Rail trails. Forestry roads. Drop bars, big tires.", image: "/images/bikes/marin-nicasio-plus.jpg" },
  { name: "Commuter", slug: "commuter", desc: "Bike lanes, rail trails, grocery runs. Every day.", image: "/images/bikes/marin-fairfax-1.jpg" },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const mtb = bikes.filter(b => b.discipline === "mountain");
  const gravel = bikes.filter(b => b.discipline === "gravel");

  return (
    <>
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image src="/images/shop/tool-wall.jpg" alt="ChainLine Cycle workshop" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,6,6,0.1) 0%, rgba(6,6,6,0.3) 30%, rgba(6,6,6,0.7) 65%, rgba(6,6,6,1) 100%)" }} />

        <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--color-accent)] mb-8">
            Kelowna&apos;s Bike Shop &middot; Since 2009
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3.5rem,9vw,8rem)] font-normal text-[var(--color-fg)] leading-[0.88] tracking-tight max-w-4xl">
            Ride past<br />the noise.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="font-[family-name:var(--font-instrument-serif)] italic text-[clamp(1.2rem,2.5vw,2rem)] text-[var(--color-accent)] mt-4 mb-12">
            You are free.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="flex flex-wrap gap-4">
            <Link href="/bikes" className="group inline-flex items-center gap-3 bg-[var(--color-fg)] text-[var(--color-bg)] px-8 py-4 rounded-full text-[13px] font-semibold hover:bg-[var(--color-accent)] transition-colors duration-300">
              Shop Bikes <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/trails" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[13px] font-medium transition-all hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.15)", color: "var(--color-fg)" }}>
              Explore Trails
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="w-5 h-5" style={{ color: "rgba(245,240,235,0.2)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ DISCIPLINE CARDS (Canyon-style) ============ */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-24">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Find Your Ride</p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,4vw,3.5rem)] text-[var(--color-fg)] mb-12">Shop by Discipline</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplines.map((d, i) => (
            <motion.div key={d.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <Link href={`/bikes?discipline=${d.slug}`} className="group relative block aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 transition-all duration-500" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(6,6,6,0.85) 100%)" }} />
                <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-white mb-1">{d.name}</h3>
                  <p className="text-[12px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{d.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-accent)] group-hover:gap-2.5 transition-all">
                    Shop {d.name} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ MOUNTAIN BIKES SHOWCASE ============ */}
      <section className="py-20" style={{ background: "rgba(245,240,235,0.015)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Mountain</p>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--color-fg)]">Trail-Ready Hardtails</h2>
            </Reveal>
            <Link href="/bikes?discipline=mountain" className="group hidden sm:flex items-center gap-2 text-[13px] font-medium hover:text-[var(--color-accent)] transition-colors" style={{ color: "rgba(245,240,235,0.4)" }}>
              View all <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <HorizontalScroll>
            {mtb.map((bike, i) => (
              <div key={bike.id} className="shrink-0 w-[280px] sm:w-[300px]">
                <BikeCard bike={bike} index={i} />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* ============ TRUST SIGNALS (Canyon-style USP bar) ============ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(245,240,235,0.04)", borderBottom: "1px solid rgba(245,240,235,0.04)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Expert Assembly", desc: "Every bike leaves fully built and tuned by our mechanics" },
              { icon: Truck, title: "Ships Across Canada", desc: "Free local pickup or delivered to your door" },
              { icon: Repeat, title: "Trade-In Program", desc: "Bring your old bike, ride out on something new" },
              { icon: Star, title: "100+ Years Experience", desc: "Combined wrench time across our team" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <Icon className="w-5 h-5 text-[var(--color-accent)] mb-3 mx-auto sm:mx-0" />
                  <h3 className="text-[13px] font-semibold text-[var(--color-fg)] mb-1">{title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(245,240,235,0.4)" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GRAVEL SHOWCASE ============ */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Gravel</p>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--color-fg)]">Beyond the Pavement</h2>
            </Reveal>
            <Link href="/bikes?discipline=gravel" className="group hidden sm:flex items-center gap-2 text-[13px] font-medium hover:text-[var(--color-accent)] transition-colors" style={{ color: "rgba(245,240,235,0.4)" }}>
              View all <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <HorizontalScroll>
            {gravel.map((bike, i) => (
              <div key={bike.id} className="shrink-0 w-[280px] sm:w-[300px]">
                <BikeCard bike={bike} index={i} />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* ============ EDITORIAL SPLIT: Pure Cycling ============ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeOut" }}>
          <Image src="/images/shop/fat-bike-winter.jpg" alt="Winter riding in the Okanagan" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,6,6,0.9) 0%, rgba(6,6,6,0.4) 50%, rgba(6,6,6,0.3) 100%)" }} />
        </motion.div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 py-24">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">Pure Cycling</p>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2.5rem,5vw,5rem)] text-white leading-[0.92] mb-6">
                Ride past<br />the noise.
              </h2>
            </Reveal>
            <RevealText delay={0.2}>
              <p className="text-[17px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                No algorithms. No influencer hype. Just you, your bike, and whatever trail or road calls your name today. That&apos;s what this shop is about.
              </p>
            </RevealText>
            <Reveal delay={0.3}>
              <Link href="/about" className="group inline-flex items-center gap-3 text-[13px] font-medium text-white hover:text-[var(--color-accent)] transition-colors">
                Our Story <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICE + TRADE-IN CARDS ============ */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Service */}
          <RevealScale>
            <Link href="/service" className="group relative block rounded-2xl overflow-hidden aspect-[3/2]" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.04)" }}>
              <div className="absolute inset-0">
                <Image src="/images/shop/shop-interior.jpg" alt="ChainLine workshop" fill className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Expert Service</p>
                <h3 className="font-[family-name:var(--font-instrument-serif)] text-3xl text-white mb-2">The Workshop</h3>
                <p className="text-[14px] mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>100+ years combined experience. Tune-ups from $89.</p>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-accent)] group-hover:gap-2.5 transition-all">
                  Book Service <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </RevealScale>

          {/* Trade-In */}
          <RevealScale delay={0.1}>
            <Link href="/trade-in" className="group relative block rounded-2xl overflow-hidden aspect-[3/2]" style={{ background: "rgba(200,150,90,0.04)", border: "1px solid rgba(200,150,90,0.08)" }}>
              <div className="h-full flex flex-col justify-end p-8 sm:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">New Program</p>
                <h3 className="font-[family-name:var(--font-instrument-serif)] text-3xl text-[var(--color-fg)] mb-2">Trade In. Ride New.</h3>
                <p className="text-[14px] mb-4" style={{ color: "rgba(245,240,235,0.45)" }}>Get a quote on your current bike in 24 hours. Apply credit toward your next ride.</p>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-accent)] group-hover:gap-2.5 transition-all">
                  Start a Trade-In <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </RevealScale>
        </div>
      </section>

      {/* ============ BRANDS ============ */}
      <section className="py-14 overflow-hidden" style={{ borderTop: "1px solid rgba(245,240,235,0.04)", borderBottom: "1px solid rgba(245,240,235,0.04)" }}>
        <div className="flex items-center gap-20 animate-marquee-slow">
          {[...brands, ...brands, ...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <Link key={`${brand.slug}-${i}`} href={`/bikes?brand=${brand.slug}`} className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl whitespace-nowrap transition-colors duration-300 hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.08)" }}>
              {brand.name}
            </Link>
          ))}
        </div>
        <style>{`
          @keyframes marquee-slow { 0% { transform: translateX(0); } 100% { transform: translateX(-16.667%); } }
          .animate-marquee-slow { animation: marquee-slow 15s linear infinite; display: flex; }
        `}</style>
      </section>

      {/* ============ INSTAGRAM ============ */}
      <InstagramFeed />

      {/* ============ CONTACT STRIP ============ */}
      <section className="py-20" style={{ borderTop: "1px solid rgba(245,240,235,0.04)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Visit</p>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(245,240,235,0.4)" }}>1139 Ellis St<br />Kelowna, BC V1Y 1Z5</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Hours</p>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(245,240,235,0.4)" }}>Mon 10-5<br />Tue-Fri 9:30-5:30<br />Sat 10-4</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Call</p>
              <a href="tel:2508601968" className="text-[14px] text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors">(250) 860-1968</a>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Email</p>
              <a href="mailto:bikes@chainline.ca" className="text-[14px] text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors">bikes@chainline.ca</a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
