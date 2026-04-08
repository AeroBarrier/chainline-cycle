"use client";
import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import type { Bike } from "@/lib/data";
import type { Accessory } from "@/lib/accessories";

export function AddToCartSection({ bike, upsells }: { bike: Bike; upsells: Accessory[] }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(bike.sizes[Math.min(1, bike.sizes.length - 1)]);
  const [addedUpsells, setAddedUpsells] = useState<Set<string>>(new Set());
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({ id: `${bike.id}-${selectedSize}`, name: bike.title, price: bike.salePrice || bike.price, image: bike.image, size: selectedSize, type: "bike" });
    addedUpsells.forEach((accId) => {
      const acc = upsells.find((u) => u.id === accId);
      if (acc) addItem({ id: acc.id, name: acc.name, price: acc.price, image: acc.image, type: "accessory" });
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const toggleUpsell = (id: string) => {
    setAddedUpsells((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  return (
    <>
      {/* Size — segmented control */}
      <div className="mb-5">
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)] mb-2">Size</p>
        <div className="inline-flex rounded-lg border border-[var(--color-border)] overflow-hidden">
          {bike.sizes.map((size) => (
            <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2.5 text-[13px] font-[family-name:var(--font-space-mono)] transition-colors ${selectedSize === size ? "bg-[var(--color-hero-bg)] text-white" : "bg-white text-[var(--color-fg)] hover:bg-[var(--color-surface)]"}`} style={{ borderRight: "1px solid var(--color-border)" }}>
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Upsells */}
      {upsells.length > 0 && (
        <div className="mb-5">
          <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)] mb-2">Complete Your Setup</p>
          <div className="space-y-2">
            {upsells.map((acc) => (
              <button key={acc.id} onClick={() => toggleUpsell(acc.id)} className={`w-full flex items-center gap-3 rounded-lg p-3 text-left transition-all border ${addedUpsells.has(acc.id) ? "border-[var(--color-accent)] bg-[rgba(139,115,85,0.04)]" : "border-[var(--color-border)] hover:border-[var(--color-muted)]"}`}>
                <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${addedUpsells.has(acc.id) ? "bg-[var(--color-accent)]" : "border border-[var(--color-border)]"}`}>
                  {addedUpsells.has(acc.id) && <Check className="w-3 h-3 text-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium">{acc.name}</p>
                  <p className="text-[11px] text-[var(--color-muted)] font-light">{acc.description}</p>
                </div>
                <span className="font-[family-name:var(--font-space-mono)] text-[12px] font-bold shrink-0">+${acc.price}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add to Cart — dark primary button */}
      <button onClick={handleAddToCart} className={`w-full py-4 rounded-lg text-[14px] font-medium transition-all flex items-center justify-center gap-2 ${justAdded ? "bg-[var(--color-success)] text-white" : "bg-[var(--color-hero-bg)] text-white hover:bg-[var(--color-accent)]"}`}>
        {justAdded ? <><Check className="w-4 h-4" /> Added to Cart</> : <><Plus className="w-4 h-4" /> Add to Cart</>}
      </button>
    </>
  );
}
