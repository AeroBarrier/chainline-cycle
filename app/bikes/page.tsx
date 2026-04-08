"use client";
import { useState } from "react";
import { bikes, brands } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";

const disciplines = ["all", "mountain", "road", "gravel", "commuter", "kids"] as const;

export default function BikesPage() {
  const [activeDiscipline, setActiveDiscipline] = useState("all");
  const [activeBrand, setActiveBrand] = useState("all");

  // Read URL params on mount
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const d = params.get("discipline") || params.get("d");
    const b = params.get("brand");
    if (d && activeDiscipline === "all" && disciplines.includes(d as typeof disciplines[number])) {
      setActiveDiscipline(d);
    }
    if (b && activeBrand === "all") setActiveBrand(b);
  }

  const filtered = bikes.filter(b => {
    if (activeDiscipline !== "all" && b.discipline !== activeDiscipline) return false;
    if (activeBrand !== "all" && b.brand.toLowerCase() !== activeBrand) return false;
    return true;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-playfair-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--color-fg)] tracking-[-0.02em] mb-2">All Bikes</h1>
        <p className="text-[14px] text-[var(--color-muted)]">Showing {filtered.length} of {bikes.length} bikes. Free pickup in Kelowna or ships Canada-wide.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[var(--color-border)]">
        {disciplines.map((d) => (
          <button key={d} onClick={() => { setActiveDiscipline(d); setActiveBrand("all"); }} className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-colors ${activeDiscipline === d ? "bg-[var(--color-hero-bg)] text-white" : "bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-border)]"}`}>
            {d === "all" ? "All" : d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
        <span className="w-px h-8 bg-[var(--color-border)] mx-1 self-center" />
        {brands.map((b) => (
          <button key={b.slug} onClick={() => { setActiveBrand(activeBrand === b.slug ? "all" : b.slug); setActiveDiscipline("all"); }} className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-colors ${activeBrand === b.slug ? "bg-[var(--color-hero-bg)] text-white" : "bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-border)]"}`}>
            {b.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {filtered.map((bike, i) => <BikeCard key={bike.id} bike={bike} index={i} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[var(--color-muted)]">No bikes match your filters.</p>
          <button onClick={() => { setActiveDiscipline("all"); setActiveBrand("all"); }} className="mt-3 text-[var(--color-accent)] text-sm font-medium hover:underline">Clear filters</button>
        </div>
      )}
    </div>
  );
}
