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

export function generateStaticParams() { return bikes.map((b) => ({ slug: b.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  return bike ? { title: bike.title, description: bike.description } : {};
}

export default async function BikePDP({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) notFound();
  const related = bikes.filter((b) => b.id !== bike.id && b.discipline === bike.discipline).slice(0, 4);
  const upsells = getUpsellsForBike(bike.discipline);

  return (
    <div className="pb-20">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-4">
        <Link href="/bikes/" className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"><ArrowLeft className="w-3.5 h-3.5" /> All bikes</Link>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-square bg-[var(--color-surface)] lg:sticky lg:top-28">
            <Image src={bike.image} alt={bike.title} width={800} height={800} className="w-full h-full object-contain p-10" priority />
          </div>

          {/* Info */}
          <div className="py-2">
            <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] mb-2">{bike.brand}</p>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--color-fg)] tracking-[-0.02em] mb-3">{bike.title}</h1>

            <div className="flex items-baseline gap-3 mb-1">
              {bike.salePrice ? (
                <><span className="font-[family-name:var(--font-space-mono)] text-[28px] font-bold text-[var(--color-sale)]">${bike.salePrice.toLocaleString()}</span><span className="font-[family-name:var(--font-space-mono)] text-[16px] line-through text-[var(--color-muted)]">${bike.price.toLocaleString()}</span></>
              ) : (
                <span className="font-[family-name:var(--font-space-mono)] text-[28px] font-bold">${bike.price.toLocaleString()}</span>
              )}
            </div>
            <p className="font-[family-name:var(--font-space-mono)] text-[11px] text-[var(--color-muted)] mb-6">or {formatFinancing(bike.salePrice || bike.price)} with Affirm</p>

            <p className="text-[15px] text-[var(--color-muted)] leading-relaxed font-light mb-6">{bike.description}</p>

            {bike.teamNote && (
              <div className="rounded-lg p-4 mb-6 border-l-4 border-[var(--color-accent)]" style={{ background: "rgba(139,115,85,0.06)" }}>
                <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] mb-1">Why We Carry This</p>
                <p className="text-[13px] text-[var(--color-fg)] leading-relaxed">{bike.teamNote}</p>
              </div>
            )}

            <AddToCartSection bike={bike} upsells={upsells} />

            <div className="flex items-center gap-4 mt-4 text-[11px] text-[var(--color-muted)]">
              {bike.inStock && <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[var(--color-success)]" /> In stock</span>}
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free pickup</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Ships Canada-wide</span>
            </div>

            {/* Shipping */}
            <div className="mt-5 rounded-lg p-4 bg-[var(--color-surface)] border border-[var(--color-border)]">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)] mb-2">Shipping</p>
              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between"><span className="text-[var(--color-muted)] font-light">In-store pickup (Kelowna)</span><span className="font-[family-name:var(--font-space-mono)] font-bold text-[var(--color-success)]">Free</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)] font-light">BC delivery (assembled)</span><span className="font-[family-name:var(--font-space-mono)] font-bold">$149</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)] font-light">Canada-wide (boxed)</span><span className="font-[family-name:var(--font-space-mono)] font-bold">$199</span></div>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8">
              <h2 className="font-[family-name:var(--font-playfair-display)] text-[18px] mb-4">Specifications</h2>
              <dl>
                {Object.entries(bike.specs).map(([key, value], i) => (
                  <div key={key} className={`flex justify-between py-2.5 ${i % 2 === 0 ? "bg-[var(--color-surface)]" : ""} px-3 -mx-3 rounded`}>
                    <dt className="text-[13px] text-[var(--color-muted)] font-light">{key}</dt>
                    <dd className="font-[family-name:var(--font-space-mono)] text-[12px] text-[var(--color-fg)] text-right max-w-[60%]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[var(--color-border)]">
            <h2 className="font-[family-name:var(--font-playfair-display)] text-xl mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">{related.map((b, i) => <BikeCard key={b.id} bike={b} index={i} />)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
