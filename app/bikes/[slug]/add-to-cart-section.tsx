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
      {/* Size selector */}
      <div className="mb-6">
        <p className="text-xs font-medium mb-3" style={{ color: "rgba(245,240,235,0.4)" }}>Size</p>
        <div className="flex flex-wrap gap-2">
          {bike.sizes.map((size) => (
            <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2.5 rounded-full text-[13px] font-mono transition-all ${selectedSize === size ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : "hover:bg-white/5"}`} style={selectedSize !== size ? { border: "1px solid rgba(245,240,235,0.08)", color: "rgba(245,240,235,0.55)" } : {}}>
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Upsells */}
      {upsells.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-medium mb-3" style={{ color: "rgba(245,240,235,0.4)" }}>Complete Your Setup</p>
          <div className="space-y-2">
            {upsells.map((acc) => (
              <button key={acc.id} onClick={() => toggleUpsell(acc.id)} className="w-full flex items-center gap-3 rounded-xl p-3.5 text-left transition-all" style={{ background: addedUpsells.has(acc.id) ? "rgba(200,150,90,0.06)" : "rgba(245,240,235,0.015)", border: addedUpsells.has(acc.id) ? "1px solid rgba(200,150,90,0.2)" : "1px solid rgba(245,240,235,0.04)" }}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${addedUpsells.has(acc.id) ? "bg-[var(--color-accent)]" : ""}`} style={!addedUpsells.has(acc.id) ? { border: "1px solid rgba(245,240,235,0.12)" } : {}}>
                  {addedUpsells.has(acc.id) && <Check className="w-3 h-3 text-[var(--color-bg)]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[var(--color-fg)]">{acc.name}</p>
                  <p className="text-[11px]" style={{ color: "rgba(245,240,235,0.35)" }}>{acc.description}</p>
                </div>
                <span className="font-mono text-xs text-[var(--color-accent)] shrink-0">+${acc.price}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add to Cart */}
      <button onClick={handleAddToCart} className={`w-full py-4 rounded-full text-[14px] font-semibold transition-all flex items-center justify-center gap-2 ${justAdded ? "bg-[var(--color-success)] text-white" : "bg-[var(--color-fg)] text-[var(--color-bg)] hover:bg-[var(--color-accent)]"}`}>
        {justAdded ? <><Check className="w-4 h-4" /> Added to Cart</> : <><Plus className="w-4 h-4" /> Add to Cart</>}
      </button>
    </>
  );
}
