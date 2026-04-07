import Link from "next/link";
import { ArrowLeft, MapPin, TrendingUp, Ruler, AlertCircle } from "lucide-react";
import { getAllTrails, getTrailBySlug } from "@/lib/trails";
import { bikes } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import { TrailDetailMap } from "./trail-detail-map";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllTrails().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);
  if (!trail) return {};
  return { title: trail.name, description: `${trail.name}: ${trail.distance}km, ${trail.elevation}m elevation. ${trail.tagline}` };
}

const difficultyColors: Record<string, string> = { easy: "#4CAF50", moderate: "#FF9800", hard: "#FF5722", expert: "#9C27B0" };

export default async function TrailDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);
  if (!trail) notFound();

  const allTrails = getAllTrails();
  const recommended = trail.recommendedBikes.map((slug) => bikes.find((b) => b.slug === slug)).filter(Boolean);

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/trails" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.5)" }}>
          <ArrowLeft className="w-4 h-4" /> All Trails
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium" style={{ background: `${difficultyColors[trail.difficulty]}20`, color: difficultyColors[trail.difficulty] }}>
              {trail.difficulty}
            </span>
            <span className="text-xs font-mono" style={{ color: "rgba(245,240,235,0.4)" }}>{trail.discipline}</span>
          </div>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-5xl text-[var(--color-fg)] mb-2">{trail.name}</h1>
          <p className="text-lg" style={{ color: "rgba(245,240,235,0.5)" }}>{trail.tagline}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Ruler, label: "Distance", value: `${trail.distance} km` },
            { icon: TrendingUp, label: "Elevation", value: `${trail.elevation} m` },
            { icon: MapPin, label: "Discipline", value: trail.discipline.charAt(0).toUpperCase() + trail.discipline.slice(1) },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl p-4 text-center" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
              <Icon className="w-4 h-4 mx-auto mb-2 text-[var(--color-accent)]" />
              <p className="font-mono text-lg font-semibold text-[var(--color-fg)]">{value}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest mt-0.5" style={{ color: "rgba(245,240,235,0.4)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        {trail.coordinates.length > 0 && (
          <div className="aspect-[2/1] rounded-xl overflow-hidden mb-8" style={{ border: "1px solid rgba(245,240,235,0.06)" }}>
            <TrailDetailMap trail={trail} allTrails={allTrails} />
          </div>
        )}

        {/* Description */}
        <div className="mb-10">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.7)" }}>{trail.description}</p>
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">Highlights</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trail.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,235,0.6)" }}>
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[var(--color-accent)]" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Bikes */}
        {recommended.length > 0 && (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Best Bikes for This Trail</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-6">Recommended Rides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {recommended.map((bike) => bike && <BikeCard key={bike.id} bike={bike} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
