import type { Metadata } from "next";
import { TradeInForm } from "./trade-in-form";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Trade In Your Bike",
  description: "Trade in your current bike toward a new one at ChainLine Cycle Kelowna. Get a quote in 24 hours.",
};

export default function TradeInPage() {
  return (
    <div className="pt-10 pb-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <AnimateIn>
          <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Trade-In Program</p>
          <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl text-[var(--color-fg)] mb-4">Trade in. Ride new.</h1>
          <p className="text-[16px] text-[var(--color-muted)] leading-relaxed max-w-lg mb-12">
            Bring us your current bike and ride out on something better. We assess every trade-in in person and give you store credit toward your next bike.
          </p>
        </AnimateIn>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {[
            { step: "01", title: "Submit your bike", desc: "Fill out the form below with your bike details and a few photos. Takes 2 minutes." },
            { step: "02", title: "Get a quote", desc: "We review your submission and send you a trade-in value within 24 hours." },
            { step: "03", title: "Ride something new", desc: "Bring your bike in, pick your upgrade, and we apply the credit. Same day." },
          ].map((s, i) => (
            <AnimateIn key={s.step} delay={i * 0.1}>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-6">
                <span className="font-[family-name:var(--font-playfair-display)] text-3xl text-[var(--color-accent)]">{s.step}</span>
                <h3 className="text-[15px] font-semibold text-[var(--color-fg)] mt-3 mb-2">{s.title}</h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{s.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* What we accept */}
        <AnimateIn className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair-display)] text-xl text-[var(--color-fg)] mb-4">What we accept</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-5 bg-green-50 border border-green-200">
              <p className="text-[14px] font-semibold text-green-900 mb-2">We take</p>
              <ul className="space-y-1.5 text-[13px] text-green-800">
                <li>Mountain bikes (hardtail and full suspension)</li>
                <li>Road and gravel bikes</li>
                <li>Commuter and city bikes</li>
                <li>E-bikes (with working battery and motor)</li>
                <li>Fat bikes</li>
                <li>Kids bikes in good condition</li>
              </ul>
            </div>
            <div className="rounded-lg p-5 bg-red-50 border border-red-200">
              <p className="text-[14px] font-semibold text-red-900 mb-2">We pass on</p>
              <ul className="space-y-1.5 text-[13px] text-red-800">
                <li>Department store bikes (Canadian Tire, Walmart)</li>
                <li>Bikes with cracked or damaged frames</li>
                <li>Bikes with missing major components</li>
                <li>Stolen bikes (we check serial numbers)</li>
              </ul>
            </div>
          </div>
        </AnimateIn>

        {/* Form */}
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-playfair-display)] text-xl text-[var(--color-fg)] mb-6">Submit your bike</h2>
          <TradeInForm />
        </AnimateIn>
      </div>
    </div>
  );
}
