"use client";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";

// Curated grid linking to their Instagram. In production, use Instagram Basic Display API.
const posts = [
  { color: "rgba(200,150,90,0.15)", caption: "Spring tune-up season" },
  { color: "rgba(76,175,80,0.12)", caption: "Knox Mountain singletrack" },
  { color: "rgba(200,150,90,0.1)", caption: "New Marin delivery day" },
  { color: "rgba(33,150,243,0.12)", caption: "KVR rail trail vibes" },
  { color: "rgba(156,39,176,0.1)", caption: "Custom wheel build" },
  { color: "rgba(200,150,90,0.08)", caption: "Shop life" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">@chainline_cycle_kelowna</p>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,4vw,3rem)] text-[var(--color-fg)]">Follow the Ride</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="https://www.instagram.com/chainline_cycle_kelowna/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors">
              Follow on Instagram
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/chainline_cycle_kelowna/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              style={{ background: post.color, border: "1px solid rgba(245,240,235,0.04)" }}
            >
              {/* Placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-[11px] text-white font-medium">{post.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
