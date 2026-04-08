import Image from "next/image";
import { AnimateIn } from "@/components/ui/animate-in";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "ChainLine Cycle: rider-owned bike shop in Kelowna since 2009." };

const team = [
  { name: "Tao", initials: "T", role: "Owner / Head Mechanic", bio: "Founded ChainLine in 2009. Still happiest when elbow-deep in a bottom bracket. Rides everything from road to fat bike depending on the season." },
  { name: "The Crew", initials: "TC", role: "Mechanics & Sales", bio: "100+ years combined wrench experience across the team. Road, mountain, gravel, commuter, e-bike. We ride what we sell and service what we ride." },
];

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden bg-[var(--color-hero-bg)]">
        <Image src="/images/shop/shop-interior.jpg" alt="ChainLine Cycle shop" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,28,26,0.3) 0%, rgba(28,28,26,0.8) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1280px] mx-auto px-5 sm:px-8 pb-10">
          <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Since 2009</p>
          <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-5xl text-white">About ChainLine</h1>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Story */}
          <div className="lg:col-span-2">
            <AnimateIn>
              <div className="space-y-4 text-[15px] text-[var(--color-fg)] leading-relaxed">
                <p>ChainLine Cycle opened in 2009 on Ellis Street in downtown Kelowna. The idea was simple: build a bike shop run by riders, for riders. No corporate playbook. No pressure sales. Just honest advice, expert service, and bikes we actually believe in.</p>
                <p>Fifteen years later, the formula has not changed. We carry brands we would ride ourselves: Marin and Bianchi. We service everything that rolls through the door, from a kid{"'"}s bike to a carbon gravel build.</p>
                <p>Our team has over 100 years of combined wrench experience. We know Okanagan trails, Okanagan roads, and Okanagan weather. We know which tire to run on Myra-Bellevue in October and which cassette ratio makes the Crawford climbs survivable in August.</p>
                <p>Whether you are buying your first mountain bike or building a dream gravel rig, we are here to help you ride more and ride better.</p>
              </div>
            </AnimateIn>
          </div>

          {/* Stats */}
          <div>
            <AnimateIn delay={0.15}>
              <div className="space-y-6">
                {[
                  { num: "2009", label: "Year founded" },
                  { num: "100+", label: "Years combined wrench experience" },
                  { num: "2", label: "Premium bike brands" },
                  { num: "1139", label: "Ellis St, downtown Kelowna" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-playfair-display)] text-3xl text-[var(--color-accent)]">{s.num}</p>
                    <p className="text-[13px] text-[var(--color-fg)] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Team */}
        <AnimateIn>
          <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">The Team</p>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-2xl text-[var(--color-fg)] mb-8">Who{"'"}s in the shop</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {team.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-playfair-display)] text-xl text-[var(--color-accent)]">{t.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-fg)]">{t.name}</h3>
                    <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)]">{t.role}</p>
                  </div>
                </div>
                <p className="text-[14px] text-[var(--color-fg)] leading-relaxed">{t.bio}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
