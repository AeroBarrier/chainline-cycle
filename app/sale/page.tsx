import { getSaleBikes } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sale Bikes", description: "Sale bikes at ChainLine Cycle Kelowna. Discounts on road, mountain, and gravel bikes." };

export default function SalePage() {
  const saleBikes = getSaleBikes();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Deals</p>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)] mb-4">Sale Bikes</h1>
        <p className="text-sm mb-10 max-w-lg" style={{ color: "rgba(245,240,235,0.5)" }}>
          Previous model year, demos, and closeouts. Same quality, less money.
        </p>
        {saleBikes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {saleBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl p-12 text-center" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
            <p className="text-sm" style={{ color: "rgba(245,240,235,0.5)" }}>No sale bikes at the moment. Check back soon or call us for deals.</p>
          </div>
        )}
      </div>
    </div>
  );
}
