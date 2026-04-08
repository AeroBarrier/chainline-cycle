"use client";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, Lock } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, total } = useCart();
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]" onClick={closeCart} />
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md flex flex-col bg-[var(--color-bg)] shadow-2xl border-l border-[var(--color-border)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
          <h2 className="text-[15px] font-medium flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-[var(--color-accent)]" /> Cart ({itemCount})</h2>
          <button onClick={closeCart} className="p-1 text-[var(--color-muted)] hover:text-[var(--color-fg)]"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16"><ShoppingBag className="w-8 h-8 mx-auto mb-3 text-[var(--color-border)]" /><p className="text-[13px] text-[var(--color-muted)]">Your cart is empty</p></div>
          ) : items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-3 py-3 border-b border-[var(--color-border)]">
              <div className="w-16 h-16 rounded-lg bg-[var(--color-surface)] shrink-0"><Image src={item.image} alt={item.name} width={64} height={64} className="w-full h-full object-contain p-1" /></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] font-medium truncate">{item.name}</h3>
                {item.size && <p className="text-[11px] text-[var(--color-muted)]">Size: {item.size}</p>}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-surface)]"><Minus className="w-3 h-3" /></button>
                    <span className="text-[12px] font-medium w-5 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-surface)]"><Plus className="w-3 h-3" /></button>
                  </div>
                  <span className="font-[family-name:var(--font-space-mono)] text-[13px] font-bold">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="shrink-0 mt-1 text-[var(--color-muted)] hover:text-[var(--color-sale)]"><X className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-[var(--color-border)] space-y-3">
            <div className="flex justify-between"><span className="text-[var(--color-muted)]">Subtotal</span><span className="font-[family-name:var(--font-space-mono)] font-bold text-lg">${total.toLocaleString()}</span></div>
            <p className="text-[11px] text-[var(--color-muted)]">Shipping calculated at checkout. Free pickup in Kelowna.</p>
            <button className="w-full bg-[var(--color-hero-bg)] text-white py-3.5 rounded-lg text-[13px] font-medium hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center gap-2">
              <Lock className="w-3.5 h-3.5" /> Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
