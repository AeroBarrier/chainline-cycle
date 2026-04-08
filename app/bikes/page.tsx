import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "All Bikes", description: "Shop bikes from Marin and Bianchi at ChainLine Cycle in Kelowna, BC. Mountain, road, gravel, and commuter." };

const disciplines = [
  { label: "All", value: "all" },
  { label: "Mountain", value: "mountain" },
  { label: "Road", value: "road" },
  { label: "Gravel", value: "gravel" },
  { label: "Commuter", value: "commuter" },
  { label: "Kids", value: "kids" },
];

export default function BikesPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-fg)] mb-2">All Bikes</h1>
        <p className="text-[14px] text-[var(--color-muted)]">{bikes.length} bikes in stock. Free pickup in Kelowna or ships Canada-wide.</p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[var(--color-border)]">
        {disciplines.map((d) => (
          <span key={d.value} className="px-4 py-2 rounded-lg text-[12px] font-medium cursor-pointer transition-colors bg-[var(--color-light)] text-[var(--color-fg)] hover:bg-[var(--color-border)]">
            {d.label}
          </span>
        ))}
        <span className="mx-1" />
        {brands.map((b) => (
          <span key={b.slug} className="px-4 py-2 rounded-lg text-[12px] font-medium cursor-pointer transition-colors bg-[var(--color-light)] text-[var(--color-fg)] hover:bg-[var(--color-border)]">
            {b.name}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
        {bikes.map((bike, i) => (
          <BikeCard key={bike.id} bike={bike} index={i} />
        ))}
      </div>
    </div>
  );
}
