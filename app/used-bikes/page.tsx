import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Bikes Kelowna",
  description: "Quality used bikes for sale in Kelowna, BC. Every bike is inspected, tuned, and ready to ride. Trade in your old bike toward something new at ChainLine Cycle.",
};

// Mock used bike inventory. In production, this comes from Lightspeed/Shopify.
const usedBikes = [
  { id: "u1", name: "2023 Trek Fuel EX 8", price: 3200, original: 5500, size: "Large", condition: "Excellent", desc: "One season, no crashes. Fox 36/DPX2, GX Eagle. Original owner, receipts available." },
  { id: "u2", name: "2022 Specialized Diverge Comp", price: 2400, original: 4200, size: "56cm", condition: "Good", desc: "Light scratches on top tube. Future Shock 2.0, GRX 810 Di2. Great gravel bike." },
  { id: "u3", name: "2021 Santa Cruz Hightower C", price: 3800, original: 6800, size: "Large", condition: "Good", desc: "Two seasons of Myra-Bellevue use. XT build. New chain, cassette, and brake pads. Rides great." },
];

export default function UsedBikesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Pre-Owned</p>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)] mb-4">Used Bikes</h1>
        <p className="text-sm max-w-xl mb-4" style={{ color: "rgba(245,240,235,0.5)" }}>
          Every used bike at ChainLine is inspected, tuned, and ready to ride. Most come from our trade-in program, which means we know the history.
        </p>
        <Link href="/trade-in" className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] mb-12 hover:opacity-80 transition-opacity">
          Have a bike to trade in? <ArrowRight className="w-4 h-4" />
        </Link>

        {usedBikes.length > 0 ? (
          <div className="space-y-4">
            {usedBikes.map((bike) => (
              <div key={bike.id} className="rounded-xl p-6 transition-colors" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-medium text-[var(--color-fg)] mb-1">{bike.name}</h2>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-lg font-semibold text-[var(--color-accent)]">${bike.price.toLocaleString()}</span>
                      <span className="font-mono text-sm line-through" style={{ color: "rgba(245,240,235,0.3)" }}>${bike.original.toLocaleString()} new</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)]">
                        Save ${(bike.original - bike.price).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs mb-2" style={{ color: "rgba(245,240,235,0.5)" }}>{bike.desc}</p>
                    <div className="flex gap-3 text-xs" style={{ color: "rgba(245,240,235,0.4)" }}>
                      <span>Size: {bike.size}</span>
                      <span>Condition: {bike.condition}</span>
                    </div>
                  </div>
                  <a href="tel:2508601968" className="shrink-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    Call to Hold
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl p-12 text-center" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
            <p className="text-sm" style={{ color: "rgba(245,240,235,0.5)" }}>No used bikes in stock right now. Check back soon or <Link href="/trade-in" className="text-[var(--color-accent)]">submit a trade-in</Link> to start the process.</p>
          </div>
        )}

        <div className="mt-12 rounded-xl p-8 text-center" style={{ background: "rgba(212,160,74,0.05)", border: "1px solid rgba(212,160,74,0.15)" }}>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-3">Looking to upgrade?</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(245,240,235,0.5)" }}>Trade in your current bike and ride something new today.</p>
          <Link href="/trade-in" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Start a Trade-In <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
