import Link from "next/link";
import Image from "next/image";
import type { Bike } from "@/lib/data";
import { formatFinancing } from "@/lib/financing";

export function BikeCard({ bike, index = 0 }: { bike: Bike; index?: number }) {
  return (
    <Link href={`/bikes/${bike.slug}/`} className="group block">
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--color-light)] mb-3">
        <Image src={bike.image} alt={bike.title} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
        {bike.salePrice && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded">Sale</span>
        )}
      </div>
      {/* Info */}
      <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-muted)] mb-1">{bike.brand}</p>
      <h3 className="text-[15px] font-semibold text-[var(--color-fg)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">{bike.title}</h3>
      <div className="flex items-baseline gap-2">
        {bike.salePrice ? (
          <>
            <span className="text-[15px] font-bold text-red-600">${bike.salePrice.toLocaleString()}</span>
            <span className="text-[13px] line-through text-[var(--color-muted)]">${bike.price.toLocaleString()}</span>
          </>
        ) : (
          <span className="text-[15px] font-bold text-[var(--color-fg)]">${bike.price.toLocaleString()}</span>
        )}
      </div>
      <p className="text-[11px] text-[var(--color-muted)] mt-0.5">or {formatFinancing(bike.salePrice || bike.price)}/mo</p>
    </Link>
  );
}
