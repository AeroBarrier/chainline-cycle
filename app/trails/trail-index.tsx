"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Mountain, Bike, TreePine } from "lucide-react";
import { TrailMap } from "@/components/trails/trail-map";
import type { Trail } from "@/lib/trails";

const difficultyColors: Record<string, string> = {
  easy: "#4CAF50",
  moderate: "#FF9800",
  hard: "#FF5722",
  expert: "#9C27B0",
};

const disciplineIcons: Record<string, React.ElementType> = {
  mountain: Mountain,
  gravel: TreePine,
  road: Bike,
  family: Bike,
};

export function TrailIndex({ trails }: { trails: Trail[] }) {
  const [selected, setSelected] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? trails : trails.filter((t) => t.discipline === filter);
  const disciplines = ["all", "mountain", "gravel", "family"] as const;

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Ride Guide</p>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)] mb-3">Trail Guide</h1>
        <p className="text-sm max-w-xl mb-8" style={{ color: "rgba(245,240,235,0.5)" }}>
          Kelowna mountain biking, Okanagan gravel routes, and BC Interior rail trails. GPS tracks, recommended bikes, and local knowledge from the crew at ChainLine.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {disciplines.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${filter === d ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : ""}`}
              style={filter !== d ? { border: "1px solid rgba(245,240,235,0.1)", color: "rgba(245,240,235,0.5)" } : {}}
            >
              {d === "all" ? "All" : d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>

        {/* Map + List */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className="lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:min-h-[600px] rounded-xl overflow-hidden" style={{ border: "1px solid rgba(245,240,235,0.06)" }}>
            <TrailMap trails={filtered} selectedSlug={selected} onSelect={setSelected} />
          </div>

          {/* Trail list */}
          <div className="lg:col-span-2 space-y-3 max-h-[600px] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
            {filtered.map((trail) => {
              const Icon = disciplineIcons[trail.discipline] || Bike;
              return (
                <Link
                  key={trail.slug}
                  href={`/trails/${trail.slug}`}
                  onMouseEnter={() => setSelected(trail.slug)}
                  onMouseLeave={() => setSelected(undefined)}
                  className={`block rounded-xl p-4 transition-all ${selected === trail.slug ? "ring-1 ring-[var(--color-accent)]" : ""}`}
                  style={{ background: selected === trail.slug ? "rgba(212,160,74,0.05)" : "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${trail.color}15` }}>
                      <Icon className="w-4 h-4" style={{ color: trail.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-[var(--color-fg)] mb-0.5 truncate">{trail.name}</h3>
                      <p className="text-xs mb-2 truncate" style={{ color: "rgba(245,240,235,0.4)" }}>{trail.tagline}</p>
                      <div className="flex items-center gap-3 text-xs" style={{ color: "rgba(245,240,235,0.5)" }}>
                        <span className="font-mono">{trail.distance}km</span>
                        <span className="font-mono">{trail.elevation}m</span>
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium" style={{ background: `${difficultyColors[trail.difficulty]}20`, color: difficultyColors[trail.difficulty] }}>
                          {trail.difficulty}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 mt-1 opacity-30" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
