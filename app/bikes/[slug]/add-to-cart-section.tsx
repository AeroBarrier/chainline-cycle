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
      {/* Size */}
      <div className="mb-5">
        <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
          {bike.sizes.map((size) => (
            <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${selectedSize === size ? "bg-[var(--color-fg)] text-white" : "bg-[var(--color-light)] text-[var(--color-fg)] hover:bg-[var(--color-border)]"}`}>
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Upsells */}
      {upsells.length > 0 && (
        <div className="mb-5">
          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-2">Add to Your Order</p>
          <div className="space-y-2">
            {upsells.map((acc) => (
              <button key={acc.id} onClick={() => toggleUpsell(acc.id)} className={`w-full flex items-center gap-3 rounded-lg p-3 text-left transition-all border ${addedUpsells.has(acc.id) ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5" : "border-[var(--color-border)] hover:border-[var(--color-muted)]"}`}>
                <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${addedUpsells.has(acc.id) ? "bg-[var(--color-accent)]" : "border border-[var(--color-border)]"}`}>
                  {addedUpsells.has(acc.id) && <Check className="w-3 h-3 text-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[var(--color-fg)]">{acc.name}</p>
                  <p className="text-[11px] text-[var(--color-muted)]">{acc.description}</p>
                </div>
                <span className="text-[13px] font-semibold text-[var(--color-fg)] shrink-0">+${acc.price}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add to Cart */}
      <button onClick={handleAddToCart} className={`w-full py-3.5 rounded-lg text-[14px] font-semibold transition-all flex items-center justify-center gap-2 ${justAdded ? "bg-green-600 text-white" : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]"}`}>
        {justAdded ? <><Check className="w-4 h-4" /> Added to Cart</> : <><Plus className="w-4 h-4" /> Add to Cart</>}
      </button>
    </>
  );
}
