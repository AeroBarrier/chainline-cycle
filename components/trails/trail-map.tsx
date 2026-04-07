"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Trail } from "@/lib/trails";

export function TrailMap({ trails, selectedSlug, onSelect }: { trails: Trail[]; selectedSlug?: string; onSelect?: (slug: string) => void }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapRef.current,
      style: {
        version: 8,
        sources: {
          "osm-tiles": {
            type: "raster",
            tiles: ["https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}@2x.png"],
            tileSize: 512,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OSM</a>',
          },
        },
        layers: [{ id: "osm-tiles", type: "raster", source: "osm-tiles", minzoom: 0, maxzoom: 19 }],
      },
      center: [-119.4960, 49.8880],
      zoom: 8,
      attributionControl: false,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    map.current.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");

    map.current.on("load", () => {
      if (!map.current) return;

      // Add trail routes
      trails.forEach((trail) => {
        if (trail.coordinates.length > 1) {
          map.current!.addSource(`trail-${trail.slug}`, {
            type: "geojson",
            data: {
              type: "Feature",
              properties: { name: trail.name, slug: trail.slug },
              geometry: { type: "LineString", coordinates: trail.coordinates },
            },
          });
          map.current!.addLayer({
            id: `trail-line-${trail.slug}`,
            type: "line",
            source: `trail-${trail.slug}`,
            layout: { "line-join": "round", "line-cap": "round" },
            paint: {
              "line-color": trail.color,
              "line-width": selectedSlug === trail.slug ? 4 : 2.5,
              "line-opacity": selectedSlug && selectedSlug !== trail.slug ? 0.3 : 0.85,
            },
          });
        }

        // Add marker for all trails
        const el = document.createElement("div");
        el.style.cssText = `width:14px;height:14px;border-radius:50%;background:${trail.color};border:2px solid rgba(245,240,235,0.8);cursor:pointer;transition:transform 0.2s;`;
        if (selectedSlug === trail.slug) {
          el.style.transform = "scale(1.5)";
          el.style.boxShadow = `0 0 12px ${trail.color}80`;
        }
        el.addEventListener("mouseenter", () => { el.style.transform = "scale(1.4)"; });
        el.addEventListener("mouseleave", () => { el.style.transform = selectedSlug === trail.slug ? "scale(1.5)" : "scale(1)"; });

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat(trail.center)
          .addTo(map.current!);

        if (onSelect) {
          el.addEventListener("click", () => onSelect(trail.slug));
        }

        const popup = new maplibregl.Popup({ offset: 12, closeButton: false, className: "trail-popup" })
          .setHTML(`<div style="background:#1a1a1a;color:#F5F0EB;padding:8px 12px;border-radius:8px;font-family:var(--font-dm-sans),sans-serif;"><p style="font-size:13px;font-weight:600;margin:0 0 2px;">${trail.name}</p><p style="font-size:11px;opacity:0.6;margin:0;">${trail.distance}km &middot; ${trail.elevation}m gain</p></div>`);
        marker.setPopup(popup);
      });

      // Fit to selected trail or all trails
      if (selectedSlug) {
        const t = trails.find((tr) => tr.slug === selectedSlug);
        if (t && t.coordinates.length > 1) {
          const bounds = new maplibregl.LngLatBounds();
          t.coordinates.forEach((c) => bounds.extend(c as [number, number]));
          map.current!.fitBounds(bounds, { padding: 60, duration: 1000 });
        } else if (t) {
          map.current!.flyTo({ center: t.center, zoom: 12, duration: 1000 });
        }
      }
    });

    return () => { map.current?.remove(); map.current = null; };
  }, [trails, selectedSlug, onSelect]);

  return (
    <div ref={mapRef} className="w-full h-full rounded-xl overflow-hidden" style={{ minHeight: 400 }} />
  );
}
