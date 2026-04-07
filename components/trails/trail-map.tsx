"use client";
import { useEffect, useRef, useState } from "react";
import type { Trail } from "@/lib/trails";

export function TrailMap({ trails, selectedSlug, onSelect }: { trails: Trail[]; selectedSlug?: string; onSelect?: (slug: string) => void }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Dynamic import to avoid SSR issues
    import("maplibre-gl").then((maplibregl) => {
      // Inject CSS
      if (!document.querySelector('link[href*="maplibre-gl"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css";
        document.head.appendChild(link);
      }

      const map = new maplibregl.default.Map({
        container: mapRef.current!,
        style: {
          version: 8,
          sources: {
            "carto-dark": {
              type: "raster",
              tiles: ["https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"],
              tileSize: 256,
              attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>',
            },
          },
          layers: [{ id: "carto-dark", type: "raster", source: "carto-dark", minzoom: 0, maxzoom: 19 }],
        },
        center: selectedSlug ? (trails.find(t => t.slug === selectedSlug)?.center || [-119.496, 49.888]) : [-119.496, 49.888],
        zoom: selectedSlug ? 10 : 7.5,
        attributionControl: false,
      });

      mapInstance.current = map;

      map.addControl(new maplibregl.default.NavigationControl(), "top-right");

      map.on("load", () => {
        setLoaded(true);

        // Add trail routes
        trails.forEach((trail) => {
          if (trail.coordinates.length > 1) {
            map.addSource(`trail-${trail.slug}`, {
              type: "geojson",
              data: {
                type: "Feature",
                properties: { name: trail.name },
                geometry: { type: "LineString", coordinates: trail.coordinates },
              },
            });
            map.addLayer({
              id: `trail-line-${trail.slug}`,
              type: "line",
              source: `trail-${trail.slug}`,
              layout: { "line-join": "round", "line-cap": "round" },
              paint: {
                "line-color": trail.color,
                "line-width": selectedSlug === trail.slug ? 4 : 2.5,
                "line-opacity": selectedSlug && selectedSlug !== trail.slug ? 0.25 : 0.85,
              },
            });
          }

          // Markers
          const el = document.createElement("div");
          Object.assign(el.style, {
            width: "12px", height: "12px", borderRadius: "50%",
            background: trail.color, border: "2px solid rgba(245,240,235,0.8)",
            cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
            transform: selectedSlug === trail.slug ? "scale(1.6)" : "scale(1)",
            boxShadow: selectedSlug === trail.slug ? `0 0 12px ${trail.color}` : "none",
          });
          el.onmouseenter = () => { el.style.transform = "scale(1.5)"; };
          el.onmouseleave = () => { el.style.transform = selectedSlug === trail.slug ? "scale(1.6)" : "scale(1)"; };
          if (onSelect) el.onclick = () => onSelect(trail.slug);

          new maplibregl.default.Marker({ element: el })
            .setLngLat(trail.center)
            .setPopup(
              new maplibregl.default.Popup({ offset: 12, closeButton: false })
                .setHTML(`<div style="background:#1a1a1a;color:#F5F0EB;padding:8px 12px;border-radius:8px;font-size:12px;"><strong>${trail.name}</strong><br/><span style="opacity:0.6">${trail.distance}km &middot; ${trail.elevation}m gain</span></div>`)
            )
            .addTo(map);
        });

        // Fit to selected trail
        if (selectedSlug) {
          const t = trails.find((tr) => tr.slug === selectedSlug);
          if (t && t.coordinates.length > 1) {
            const bounds = new maplibregl.default.LngLatBounds();
            t.coordinates.forEach((c) => bounds.extend(c as [number, number]));
            map.fitBounds(bounds, { padding: 60, duration: 1200 });
          } else if (t) {
            map.flyTo({ center: t.center, zoom: 12, duration: 1200 });
          }
        }
      });
    });

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, [trails, selectedSlug, onSelect]);

  return (
    <div className="relative w-full h-full" style={{ minHeight: 400 }}>
      <div ref={mapRef} className="w-full h-full rounded-xl overflow-hidden" />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl" style={{ background: "rgba(10,10,10,0.9)" }}>
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-mono" style={{ color: "rgba(245,240,235,0.4)" }}>Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
