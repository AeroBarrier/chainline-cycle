import { bikes, getBikeBySlug } from "@/lib/data";
import { getUpsellsForBike } from "@/lib/accessories";
import { BikeDetail } from "./bike-detail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return bikes.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const bike = getBikeBySlug(params.slug);
  if (!bike) return {};
  return { title: bike.title, description: bike.description };
}

export default function BikePDP({ params }: { params: { slug: string } }) {
  const bike = getBikeBySlug(params.slug);
  if (!bike) notFound();

  const related = bikes.filter((b) => b.id !== bike.id && b.discipline === bike.discipline).slice(0, 3);
  const upsells = getUpsellsForBike(bike.discipline);

  return <BikeDetail bike={bike} related={related} upsells={upsells} />;
}
