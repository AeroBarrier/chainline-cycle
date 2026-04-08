"use client";
import { useState } from "react";
import { Calendar, MapPin, Clock, TrendingUp, Ruler, Users } from "lucide-react";
import { upcomingRides, getTypeColor, type RideEvent } from "@/lib/events";
import { AnimateIn } from "@/components/ui/animate-in";
import { RideMap } from "./ride-map";

const types = ["all", "road", "gravel", "mtb", "social"] as const;
const diffColors: Record<string, string> = { easy: "#4A7C59", moderate: "#D97706", hard: "#B44A3F" };

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return { month: d.toLocaleDateString("en-CA", { month: "short" }).toUpperCase(), day: d.getDate(), weekday: d.toLocaleDateString("en-CA", { weekday: "short" }) };
}

export default function RidesPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<string | undefined>();

  const filtered = filter === "all" ? upcomingRides : upcomingRides.filter(r => r.type === filter);

  return (
    <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10">
      <AnimateIn>
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Community</p>
        <h1 className="font-[family-name:var(--font-playfair-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--color-fg)] tracking-[-0.02em] mb-2">Rides & Events</h1>
        <p className="text-[14px] text-[var(--color-muted)] mb-8">Weekly group rides and special events from the ChainLine crew. All levels welcome.</p>
      </AnimateIn>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {types.map(t => (
          <button key={t} onClick={() => setFilter(t)} className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-colors ${filter === t ? "bg-[var(--color-hero-bg)] text-white" : "bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-border)]"}`}>
            {t === "all" ? "All" : t === "mtb" ? "MTB" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Map + List */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Map */}
        <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[var(--color-border)]" style={{ minHeight: 500, background: "#1a1a2e" }}>
          <RideMap events={filtered} selectedId={selected} onSelect={setSelected} />
        </div>

        {/* Event list */}
        <div className="lg:col-span-2 space-y-3 max-h-[600px] overflow-y-auto">
          {filtered.map((ride, i) => {
            const dt = formatDate(ride.date);
            const isSelected = selected === ride.id;
            return (
              <AnimateIn key={ride.id} delay={i * 0.06}>
                <button
                  onClick={() => setSelected(isSelected ? undefined : ride.id)}
                  className={`w-full text-left rounded-xl p-4 border transition-all ${isSelected ? "border-[var(--color-accent)] bg-[rgba(139,115,85,0.04)]" : "border-[var(--color-border)] bg-white hover:border-[var(--color-muted)]"}`}
                >
                  <div className="flex gap-4">
                    {/* Date badge */}
                    <div className="shrink-0 w-14 text-center">
                      <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-wider" style={{ color: getTypeColor(ride.type) }}>{dt.month}</p>
                      <p className="font-[family-name:var(--font-playfair-display)] text-2xl text-[var(--color-fg)] leading-none">{dt.day}</p>
                      <p className="text-[10px] text-[var(--color-muted)]">{dt.weekday}</p>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: getTypeColor(ride.type) }} />
                        <h3 className="text-[14px] font-semibold text-[var(--color-fg)] truncate">{ride.title}</h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[var(--color-muted)] mb-2">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ride.time}</span>
                        <span className="flex items-center gap-1"><Ruler className="w-3 h-3" /> {ride.distance}</span>
                        <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {ride.elevation}</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium" style={{ background: `${diffColors[ride.difficulty]}15`, color: diffColors[ride.difficulty] }}>{ride.difficulty}</span>
                      </div>

                      <p className="flex items-start gap-1 text-[12px] text-[var(--color-muted)] mb-2"><MapPin className="w-3 h-3 mt-0.5 shrink-0" /> {ride.meetingPoint}</p>

                      {isSelected && (
                        <div className="mt-2 pt-2 border-t border-[var(--color-border)]">
                          <p className="text-[13px] text-[var(--color-fg)] leading-relaxed mb-3">{ride.description}</p>
                          {ride.recurring && <p className="font-[family-name:var(--font-space-mono)] text-[10px] text-[var(--color-accent)] uppercase tracking-wider mb-3">{ride.recurring}</p>}
                          <a href="mailto:bikes@chainline.ca?subject=RSVP: ${ride.title}" className="inline-flex items-center gap-1.5 bg-[var(--color-hero-bg)] text-white px-4 py-2 rounded-lg text-[12px] font-medium hover:bg-[var(--color-accent)] transition-colors">
                            <Users className="w-3 h-3" /> Join Ride
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </AnimateIn>
            );
          })}
        </div>
      </div>

      {/* Trail guide link */}
      <AnimateIn className="mt-12 pt-8 border-t border-[var(--color-border)]">
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">Ride Guide</p>
        <p className="text-[14px] text-[var(--color-muted)] mb-4">Looking for route suggestions? Check our <a href="/trails/" className="text-[var(--color-accent)] hover:underline">trail guide</a> for GPS tracks, distances, and recommended bikes for every local trail.</p>
      </AnimateIn>
    </div>
  );
}
