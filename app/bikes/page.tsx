import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "All Bikes", description: "Shop bikes from Marin and Bianchi at ChainLine Cycle in Kelowna, BC." };

export default function BikesPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-playfair-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--color-fg)] tracking-[-0.02em] mb-2">All Bikes</h1>
        <p className="text-[14px] text-[var(--color-muted)] font-light">{bikes.length} bikes in stock. Free pickup in Kelowna or ships Canada-wide.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[var(--color-border)]">
        {["All", "Mountain", "Road", "Gravel", "Commuter", "Kids"].map((d) => (
          <span key={d} className="px-4 py-2 rounded-lg text-[12px] font-medium cursor-pointer bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-border)] transition-colors">{d}</span>
        ))}
        <span className="w-px h-8 bg-[var(--color-border)] mx-1 self-center" />
        {brands.map((b) => (
          <span key={b.slug} className="px-4 py-2 rounded-lg text-[12px] font-medium cursor-pointer bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-border)] transition-colors">{b.name}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {bikes.map((bike, i) => <BikeCard key={bike.id} bike={bike} index={i} />)}
      </div>
    </div>
  );
}
