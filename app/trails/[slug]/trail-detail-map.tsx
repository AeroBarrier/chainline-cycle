"use client";
import { TrailMap } from "@/components/trails/trail-map";
import type { Trail } from "@/lib/trails";

export function TrailDetailMap({ trail, allTrails }: { trail: Trail; allTrails: Trail[] }) {
  return <TrailMap trails={allTrails} selectedSlug={trail.slug} />;
}
