export interface RideEvent {
  id: string;
  title: string;
  type: "road" | "gravel" | "mtb" | "social";
  date: string;
  time: string;
  meetingPoint: string;
  meetingLat: number;
  meetingLng: number;
  distance: string;
  elevation: string;
  difficulty: "easy" | "moderate" | "hard";
  description: string;
  recurring?: string;
}

export const upcomingRides: RideEvent[] = [
  {
    id: "tuesday-road",
    title: "Tuesday Road Ride",
    type: "road",
    date: "2026-04-14",
    time: "6:00 PM",
    meetingPoint: "ChainLine Cycle, 1139 Ellis St",
    meetingLat: 49.8863,
    meetingLng: -119.4966,
    distance: "50 km",
    elevation: "450 m",
    difficulty: "moderate",
    description: "Weekly road loop through the Kelowna benchlands. Drop bars, good fitness. Regroup at climbs.",
    recurring: "Every Tuesday",
  },
  {
    id: "thursday-gravel",
    title: "Thursday Gravel Social",
    type: "gravel",
    date: "2026-04-16",
    time: "5:30 PM",
    meetingPoint: "Myra-Bellevue Trailhead",
    meetingLat: 49.8425,
    meetingLng: -119.4128,
    distance: "30 km",
    elevation: "380 m",
    difficulty: "moderate",
    description: "KVR rail trail out-and-back with optional singletrack detours. All gravel bikes welcome. Post-ride beers.",
    recurring: "Every Thursday",
  },
  {
    id: "saturday-mtb",
    title: "Saturday Morning MTB",
    type: "mtb",
    date: "2026-04-18",
    time: "8:00 AM",
    meetingPoint: "Knox Mountain Park Parking",
    meetingLat: 49.9048,
    meetingLng: -119.4847,
    distance: "20 km",
    elevation: "520 m",
    difficulty: "hard",
    description: "Knox Mountain laps. Intermediate+ riders. Full-face optional for the gnar.",
    recurring: "Every Saturday",
  },
  {
    id: "sunday-social",
    title: "Sunday Coffee Cruise",
    type: "social",
    date: "2026-04-19",
    time: "9:00 AM",
    meetingPoint: "ChainLine Cycle, 1139 Ellis St",
    meetingLat: 49.8863,
    meetingLng: -119.4966,
    distance: "25 km",
    elevation: "150 m",
    difficulty: "easy",
    description: "Casual lakeside loop ending at a coffee shop. Any bike. Any pace. Bring a friend.",
    recurring: "Every Sunday",
  },
  {
    id: "spring-gravel-fondo",
    title: "Spring Gravel Fondo",
    type: "gravel",
    date: "2026-05-03",
    time: "7:00 AM",
    meetingPoint: "Penticton Lakeside Resort",
    meetingLat: 49.4911,
    meetingLng: -119.5938,
    distance: "85 km",
    elevation: "1200 m",
    difficulty: "hard",
    description: "Annual spring gravel epic. KVR to Naramata Bench and back. Supported with water and snack stops.",
  },
  {
    id: "crawford-enduro",
    title: "Crawford Trails Enduro",
    type: "mtb",
    date: "2026-05-10",
    time: "9:00 AM",
    meetingPoint: "Crawford Trails Parking",
    meetingLat: 49.8578,
    meetingLng: -119.5289,
    distance: "15 km",
    elevation: "480 m",
    difficulty: "hard",
    description: "Timed enduro stages on Crawford's best trails. Categories for all levels. Prizes from ChainLine.",
  },
];

const typeColors: Record<string, string> = { road: "#3B82F6", gravel: "#D97706", mtb: "#22C55E", social: "#A855F7" };
export function getTypeColor(type: string): string { return typeColors[type] || "#8B7355"; }
