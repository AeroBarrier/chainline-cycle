import type { Metadata } from "next";
import { getAllTrails } from "@/lib/trails";
import { TrailIndex } from "./trail-index";

export const metadata: Metadata = {
  title: "Trail Guide",
  description: "Kelowna and BC Interior cycling trail guide. Mountain biking, gravel routes, and rail trails with maps, conditions, and recommended bikes.",
};

export default function TrailsPage() {
  const trails = getAllTrails();
  return <TrailIndex trails={trails} />;
}
