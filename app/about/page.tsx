import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "ChainLine Cycle: rider-owned bike shop in Kelowna since 2009. Meet the team and learn our story." };

const team = [
  { name: "Tao", role: "Owner / Head Mechanic", bio: "Founded ChainLine in 2009. Still happiest when elbow-deep in a bottom bracket. Rides everything from road to fat bike depending on the season." },
  { name: "The Crew", role: "Mechanics & Sales", bio: "100+ years combined wrench experience across the team. Road, mountain, gravel, commuter, e-bike. We ride what we sell and service what we ride." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden mb-16">
        <Image src="/images/shop/shop-interior.jpg" alt="ChainLine Cycle shop interior" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.8) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">Since 2009</p>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)]">About ChainLine</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.7)" }}>
              ChainLine Cycle opened in 2009 on Ellis Street in downtown Kelowna. The idea was simple: build a bike shop run by riders, for riders. No corporate playbook. No pressure sales. Just honest advice, expert service, and bikes we actually believe in.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.7)" }}>
              Fifteen years later, the formula hasn't changed. We carry brands we'd ride ourselves: Marin, Transition, Pivot, Surly, Bianchi, Moots, and Salsa. We service everything that rolls through the door, from a kid's bike to a $15,000 titanium gravel build.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.7)" }}>
              Our team has over 100 years of combined wrench experience. We know Okanagan trails, Okanagan roads, and Okanagan weather. We know which tire to run on Myra-Bellevue in October and which cassette ratio makes the Crawford climbs survivable in August.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.7)" }}>
              Whether you're buying your first mountain bike or building a dream gravel rig, we're here to help you ride more and ride better.
            </p>
          </div>
          <div className="space-y-6">
            {[{ num: "2009", label: "Founded" }, { num: "100+", label: "Years combined wrench experience" }, { num: "7", label: "Premium brands" }, { num: "1139", label: "Ellis St, Kelowna" }].map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-semibold text-[var(--color-accent)]">{s.num}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(245,240,235,0.4)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <section>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">The Team</p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl text-[var(--color-fg)] mb-8">Who's in the shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {team.map((t) => (
              <div key={t.name} className="rounded-xl p-6" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
                <h3 className="text-lg font-medium text-[var(--color-fg)] mb-1">{t.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">{t.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.5)" }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
