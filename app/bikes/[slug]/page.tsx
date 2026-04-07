import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Truck, ShieldCheck } from "lucide-react";
import { bikes, getBikeBySlug } from "@/lib/data";
import { getUpsellsForBike } from "@/lib/accessories";
import { BikeCard } from "@/components/bikes/bike-card";
import { AddToCartSection } from "./add-to-cart-section";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatFinancing } from "@/lib/financing";

export function generateStaticParams() {
  return bikes.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) return {};
  return { title: bike.title, description: bike.description };
}

export default async function BikePDP({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) notFound();

  const related = bikes.filter((b) => b.id !== bike.id && b.discipline === bike.discipline).slice(0, 3);
  const upsells = getUpsellsForBike(bike.discipline);

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <Link href="/bikes/" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.5)" }}>
          <ArrowLeft className="w-4 h-4" /> All Bikes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-square lg:sticky lg:top-24" style={{ background: "rgba(245,240,235,0.025)", border: "1px solid rgba(245,240,235,0.04)" }}>
            <Image src={bike.image} alt={bike.title} width={800} height={800} className="w-full h-full object-contain p-8" priority />
          </div>

          {/* Details */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">{bike.brand}</p>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl text-[var(--color-fg)] mb-4">{bike.title}</h1>
            <div className="flex items-baseline gap-3 mb-2">
              {bike.salePrice ? (
                <>
                  <span className="font-mono text-2xl font-semibold text-[var(--color-accent)]">${bike.salePrice.toLocaleString()}</span>
                  <span className="font-mono text-lg line-through" style={{ color: "rgba(245,240,235,0.25)" }}>${bike.price.toLocaleString()}</span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)]">Save ${(bike.price - bike.salePrice).toLocaleString()}</span>
                </>
              ) : (
                <span className="font-mono text-2xl font-semibold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
              )}
            </div>
            <p className="text-xs font-mono mb-6" style={{ color: "rgba(245,240,235,0.35)" }}>
              or {formatFinancing(bike.salePrice || bike.price)}/mo for 24 months with Affirm
            </p>

            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "rgba(245,240,235,0.55)" }}>{bike.description}</p>

            {bike.teamNote && (
              <div className="rounded-xl p-5 mb-6" style={{ background: "rgba(200,150,90,0.04)", border: "1px solid rgba(200,150,90,0.12)" }}>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-2">Why We Carry This Bike</p>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(245,240,235,0.65)" }}>{bike.teamNote}</p>
              </div>
            )}

            {/* Interactive cart section (client component) */}
            <AddToCartSection bike={bike} upsells={upsells} />

            <div className="flex items-center gap-4 mt-4 text-xs" style={{ color: "rgba(245,240,235,0.35)" }}>
              {bike.inStock && <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[var(--color-success)]" /> In stock</span>}
              <span className="flex items-center gap-1.5"><Truck className="w-3 h-3" /> Free local pickup</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> Ships across Canada</span>
            </div>

            {/* Shipping */}
            <div className="mt-6 rounded-xl p-5" style={{ background: "rgba(245,240,235,0.015)", border: "1px solid rgba(245,240,235,0.04)" }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-3">Shipping</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span style={{ color: "rgba(245,240,235,0.5)" }}>In-store pickup (Kelowna)</span><span className="font-mono text-[var(--color-success)]">Free</span></div>
                <div className="flex justify-between"><span style={{ color: "rgba(245,240,235,0.5)" }}>BC delivery (fully assembled)</span><span className="font-mono" style={{ color: "rgba(245,240,235,0.45)" }}>$149</span></div>
                <div className="flex justify-between"><span style={{ color: "rgba(245,240,235,0.5)" }}>Canada-wide (boxed)</span><span className="font-mono" style={{ color: "rgba(245,240,235,0.45)" }}>$199</span></div>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(245,240,235,0.04)" }}>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-5">Full Specifications</p>
              <dl className="space-y-0">
                {Object.entries(bike.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-baseline py-3" style={{ borderBottom: "1px solid rgba(245,240,235,0.03)" }}>
                    <dt className="text-xs shrink-0" style={{ color: "rgba(245,240,235,0.35)" }}>{key}</dt>
                    <dd className="text-xs text-right max-w-[65%] font-mono leading-relaxed" style={{ color: "rgba(245,240,235,0.65)" }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Also Consider</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-8">Similar Bikes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((b, i) => <BikeCard key={b.id} bike={b} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
