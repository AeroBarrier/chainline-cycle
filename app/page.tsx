"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown, Wrench, Mountain, Clock, ChevronRight } from "lucide-react";
import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import { Reveal, RevealText, RevealScale } from "@/components/ui/reveal";

export default function HomePage() {
  const featured = bikes.slice(0, 8);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* === HERO === */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image src="/images/shop/tool-wall.jpg" alt="ChainLine Cycle workshop" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,6,6,0.15) 0%, rgba(6,6,6,0.3) 30%, rgba(6,6,6,0.85) 75%, rgba(6,6,6,1) 100%)" }} />

        <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 pb-16 sm:pb-24" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
            Est. 2009 &middot; 1139 Ellis St &middot; Kelowna, BC
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3rem,8vw,7rem)] font-normal text-[var(--color-fg)] leading-[0.92] tracking-tight max-w-3xl mb-8">
            Rider-owned.{" "}
            <span className="italic text-[var(--color-accent)]">Rider-built.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-[17px] max-w-md leading-relaxed mb-10" style={{ color: "rgba(245,240,235,0.5)" }}>
            100+ years combined wrench experience. Seven premium brands. One shop that rides everything it sells.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="flex flex-wrap gap-4">
            <Link href="/bikes" className="group inline-flex items-center gap-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] px-7 py-3.5 rounded-full text-[13px] font-medium hover:bg-[var(--color-accent-light)] transition-colors">
              Shop Bikes <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/service" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[13px] font-medium transition-all hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.12)", color: "var(--color-fg)" }}>
              Book Service
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4" style={{ color: "rgba(245,240,235,0.25)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* === BRANDS MARQUEE === */}
      <section className="py-10 overflow-hidden" style={{ borderBottom: "1px solid rgba(245,240,235,0.04)" }}>
        <div className="flex items-center gap-16 animate-marquee">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <Link key={`${brand.slug}-${i}`} href={`/bikes?brand=${brand.slug}`} className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl whitespace-nowrap transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.12)" }}>
              {brand.name}
            </Link>
          ))}
        </div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }
          .animate-marquee { animation: marquee 20s linear infinite; }
        `}</style>
      </section>

      {/* === FEATURED BIKES === */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-24">
        <div className="flex items-end justify-between mb-14">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">In Stock Now</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,4vw,3.5rem)] text-[var(--color-fg)] leading-tight">The Lineup</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/bikes" className="group hidden sm:flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.4)" }}>
              All bikes <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((bike, i) => (
            <BikeCard key={bike.id} bike={bike} index={i} />
          ))}
        </div>
      </section>

      {/* === WORKSHOP === */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "rgba(245,240,235,0.015)" }} />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">The Workshop</p>
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,4vw,3.5rem)] text-[var(--color-fg)] leading-tight mb-6">
                  Expert service.<br />
                  <span className="italic" style={{ color: "rgba(245,240,235,0.5)" }}>Every time.</span>
                </h2>
              </Reveal>
              <RevealText delay={0.15}>
                <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(245,240,235,0.5)" }}>
                  100+ years combined wrench experience. We work on everything from commuters to carbon enduro rigs, and we ride them all ourselves.
                </p>
              </RevealText>
              <div className="space-y-4 mb-10">
                {[
                  { icon: Wrench, title: "Full Service", price: "$199", desc: "Complete drivetrain clean, brake bleed, wheel true, bearings." },
                  { icon: Mountain, title: "Suspension", price: "$149+", desc: "Fox, RockShox, SR Suntour. Lower leg or full rebuild." },
                  { icon: Clock, title: "Tune-Up", price: "$89", desc: "Shifting, brakes, tire inflation, safety check." },
                ].map(({ icon: Icon, title, price, desc }, i) => (
                  <RevealText key={title} delay={0.2 + i * 0.1}>
                    <div className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white/[0.02]" style={{ border: "1px solid rgba(245,240,235,0.04)" }}>
                      <Icon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between mb-1">
                          <h3 className="text-[14px] font-medium text-[var(--color-fg)]">{title}</h3>
                          <span className="font-mono text-[13px] text-[var(--color-accent)]">{price}</span>
                        </div>
                        <p className="text-[13px]" style={{ color: "rgba(245,240,235,0.4)" }}>{desc}</p>
                      </div>
                    </div>
                  </RevealText>
                ))}
              </div>
              <Reveal delay={0.4}>
                <Link href="/service" className="group inline-flex items-center gap-2.5 text-[13px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors">
                  Full service menu <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>

            <RevealScale delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/images/shop/shop-interior.jpg" alt="ChainLine Cycle workshop" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(6,6,6,0.6) 100%)" }} />
              </div>
            </RevealScale>
          </div>
        </div>
      </section>

      {/* === TRAILS CTA === */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" initial={{ scale: 1.05 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}>
          <Image src="/images/shop/fat-bike-winter.jpg" alt="Winter fat biking Kelowna" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,6,6,0.8) 0%, rgba(6,6,6,0.5) 100%)" }} />
        </motion.div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">Trail Guide</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-fg)] max-w-2xl leading-tight mb-4">
              Ride the Okanagan.
            </h2>
          </Reveal>
          <RevealText delay={0.2}>
            <p className="text-[17px] max-w-md mb-8" style={{ color: "rgba(245,240,235,0.55)" }}>
              Knox Mountain. Myra-Bellevue. Crawford. KVR. Interactive maps, GPS tracks, and recommended bikes for every trail.
            </p>
          </RevealText>
          <Reveal delay={0.3}>
            <Link href="/trails" className="group inline-flex items-center gap-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] px-7 py-3.5 rounded-full text-[13px] font-medium hover:bg-[var(--color-accent-light)] transition-colors">
              Explore Trails <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* === TRADE-IN === */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-24">
        <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: "rgba(200,150,90,0.04)", border: "1px solid rgba(200,150,90,0.1)" }}>
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">New Program</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,4vw,3.5rem)] text-[var(--color-fg)] mb-4">
              Trade in. Ride new.
            </h2>
          </Reveal>
          <RevealText delay={0.15}>
            <p className="text-[15px] max-w-md mx-auto mb-8" style={{ color: "rgba(245,240,235,0.5)" }}>
              Bring us your current bike and get store credit toward something better. Quote in 24 hours. No obligation.
            </p>
          </RevealText>
          <Reveal delay={0.3}>
            <Link href="/trade-in" className="group inline-flex items-center gap-2.5 bg-[var(--color-accent)] text-[var(--color-bg)] px-7 py-3.5 rounded-full text-[13px] font-medium hover:bg-[var(--color-accent-light)] transition-colors">
              Start a Trade-In <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* === CONTACT STRIP === */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(245,240,235,0.04)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { label: "Visit", content: "1139 Ellis St\nKelowna, BC V1Y 1Z5" },
            { label: "Hours", content: "Mon 10-5 \u00B7 Tue-Fri 9:30-5:30\nSat 10-4 \u00B7 Sun Closed" },
            { label: "Contact", content: "(250) 860-1968\nbikes@chainline.ca" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">{item.label}</p>
              <p className="text-[14px] whitespace-pre-line leading-relaxed" style={{ color: "rgba(245,240,235,0.45)" }}>{item.content}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
