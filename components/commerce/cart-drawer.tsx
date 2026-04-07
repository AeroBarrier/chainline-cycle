"use client";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, CreditCard, Lock } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, total } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md flex flex-col" style={{ background: "#0F0F0F", borderLeft: "1px solid rgba(245,240,235,0.08)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(245,240,235,0.08)" }}>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[var(--color-accent)]" />
            <h2 className="font-medium text-[var(--color-fg)]">Cart ({itemCount})</h2>
          </div>
          <button onClick={closeCart} className="p-1 transition-colors hover:text-white" style={{ color: "rgba(245,240,235,0.5)" }}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-10 h-10 mx-auto mb-3" style={{ color: "rgba(245,240,235,0.15)" }} />
              <p className="text-sm" style={{ color: "rgba(245,240,235,0.4)" }}>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 py-3" style={{ borderBottom: "1px solid rgba(245,240,235,0.06)" }}>
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0" style={{ background: "rgba(245,240,235,0.03)" }}>
                  <Image src={item.image} alt={item.name} width={64} height={64} className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-[var(--color-fg)] truncate">{item.name}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(245,240,235,0.4)" }}>
                    {item.size && `Size: ${item.size}`}
                    {item.type === "accessory" && "Add-on"}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded flex items-center justify-center" style={{ border: "1px solid rgba(245,240,235,0.1)" }}>
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded flex items-center justify-center" style={{ border: "1px solid rgba(245,240,235,0.1)" }}>
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-mono text-sm text-[var(--color-accent)]">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="shrink-0 mt-1">
                  <X className="w-4 h-4" style={{ color: "rgba(245,240,235,0.3)" }} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 space-y-4" style={{ borderTop: "1px solid rgba(245,240,235,0.08)" }}>
            {/* Shipping note */}
            <div className="rounded-lg p-3 text-center" style={{ background: "rgba(212,160,74,0.05)", border: "1px solid rgba(212,160,74,0.15)" }}>
              <p className="text-xs" style={{ color: "rgba(245,240,235,0.6)" }}>Free pickup in-store. Shipping calculated at checkout.</p>
            </div>

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span style={{ color: "rgba(245,240,235,0.5)" }}>Subtotal</span>
                <span className="font-mono text-[var(--color-fg)]">${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "rgba(245,240,235,0.5)" }}>Shipping</span>
                <span className="font-mono text-xs" style={{ color: "rgba(245,240,235,0.4)" }}>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-sm pt-2" style={{ borderTop: "1px solid rgba(245,240,235,0.06)" }}>
                <span className="font-medium text-[var(--color-fg)]">Total</span>
                <span className="font-mono text-lg font-semibold text-[var(--color-accent)]">${total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout buttons */}
            <button className="w-full bg-[var(--color-accent)] text-[var(--color-bg)] py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Checkout
            </button>
            <div className="flex gap-2">
              <button className="flex-1 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5" style={{ background: "#000", border: "1px solid rgba(245,240,235,0.15)", color: "var(--color-fg)" }}>
                Apple Pay
              </button>
              <button className="flex-1 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5" style={{ background: "#635BFF", color: "#fff" }}>
                <CreditCard className="w-3.5 h-3.5" /> Pay with Card
              </button>
            </div>
            <p className="text-[10px] text-center flex items-center justify-center gap-1" style={{ color: "rgba(245,240,235,0.3)" }}>
              <Lock className="w-3 h-3" /> Secure checkout powered by Shopify
            </p>
          </div>
        )}
      </div>
    </>
  );
}
