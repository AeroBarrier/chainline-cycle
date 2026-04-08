"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Bike } from "@/lib/data";
import { formatFinancing } from "@/lib/financing";

export function BikeCard({ bike, index = 0 }: { bike: Bike; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/bikes/${bike.slug}/`} className="group block">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-surface)] mb-4">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="w-full h-full">
            <Image src={bike.image} alt={bike.title} fill className="object-contain p-8" sizes="(max-width: 768px) 50vw, 25vw" />
          </motion.div>
          {bike.salePrice && <span className="absolute top-3 left-3 bg-[var(--color-sale)] text-white text-[9px] font-[family-name:var(--font-space-mono)] font-bold uppercase tracking-wider px-2 py-1 rounded">Sale</span>}
        </div>
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] mb-1">{bike.brand}</p>
        <h3 className="text-[15px] font-medium text-[var(--color-fg)] mb-1 relative">
          {bike.title}
          <span className="block h-[1px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full mt-0.5" />
        </h3>
        <div className="flex items-baseline gap-2">
          {bike.salePrice ? (
            <>
              <span className="font-[family-name:var(--font-space-mono)] text-[15px] font-bold text-[var(--color-sale)]">${bike.salePrice.toLocaleString()}</span>
              <span className="font-[family-name:var(--font-space-mono)] text-[12px] line-through text-[var(--color-muted)]">${bike.price.toLocaleString()}</span>
            </>
          ) : (
            <span className="font-[family-name:var(--font-space-mono)] text-[15px] font-bold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
          )}
        </div>
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-muted)] mt-0.5">or {formatFinancing(bike.salePrice || bike.price)}</p>
      </Link>
    </motion.div>
  );
}
