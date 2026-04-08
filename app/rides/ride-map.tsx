"use client";
import { useEffect, useRef, useState } from "react";
import { getTypeColor, type RideEvent } from "@/lib/events";

export function RideMap({ events, selectedId, onSelect }: { events: RideEvent[]; selectedId?: string; onSelect?: (id: string) => void }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    import("maplibre-gl").then((maplibregl) => {
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
          sources: { "carto": { type: "raster", tiles: ["https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"], tileSize: 256, attribution: "\u00a9 CARTO \u00a9 OSM" } },
          layers: [{ id: "carto", type: "raster", source: "carto" }],
        },
        center: [-119.496, 49.888],
        zoom: 11,
        attributionControl: false,
      });
      mapInstance.current = map;
      map.addControl(new maplibregl.default.NavigationControl(), "top-right");

      map.on("load", () => {
        setLoaded(true);
        events.forEach((ride) => {
          const el = document.createElement("div");
          const color = getTypeColor(ride.type);
          const isSel = selectedId === ride.id;
          Object.assign(el.style, { width: "14px", height: "14px", borderRadius: "50%", background: color, border: "2px solid white", cursor: "pointer", transition: "transform 0.2s", transform: isSel ? "scale(1.5)" : "scale(1)", boxShadow: isSel ? `0 0 10px ${color}` : "none" });
          el.onmouseenter = () => { el.style.transform = "scale(1.4)"; };
          el.onmouseleave = () => { el.style.transform = isSel ? "scale(1.5)" : "scale(1)"; };
          if (onSelect) el.onclick = () => onSelect(ride.id);

          new maplibregl.default.Marker({ element: el })
            .setLngLat([ride.meetingLng, ride.meetingLat])
            .setPopup(new maplibregl.default.Popup({ offset: 12, closeButton: false }).setHTML(
              `<div style="background:#1C1C1A;color:#F7F5F0;padding:8px 12px;border-radius:8px;font-size:12px;"><strong>${ride.title}</strong><br><span style="opacity:0.6">${ride.time} \u00B7 ${ride.distance}</span></div>`
            ))
            .addTo(map);
        });

        if (selectedId) {
          const r = events.find(e => e.id === selectedId);
          if (r) map.flyTo({ center: [r.meetingLng, r.meetingLat], zoom: 13, duration: 800 });
        }
      });
    });

    return () => { mapInstance.current?.remove(); mapInstance.current = null; };
  }, [events, selectedId, onSelect]);

  return (
    <div className="relative w-full h-full" style={{ minHeight: 500 }}>
      <div ref={mapRef} className="w-full h-full" />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#1a1a2e" }}>
          <div className="w-6 h-6 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
