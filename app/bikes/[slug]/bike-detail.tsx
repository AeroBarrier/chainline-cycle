"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Check, Truck, Plus, ShieldCheck } from "lucide-react";
import { useCart } from "@/lib/cart";
import { BikeCard } from "@/components/bikes/bike-card";
import type { Bike } from "@/lib/data";
import type { Accessory } from "@/lib/accessories";
import { formatFinancing } from "@/lib/financing";

export function BikeDetail({ bike, related, upsells }: { bike: Bike; related: Bike[]; upsells: Accessory[] }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(bike.sizes[1] || bike.sizes[0]);
  const [addedUpsells, setAddedUpsells] = useState<Set<string>>(new Set());
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    const price = bike.salePrice || bike.price;
    addItem({ id: bike.id, name: bike.title, price, image: bike.image, size: selectedSize, type: "bike" });

    // Add selected upsells
    addedUpsells.forEach((accId) => {
      const acc = upsells.find((u) => u.id === accId);
      if (acc) addItem({ id: acc.id, name: acc.name, price: acc.price, image: acc.image, type: "accessory" });
    });

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const toggleUpsell = (id: string) => {
    setAddedUpsells((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/bikes" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.5)" }}>
          <ArrowLeft className="w-4 h-4" /> All Bikes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-square lg:sticky lg:top-24" style={{ background: "rgba(245,240,235,0.03)", border: "1px solid rgba(245,240,235,0.06)" }}>
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
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)]">
                    Save ${(bike.price - bike.salePrice).toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="font-mono text-2xl font-semibold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
              )}
            </div>
            <p className="text-xs font-mono mb-4" style={{ color: "rgba(245,240,235,0.4)" }}>
              or {formatFinancing(bike.salePrice || bike.price)} for 24 months with <span className="text-[var(--color-fg)]">Affirm</span>. 0% APR available.
            </p>
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
                {bike.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${selectedSize === size ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : "hover:bg-white/5"}`} style={selectedSize !== size ? { border: "1px solid rgba(245,240,235,0.1)", color: "rgba(245,240,235,0.6)" } : {}}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Upsells */}
            {upsells.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-medium mb-3" style={{ color: "rgba(245,240,235,0.5)" }}>Add to your order</p>
                <div className="space-y-2">
                  {upsells.map((acc) => (
                    <button key={acc.id} onClick={() => toggleUpsell(acc.id)} className="w-full flex items-center gap-3 rounded-lg p-3 text-left transition-all" style={{ background: addedUpsells.has(acc.id) ? "rgba(212,160,74,0.08)" : "rgba(245,240,235,0.02)", border: addedUpsells.has(acc.id) ? "1px solid rgba(212,160,74,0.3)" : "1px solid rgba(245,240,235,0.06)" }}>
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${addedUpsells.has(acc.id) ? "bg-[var(--color-accent)]" : ""}`} style={!addedUpsells.has(acc.id) ? { border: "1px solid rgba(245,240,235,0.15)" } : {}}>
                        {addedUpsells.has(acc.id) && <Check className="w-3 h-3 text-[var(--color-bg)]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-[var(--color-fg)]">{acc.name}</p>
                        <p className="text-[11px]" style={{ color: "rgba(245,240,235,0.4)" }}>{acc.description}</p>
                      </div>
                      <span className="font-mono text-xs text-[var(--color-accent)] shrink-0">+${acc.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className={`w-full py-3.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${justAdded ? "bg-[var(--color-success)] text-white" : "bg-[var(--color-accent)] text-[var(--color-bg)] hover:opacity-90"}`}>
              {justAdded ? <><Check className="w-4 h-4" /> Added to Cart</> : bike.inStock ? <><Plus className="w-4 h-4" /> Add to Cart</> : "Contact for Availability"}
            </button>

            <div className="flex items-center gap-4 mt-3 text-xs" style={{ color: "rgba(245,240,235,0.4)" }}>
              {bike.inStock && <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[var(--color-success)]" /> In stock</span>}
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free local pickup</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Ships across Canada</span>
            </div>

            {/* Shipping options */}
            <div className="mt-6 rounded-lg p-4" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">Shipping</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span style={{ color: "rgba(245,240,235,0.6)" }}>In-store pickup (Kelowna)</span><span className="font-mono text-[var(--color-success)]">Free</span></div>
                <div className="flex justify-between"><span style={{ color: "rgba(245,240,235,0.6)" }}>BC delivery (fully assembled)</span><span className="font-mono" style={{ color: "rgba(245,240,235,0.5)" }}>$149</span></div>
                <div className="flex justify-between"><span style={{ color: "rgba(245,240,235,0.6)" }}>Canada-wide (boxed)</span><span className="font-mono" style={{ color: "rgba(245,240,235,0.5)" }}>$199</span></div>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(245,240,235,0.06)" }}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-4">Full Specifications</p>
              <dl className="space-y-0">
                {Object.entries(bike.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-baseline py-3" style={{ borderBottom: "1px solid rgba(245,240,235,0.04)" }}>
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
