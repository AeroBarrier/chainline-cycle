"use client";
import { useState } from "react";
import { Send, Check, Camera } from "lucide-react";

const conditions = ["Excellent (like new)", "Good (normal wear)", "Fair (cosmetic damage, fully functional)", "Needs work (mechanical issues)"];
const types = ["Mountain (hardtail)", "Mountain (full suspension)", "Road", "Gravel", "Commuter/City", "E-bike", "Fat bike", "Kids", "Other"];

const inputCls = "w-full px-4 py-3 rounded-lg text-[14px] text-[var(--color-fg)] bg-white border border-[var(--color-border)] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-colors";
const labelCls = "block text-[13px] font-medium text-[var(--color-fg)] mb-1.5";

export function TradeInForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl p-8 text-center bg-green-50 border border-green-200">
        <Check className="w-10 h-10 text-[var(--color-success)] mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-playfair-display)] text-2xl text-[var(--color-fg)] mb-2">Submission received</h3>
        <p className="text-[14px] text-[var(--color-muted)]">We{"'"}ll review your bike and send a trade-in quote within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5 rounded-xl bg-white border border-[var(--color-border)] p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label className={labelCls}>Your name *</label><input type="text" required className={inputCls} placeholder="Full name" /></div>
        <div><label className={labelCls}>Email *</label><input type="email" required className={inputCls} placeholder="you@example.com" /></div>
        <div><label className={labelCls}>Phone</label><input type="tel" className={inputCls} placeholder="250-555-1234" /></div>
        <div>
          <label className={labelCls}>Bike type *</label>
          <select required className={inputCls}><option value="">Select type</option>{types.map((t) => <option key={t} value={t}>{t}</option>)}</select>
        </div>
        <div><label className={labelCls}>Brand *</label><input type="text" required className={inputCls} placeholder="e.g. Trek, Specialized" /></div>
        <div><label className={labelCls}>Model *</label><input type="text" required className={inputCls} placeholder="e.g. Fuel EX 8" /></div>
        <div><label className={labelCls}>Year *</label><input type="text" required className={inputCls} placeholder="e.g. 2022" /></div>
        <div><label className={labelCls}>Frame size</label><input type="text" className={inputCls} placeholder="e.g. Large, 56cm" /></div>
      </div>

      <div>
        <label className={labelCls}>Condition *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {conditions.map((c) => (
            <label key={c} className="flex items-center gap-3 rounded-lg p-3 cursor-pointer border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)] transition-colors">
              <input type="radio" name="condition" value={c} required className="accent-[var(--color-accent)] w-4 h-4" />
              <span className="text-[13px] text-[var(--color-fg)]">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelCls}>Upgrades or modifications?</label>
        <textarea rows={3} className={inputCls} placeholder="e.g. New wheels, dropper post, recent suspension service" />
      </div>

      <div>
        <label className={labelCls}>Photos (optional)</label>
        <div className="rounded-lg p-6 text-center border-2 border-dashed border-[var(--color-border)] bg-[var(--color-surface)]">
          <Camera className="w-6 h-6 mx-auto mb-2 text-[var(--color-muted)]" />
          <p className="text-[13px] text-[var(--color-muted)]">Email photos to bikes@chainline.ca</p>
        </div>
      </div>

      <div>
        <label className={labelCls}>What bike are you looking at?</label>
        <input type="text" className={inputCls} placeholder="e.g. Transition Sentinel, not sure yet" />
      </div>

      <button type="submit" className="w-full bg-[var(--color-hero-bg)] text-white py-3.5 rounded-lg text-[14px] font-medium hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center gap-2">
        <Send className="w-4 h-4" /> Submit for Quote
      </button>
      <p className="text-[11px] text-center text-[var(--color-muted)]">We respond within 24 hours. No obligation.</p>
    </form>
  );
}
