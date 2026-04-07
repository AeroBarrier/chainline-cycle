"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Bike } from "@/lib/data";
import { formatFinancing } from "@/lib/financing";

export function BikeCard({ bike, index = 0 }: { bike: Bike; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/bikes/${bike.slug}`} className="group block">
        {/* Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4" style={{ background: "rgba(245,240,235,0.025)" }}>
          <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="w-full h-full">
            <Image src={bike.image} alt={bike.title} fill className="object-contain p-6 transition-all duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </motion.div>
          {bike.salePrice && (
            <span className="absolute top-4 left-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">Sale</span>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(6,6,6,0.4) 100%)" }} />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              View Details
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-1">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1.5 transition-colors group-hover:text-[var(--color-accent)]" style={{ color: "rgba(245,240,235,0.35)" }}>
            {bike.brand} &middot; {bike.discipline}
          </p>
          <h3 className="text-[15px] font-medium text-[var(--color-fg)] mb-2 leading-snug tracking-tight">{bike.title}</h3>
          <div className="flex items-baseline gap-2.5">
            {bike.salePrice ? (
              <>
                <span className="font-mono text-[15px] font-semibold text-[var(--color-accent)]">${bike.salePrice.toLocaleString()}</span>
                <span className="font-mono text-xs line-through" style={{ color: "rgba(245,240,235,0.25)" }}>${bike.price.toLocaleString()}</span>
              </>
            ) : (
              <span className="font-mono text-[15px] font-semibold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
            )}
            <span className="text-[10px] font-mono" style={{ color: "rgba(245,240,235,0.25)" }}>
              {formatFinancing(bike.salePrice || bike.price)}/mo
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
