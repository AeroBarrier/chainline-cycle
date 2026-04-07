import type { Metadata } from "next";
import { TradeInForm } from "./trade-in-form";

export const metadata: Metadata = {
  title: "Trade In Your Bike",
  description: "Trade in your current bike toward a new one at ChainLine Cycle Kelowna. Get a quote in 24 hours. Used bike trade-in program for road, mountain, and gravel bikes.",
};

export default function TradeInPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Trade-In Program</p>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[var(--color-fg)] mb-4">Trade in. Ride new.</h1>
        <p className="text-lg max-w-xl mb-6" style={{ color: "rgba(245,240,235,0.5)" }}>
          Bring us your current bike and ride out on something better. We assess every trade-in in person and give you store credit toward your next bike.
        </p>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {[
            { step: "01", title: "Submit your bike", desc: "Fill out the form below with your bike details and a few photos. Takes 2 minutes." },
            { step: "02", title: "Get a quote", desc: "We review your submission and send you a trade-in value within 24 hours. No obligation." },
            { step: "03", title: "Ride something new", desc: "Bring your bike in, pick your upgrade, and we apply the credit. Same day." },
          ].map((s) => (
            <div key={s.step} className="rounded-xl p-6" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
              <span className="font-mono text-2xl font-semibold text-[var(--color-accent)]">{s.step}</span>
              <h3 className="text-sm font-medium text-[var(--color-fg)] mt-3 mb-2">{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,235,0.5)" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* What we accept */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-4">What we accept</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg p-4" style={{ background: "rgba(76,175,80,0.05)", border: "1px solid rgba(76,175,80,0.15)" }}>
              <p className="text-sm font-medium text-[var(--color-fg)] mb-2">We take</p>
              <ul className="space-y-1.5 text-xs" style={{ color: "rgba(245,240,235,0.6)" }}>
                <li>Mountain bikes (hardtail and full suspension)</li>
                <li>Road and gravel bikes</li>
                <li>Commuter and city bikes</li>
                <li>E-bikes (with working battery and motor)</li>
                <li>Fat bikes</li>
                <li>Kids bikes in good condition</li>
              </ul>
            </div>
            <div className="rounded-lg p-4" style={{ background: "rgba(229,62,62,0.05)", border: "1px solid rgba(229,62,62,0.15)" }}>
              <p className="text-sm font-medium text-[var(--color-fg)] mb-2">We pass on</p>
              <ul className="space-y-1.5 text-xs" style={{ color: "rgba(245,240,235,0.6)" }}>
                <li>Department store bikes (Canadian Tire, Walmart)</li>
                <li>Bikes with cracked or damaged frames</li>
                <li>Bikes with missing major components</li>
                <li>Stolen bikes (we check serial numbers)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-4">Common questions</h2>
          <div className="space-y-4">
            {[
              { q: "How is the trade-in value determined?", a: "We assess brand, model year, component spec, condition, and current market value. We aim to give you the best value we can while keeping prices fair for the next rider." },
              { q: "Do I have to buy a new bike to trade in?", a: "Yes, trade-in credit is applied toward a purchase at ChainLine. We do not buy bikes outright for cash." },
              { q: "Can I use trade-in credit on service or accessories?", a: "Trade-in credit applies to bikes and frames. It cannot be applied to service, parts, or accessories." },
              { q: "What happens to my traded-in bike?", a: "We tune it up and list it in our used bikes collection. Every used bike leaves the shop in rideable condition with a safety check." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-lg p-4" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
                <p className="text-sm font-medium text-[var(--color-fg)] mb-1">{faq.q}</p>
                <p className="text-xs" style={{ color: "rgba(245,240,235,0.5)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div id="form">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[var(--color-fg)] mb-6">Submit your bike</h2>
          <TradeInForm />
        </div>
      </div>
    </div>
  );
}
