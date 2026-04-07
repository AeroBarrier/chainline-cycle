"use client";
import { useState } from "react";
import { Send, Check, Camera } from "lucide-react";

const conditions = ["Excellent (like new)", "Good (normal wear)", "Fair (cosmetic damage, fully functional)", "Needs work (mechanical issues)"];
const disciplines = ["Mountain (hardtail)", "Mountain (full suspension)", "Road", "Gravel", "Commuter/City", "E-bike", "Fat bike", "Kids", "Other"];

export function TradeInForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl p-8 text-center" style={{ background: "rgba(76,175,80,0.05)", border: "1px solid rgba(76,175,80,0.15)" }}>
        <Check className="w-10 h-10 text-[var(--color-success)] mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-2">Submission received</h3>
        <p className="text-sm" style={{ color: "rgba(245,240,235,0.6)" }}>We will review your bike and send you a trade-in quote within 24 hours. Check your email.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-5 rounded-xl p-6 sm:p-8"
      style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Your name *</label>
          <input type="text" required className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)]" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Email *</label>
          <input type="email" required className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)]" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Phone</label>
          <input type="tel" className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)]" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Bike type *</label>
          <select required className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)]" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }}>
            <option value="">Select type</option>
            {disciplines.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Brand *</label>
          <input type="text" required placeholder="e.g. Trek, Specialized, Giant" className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-white/20" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Model *</label>
          <input type="text" required placeholder="e.g. Fuel EX 8, Stumpjumper" className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-white/20" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Year *</label>
          <input type="text" required placeholder="e.g. 2022" className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-white/20" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Frame size</label>
          <input type="text" placeholder="e.g. Large, 56cm" className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-white/20" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Condition *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {conditions.map((c) => (
            <label key={c} className="flex items-center gap-2 rounded-lg p-3 cursor-pointer transition-colors hover:bg-white/5" style={{ border: "1px solid rgba(245,240,235,0.08)" }}>
              <input type="radio" name="condition" value={c} required className="accent-[#D4A04A]" />
              <span className="text-xs" style={{ color: "rgba(245,240,235,0.6)" }}>{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Any upgrades or modifications?</label>
        <textarea rows={3} placeholder="e.g. New wheels, dropper post, recent suspension service" className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-white/20 resize-y" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>Photos (optional but helps us quote faster)</label>
        <div className="rounded-lg p-6 text-center cursor-pointer transition-colors hover:bg-white/5" style={{ border: "2px dashed rgba(245,240,235,0.1)" }}>
          <Camera className="w-6 h-6 mx-auto mb-2" style={{ color: "rgba(245,240,235,0.3)" }} />
          <p className="text-xs" style={{ color: "rgba(245,240,235,0.4)" }}>Drive side photo, detail shots of any damage</p>
          <p className="text-[10px] mt-1" style={{ color: "rgba(245,240,235,0.25)" }}>Photo upload coming soon. For now, email photos to bikes@chainline.ca</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "rgba(245,240,235,0.5)" }}>What bike are you looking at?</label>
        <input type="text" placeholder="e.g. Transition Sentinel, not sure yet" className="w-full px-4 py-2.5 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-white/20" style={{ background: "rgba(245,240,235,0.04)", border: "1px solid rgba(245,240,235,0.1)" }} />
      </div>

      <button type="submit" className="w-full bg-[var(--color-accent)] text-[var(--color-bg)] py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
        <Send className="w-4 h-4" /> Submit for Quote
      </button>
      <p className="text-[10px] text-center" style={{ color: "rgba(245,240,235,0.3)" }}>We respond within 24 hours. No obligation.</p>
    </form>
  );
}
