"use client";

const messages = [
  "FREE SHIPPING ON ORDERS OVER $150 IN BC",
  "TRADE IN YOUR OLD BIKE — GET A QUOTE IN 24 HOURS",
  "EXPERT ASSEMBLY ON EVERY BIKE — READY TO RIDE",
  "NOW CARRYING BIANCHI — CELESTE SINCE 1885",
];

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 w-full z-50 overflow-hidden" style={{ height: 36, background: "#0A0A0A", borderBottom: "1px solid rgba(200,150,90,0.1)" }}>
      <div className="flex items-center h-full animate-announcement-scroll">
        {[...messages, ...messages, ...messages].map((msg, i) => (
          <span key={i} className="shrink-0 px-12 font-mono text-[10px] tracking-[0.2em] uppercase whitespace-nowrap text-[var(--color-accent)]">
            {msg}
            <span className="mx-8 inline-block" style={{ color: "rgba(200,150,90,0.3)" }}>★</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes announcement-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-announcement-scroll {
          animation: announcement-scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
