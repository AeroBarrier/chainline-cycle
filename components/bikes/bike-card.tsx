import Link from "next/link";
import Image from "next/image";
import type { Bike } from "@/lib/data";
import { formatFinancing } from "@/lib/financing";

export function BikeCard({ bike }: { bike: Bike }) {
  return (
    <Link href={`/bikes/${bike.slug}`} className="group block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(245,240,235,0.02)", border: "1px solid rgba(245,240,235,0.06)" }}>
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "rgba(245,240,235,0.03)" }}>
        <Image src={bike.image} alt={bike.title} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        {bike.salePrice && (
          <span className="absolute top-3 left-3 bg-[var(--color-accent)] text-[var(--color-bg)] text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Sale</span>
        )}
      </div>
      <div className="p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(245,240,235,0.4)" }}>{bike.brand}</p>
        <h3 className="text-sm font-medium text-[var(--color-fg)] mb-2 leading-snug">{bike.title}</h3>
        <div className="flex items-baseline gap-2">
          {bike.salePrice ? (
            <>
              <span className="font-mono text-sm font-semibold text-[var(--color-accent)]">${bike.salePrice.toLocaleString()}</span>
              <span className="font-mono text-xs line-through" style={{ color: "rgba(245,240,235,0.3)" }}>${bike.price.toLocaleString()}</span>
            </>
          ) : (
            <span className="font-mono text-sm font-semibold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
          )}
        </div>
        <p className="text-[10px] font-mono mt-1" style={{ color: "rgba(245,240,235,0.35)" }}>
          or {formatFinancing(bike.salePrice || bike.price)} for 24 mo
        </p>
      </div>
    </Link>
  );
}
