import trailGeo from "./trail-geo.json";

export type Trail = {
  slug: string;
  name: string;
  tagline: string;
  discipline: "gravel" | "mountain" | "road" | "family";
  difficulty: "easy" | "moderate" | "hard" | "expert";
  distance: number;
  elevation: number;
  description: string;
  highlights: string[];
  recommendedBikes: string[];
  center: [number, number];
  coordinates: [number, number][];
  color: string;
};

const trailMeta: Record<string, Omit<Trail, "distance" | "elevation" | "center" | "coordinates">> = {
  "okanagan-rail-trail": {
    slug: "okanagan-rail-trail",
    name: "Okanagan Rail Trail",
    tagline: "Kelowna to Vernon on the old railway corridor",
    discipline: "family",
    difficulty: "easy",
    description: "The Okanagan Rail Trail runs 50km from downtown Kelowna to Vernon along the old CN railway corridor. Flat, wide, and mostly packed gravel. Perfect for families, e-bikes, and long easy rides. The trail follows the east side of Okanagan Lake and Wood Lake with stunning views the entire way.",
    highlights: ["Lake views the entire route", "Flat grade, no significant climbs", "Multiple access points and parking areas", "Connects Kelowna, Lake Country, and Vernon"],
    recommendedBikes: ["marin-nicasio-plus", "surly-straggler"],
    color: "#4CAF50",
  },
  "columbia-western-rail-trail": {
    slug: "columbia-western-rail-trail",
    name: "Columbia & Western Rail Trail",
    tagline: "Epic Boundary Country gravel through the Monashees",
    discipline: "gravel",
    difficulty: "hard",
    description: "A multi-day gravel adventure through BC's Boundary Country. The trail follows the historic Columbia & Western Railway from Castlegar through the Monashee Mountains to Midway. Remote, rugged, and deeply rewarding. Expect river crossings, trestle bridges, and long stretches of wilderness.",
    highlights: ["Historic railway trestles and tunnels", "Remote wilderness camping", "Kettle River valley riding", "Connects to the Trans Canada Trail"],
    recommendedBikes: ["surly-straggler", "salsa-cutthroat"],
    color: "#D4A04A",
  },
  "west-side-rd-old-coach-trail": {
    slug: "west-side-rd-old-coach-trail",
    name: "Westside Road & Old Coach Trail",
    tagline: "Okanagan Lake's quiet western shore",
    discipline: "gravel",
    difficulty: "moderate",
    description: "A beautiful gravel loop along the west side of Okanagan Lake. The route combines paved sections of Westside Road with the historic Old Coach Trail, a singletrack and doubletrack route through Fintry Provincial Park. Rolling terrain with some punchy climbs and incredible lake views.",
    highlights: ["Okanagan Lake shoreline views", "Fintry Provincial Park", "Mix of gravel and singletrack", "Quiet roads with minimal traffic"],
    recommendedBikes: ["salsa-cutthroat", "surly-straggler", "marin-nicasio-plus"],
    color: "#2196F3",
  },
  "hedley-nickel-plate": {
    slug: "hedley-nickel-plate",
    name: "Hedley to Nickel Plate",
    tagline: "High alpine gravel with massive elevation",
    discipline: "gravel",
    difficulty: "expert",
    description: "One of BC's most demanding gravel rides. From the small town of Hedley in the Similkameen Valley, the route climbs over 1,500m to the historic Nickel Plate mine site at 2,000m elevation. Loose gravel, steep grades, and exposed alpine terrain. The descent is the reward.",
    highlights: ["2,000m+ alpine riding", "Historic mining roads", "Similkameen Valley views", "Challenging climbing for fit riders"],
    recommendedBikes: ["salsa-cutthroat", "surly-straggler"],
    color: "#FF5722",
  },
  "slocan-valley-rail-trail": {
    slug: "slocan-valley-rail-trail",
    name: "Slocan Valley Rail Trail",
    tagline: "Gentle riverside riding through the Kootenays",
    discipline: "family",
    difficulty: "easy",
    description: "A gentle rail trail following the Slocan River through one of BC's most beautiful valleys. The trail runs from Slocan City to South Slocan with minimal elevation change. Packed gravel surface, covered bridges, and small Kootenay towns along the way.",
    highlights: ["Slocan River views", "Covered bridges", "Small town stops (Lemon Creek, Winlaw)", "Flat, family-friendly grade"],
    recommendedBikes: ["marin-nicasio-plus", "surly-karate-monkey"],
    color: "#9C27B0",
  },
  "slocan-nakusp-rail-trail": {
    slug: "slocan-nakusp-rail-trail",
    name: "Slocan to Nakusp Rail Trail",
    tagline: "Remote Kootenay backcountry rail grade",
    discipline: "gravel",
    difficulty: "moderate",
    description: "The northern extension of the Slocan rail corridor, running from Slocan City to Nakusp along the shores of Slocan Lake. More remote and rougher than the southern section. Some sections require route-finding. Hot springs at Nakusp make for a perfect post-ride recovery.",
    highlights: ["Slocan Lake shoreline", "Nakusp Hot Springs at the end", "Remote backcountry feel", "Wildlife viewing opportunities"],
    recommendedBikes: ["surly-straggler", "surly-karate-monkey"],
    color: "#00BCD4",
  },
  "great-northern-rail-trail": {
    slug: "great-northern-rail-trail",
    name: "Great Northern Rail Trail",
    tagline: "Salmo to Nelson on the old Great Northern Railway",
    discipline: "gravel",
    difficulty: "moderate",
    description: "Following the historic Great Northern Railway from Salmo to Nelson through the West Kootenay. The trail passes through forests, along creeks, and into the arts hub of Nelson. Well-maintained sections mixed with rougher backcountry stretches.",
    highlights: ["Historic railway route", "Nelson as a destination", "Kootenay Lake views approaching Nelson", "Diverse terrain and forest types"],
    recommendedBikes: ["salsa-cutthroat", "surly-straggler"],
    color: "#FF9800",
  },
  "elk-valley": {
    slug: "elk-valley",
    name: "Elk Valley Trail",
    tagline: "Coal towns and Rocky Mountain gravel",
    discipline: "gravel",
    difficulty: "moderate",
    description: "A gravel route through the Elk Valley in BC's southeastern corner, connecting Sparwood, Elkford, and Fernie. The valley sits between the Rocky Mountains and the Lizard Range. Coal mining history, river crossings, and big mountain scenery define this ride.",
    highlights: ["Rocky Mountain scenery", "Elk River valley", "Fernie as start/end point", "Mix of rail trail and forestry roads"],
    recommendedBikes: ["salsa-cutthroat", "marin-nicasio-plus"],
    color: "#795548",
  },
};

// Kelowna-area mountain bike trails (no GPX, just markers)
const localMtbTrails: Trail[] = [
  {
    slug: "knox-mountain",
    name: "Knox Mountain",
    tagline: "Kelowna's backyard XC network",
    discipline: "mountain",
    difficulty: "moderate",
    distance: 12,
    elevation: 350,
    description: "Knox Mountain Park is Kelowna's most accessible mountain bike network. A mix of flowy XC singletrack and technical rock features just minutes from downtown. Paul's Tomb, Shale Trail, and Kathleen Lake loop are the highlights.",
    highlights: ["5 minutes from downtown", "Lake views from the summit", "Technical rock features", "Flowy singletrack options"],
    recommendedBikes: ["marin-bobcat-trail", "pivot-trail-429", "marin-rift-zone"],
    center: [-119.4885, 49.9105],
    coordinates: [],
    color: "#4CAF50",
  },
  {
    slug: "myra-bellevue",
    name: "Myra-Bellevue Provincial Park",
    tagline: "Kelowna's premier trail system",
    discipline: "mountain",
    difficulty: "hard",
    distance: 45,
    elevation: 800,
    description: "The largest and most varied trail network near Kelowna. Over 40km of trails ranging from flowy machine-built to technical hand-cut singletrack. Lost Lake, Vapour, and Stewart Road East are iconic Okanagan trails. The park sits at elevation so expect cooler temps and different conditions than the valley floor.",
    highlights: ["40+ km of diverse trails", "Lost Lake loop", "Machine-built flow trails", "Technical descents"],
    recommendedBikes: ["transition-sentinel", "marin-rift-zone", "pivot-trail-429"],
    center: [-119.4200, 49.8600],
    coordinates: [],
    color: "#FF5722",
  },
  {
    slug: "crawford-trails",
    name: "Crawford Trails",
    tagline: "Steep, technical, and rewarding",
    discipline: "mountain",
    difficulty: "expert",
    distance: 25,
    elevation: 600,
    description: "Crawford is where Kelowna's aggressive riders go. Steep, loose, and technical trails with serious exposure. Not for beginners. The climbs are punishing and the descents are rowdy. If you ride Crawford regularly, you ride a long-travel bike.",
    highlights: ["Technical descents", "Steep, exposed terrain", "Quiet compared to Myra", "Enduro-style riding"],
    recommendedBikes: ["transition-sentinel", "transition-spire"],
    center: [-119.5100, 49.8450],
    coordinates: [],
    color: "#9C27B0",
  },
  {
    slug: "kettle-valley-rail-trail",
    name: "Kettle Valley Rail Trail (KVR)",
    tagline: "Historic trestles and gentle grades",
    discipline: "family",
    difficulty: "easy",
    distance: 30,
    elevation: 200,
    description: "The Myra Canyon section of the KVR is one of BC's most famous cycling routes. 18 trestle bridges and 2 tunnels along the historic Kettle Valley Railway. Gentle grades, packed gravel, and incredible canyon views. A must-ride for any visiting cyclist.",
    highlights: ["18 trestle bridges", "2 tunnels", "Historic railway route", "Stunning canyon views"],
    recommendedBikes: ["marin-nicasio-plus", "surly-straggler", "marin-bobcat-trail"],
    center: [-119.3800, 49.8200],
    coordinates: [],
    color: "#2196F3",
  },
];

export function getAllTrails(): Trail[] {
  const geoTrails: Trail[] = Object.entries(trailMeta).map(([slug, meta]) => {
    const geo = trailGeo.find((g: { slug: string }) => g.slug === slug);
    return {
      ...meta,
      distance: geo?.distance ?? 0,
      elevation: geo?.elevation ?? 0,
      center: (geo?.center ?? [-119.5, 49.9]) as [number, number],
      coordinates: (geo?.coordinates ?? []) as [number, number][],
    };
  });
  return [...localMtbTrails, ...geoTrails];
}

export function getTrailBySlug(slug: string): Trail | undefined {
  return getAllTrails().find((t) => t.slug === slug);
}
