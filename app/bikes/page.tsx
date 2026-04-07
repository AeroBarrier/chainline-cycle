import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bikes", description: "Shop bikes from Marin, Transition, Pivot, Surly, Bianchi, Moots, and Salsa at ChainLine Cycle in Kelowna, BC." };

const disciplines = ["mountain", "road", "gravel", "commuter", "e-bike", "fat"] as const;

export default function BikesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Shop</p>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)] mb-4">All Bikes</h1>
        <p className="text-sm mb-10 max-w-lg" style={{ color: "rgba(245,240,235,0.5)" }}>
          Every bike in our showroom. In stock and ready to ride, or built to order.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-accent)] text-[var(--color-bg)]">All</span>
          {disciplines.map((d) => (
            <span key={d} className="px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.1)", color: "rgba(245,240,235,0.5)" }}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </span>
          ))}
          <span className="mx-2" style={{ borderLeft: "1px solid rgba(245,240,235,0.1)" }} />
          {brands.map((b) => (
            <span key={b.slug} className="px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.1)", color: "rgba(245,240,235,0.5)" }}>
              {b.name}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </div>
  );
}
