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

  const related = bikes.filter((b) => b.id !== bike.id && b.discipline === bike.discipline).slice(0, 4);
  const upsells = getUpsellsForBike(bike.discipline);

  return (
    <div className="pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
        <Link href="/bikes/" className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to bikes
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-square bg-[var(--color-light)] lg:sticky lg:top-28">
            <Image src={bike.image} alt={bike.title} width={800} height={800} className="w-full h-full object-contain p-8" priority />
          </div>

          {/* Product Info */}
          <div className="py-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">{bike.brand}</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-fg)] mb-3">{bike.title}</h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-1">
              {bike.salePrice ? (
                <>
                  <span className="text-2xl font-bold text-red-600">${bike.salePrice.toLocaleString()}</span>
                  <span className="text-lg line-through text-[var(--color-muted)]">${bike.price.toLocaleString()}</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
              )}
            </div>
            <p className="text-[12px] text-[var(--color-muted)] mb-5">or {formatFinancing(bike.salePrice || bike.price)}/mo with Affirm</p>

            {/* Description */}
            <p className="text-[14px] text-[var(--color-muted)] leading-relaxed mb-5">{bike.description}</p>

            {/* Team note */}
            {bike.teamNote && (
              <div className="rounded-lg p-4 mb-5 bg-amber-50 border border-amber-200">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-1">Why We Carry This Bike</p>
                <p className="text-[13px] text-[var(--color-fg)] leading-relaxed">{bike.teamNote}</p>
              </div>
            )}

            {/* Add to cart section (client component) */}
            <AddToCartSection bike={bike} upsells={upsells} />

            {/* Badges */}
            <div className="flex items-center gap-4 mt-4 text-[11px] text-[var(--color-muted)]">
              {bike.inStock && <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-600" /> In stock</span>}
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free pickup in Kelowna</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Ships Canada-wide</span>
            </div>

            {/* Shipping */}
            <div className="mt-5 rounded-lg p-4 bg-[var(--color-light)] border border-[var(--color-border)]">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-2">Shipping Options</p>
              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">In-store pickup (Kelowna)</span><span className="font-semibold text-green-700">Free</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">BC delivery (assembled)</span><span className="font-semibold">$149</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Canada-wide (boxed)</span><span className="font-semibold">$199</span></div>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8">
              <h2 className="text-[16px] font-bold text-[var(--color-fg)] mb-4">Specifications</h2>
              <dl className="divide-y divide-[var(--color-border)]">
                {Object.entries(bike.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2.5">
                    <dt className="text-[13px] text-[var(--color-muted)]">{key}</dt>
                    <dd className="text-[13px] text-[var(--color-fg)] text-right max-w-[60%] font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[var(--color-border)]">
            <h2 className="text-xl font-semibold text-[var(--color-fg)] mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((b, i) => <BikeCard key={b.id} bike={b} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
