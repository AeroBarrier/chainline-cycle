import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Truck } from "lucide-react";
import { bikes, getBikeBySlug } from "@/lib/data";
import { BikeCard } from "@/components/bikes/bike-card";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return bikes.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const bike = getBikeBySlug(params.slug);
  if (!bike) return {};
  return { title: bike.title, description: bike.description };
}

export default function BikePDP({ params }: { params: { slug: string } }) {
  const bike = getBikeBySlug(params.slug);
  if (!bike) notFound();

  const related = bikes.filter((b) => b.id !== bike.id && b.discipline === bike.discipline).slice(0, 3);

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link href="/bikes" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.5)" }}>
          <ArrowLeft className="w-4 h-4" /> All Bikes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-square" style={{ background: "rgba(245,240,235,0.03)", border: "1px solid rgba(245,240,235,0.06)" }}>
            <Image src={bike.image} alt={bike.title} width={800} height={800} className="w-full h-full object-contain p-8" priority />
          </div>

          {/* Details */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-2">{bike.brand}</p>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl text-[var(--color-fg)] mb-4">{bike.title}</h1>
            <div className="flex items-baseline gap-3 mb-6">
              {bike.salePrice ? (
                <>
                  <span className="font-mono text-2xl font-semibold text-[var(--color-accent)]">${bike.salePrice.toLocaleString()}</span>
                  <span className="font-mono text-lg line-through" style={{ color: "rgba(245,240,235,0.3)" }}>${bike.price.toLocaleString()}</span>
                </>
              ) : (
                <span className="font-mono text-2xl font-semibold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
              )}
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,235,0.6)" }}>{bike.description}</p>

            {bike.teamNote && (
              <div className="rounded-lg p-4 mb-6" style={{ background: "rgba(212,160,74,0.05)", border: "1px solid rgba(212,160,74,0.15)" }}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-2">Why we carry this bike</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.7)" }}>{bike.teamNote}</p>
              </div>
            )}

            {/* Size selector */}
            <div className="mb-6">
              <p className="text-xs font-medium mb-3" style={{ color: "rgba(245,240,235,0.5)" }}>Size</p>
              <div className="flex flex-wrap gap-2">
                {bike.sizes.map((size, i) => (
                  <button key={size} className={`px-4 py-2 rounded-lg text-sm font-mono transition-colors ${i === 1 ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : ""}`} style={i !== 1 ? { border: "1px solid rgba(245,240,235,0.1)", color: "rgba(245,240,235,0.6)" } : {}}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-[var(--color-accent)] text-[var(--color-bg)] py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity mb-4">
              {bike.inStock ? "Add to Cart" : "Contact for Availability"}
            </button>
            <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(245,240,235,0.4)" }}>
              {bike.inStock && <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[var(--color-success)]" /> In stock</span>}
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free pickup in store</span>
            </div>

            {/* Specs */}
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(245,240,235,0.06)" }}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-4">Specifications</p>
              <dl className="space-y-3">
                {Object.entries(bike.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-baseline py-2" style={{ borderBottom: "1px solid rgba(245,240,235,0.04)" }}>
                    <dt className="text-xs capitalize" style={{ color: "rgba(245,240,235,0.4)" }}>{key}</dt>
                    <dd className="text-xs text-right max-w-[60%] font-mono" style={{ color: "rgba(245,240,235,0.7)" }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Also Consider</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-8">Similar Bikes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((b) => <BikeCard key={b.id} bike={b} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
