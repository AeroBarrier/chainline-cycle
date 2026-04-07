// Mock data layer — mirrors Lightspeed eCom API structure
// Replace with real API calls when Lightspeed key is available

export type Bike = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  discipline: "mountain" | "road" | "gravel" | "commuter" | "e-bike" | "fat";
  price: number;
  salePrice?: number;
  image: string;
  images: string[];
  description: string;
  teamNote?: string;
  specs: {
    frame: string;
    fork: string;
    groupset: string;
    wheels: string;
    tires: string;
    brakes: string;
    weight?: string;
  };
  sizes: string[];
  inStock: boolean;
};

export type Brand = {
  name: string;
  slug: string;
  tagline: string;
  origin: string;
};

export const brands: Brand[] = [
  { name: "Marin", slug: "marin", tagline: "Born in the birthplace of mountain biking", origin: "Marin County, CA" },
  { name: "Transition", slug: "transition", tagline: "Made for riders who push limits", origin: "Bellingham, WA" },
  { name: "Pivot", slug: "pivot", tagline: "Precision-engineered performance", origin: "Tempe, AZ" },
  { name: "Surly", slug: "surly", tagline: "Serious steel for serious adventures", origin: "Bloomington, MN" },
  { name: "Bianchi", slug: "bianchi", tagline: "The world's oldest bike manufacturer", origin: "Milan, Italy" },
  { name: "Moots", slug: "moots", tagline: "Handmade titanium since 1981", origin: "Steamboat Springs, CO" },
  { name: "Salsa", slug: "salsa", tagline: "Adventure by bike", origin: "Bloomington, MN" },
];

export const bikes: Bike[] = [
  {
    id: "1", slug: "bianchi-sprint", title: "Bianchi Sprint", brand: "Bianchi",
    discipline: "road", price: 5499, image: "/images/bikes/bianchi-sprint.jpg",
    images: ["/images/bikes/bianchi-sprint.jpg"],
    description: "The Sprint is Bianchi's race-ready carbon road bike. Shimano Ultegra groupset, internal routing, and aero-optimized tube profiles. Built to win.",
    teamNote: "This is the bike our road crew reaches for when the group ride gets spicy. Stiff where it counts, compliant where it matters.",
    specs: { frame: "Carbon, aero profile", fork: "Full carbon, tapered", groupset: "Shimano Ultegra Di2 12-speed", wheels: "Shimano RS710 C32", tires: "Vittoria Corsa 700x28c", brakes: "Shimano Ultegra hydraulic disc", weight: "7.8 kg" },
    sizes: ["50", "53", "55", "57"], inStock: true,
  },
  {
    id: "2", slug: "marin-bobcat-trail", title: "Marin Bobcat Trail 5", brand: "Marin",
    discipline: "mountain", price: 1699, image: "/images/bikes/marin-bobcat-trail.jpg",
    images: ["/images/bikes/marin-bobcat-trail.jpg"],
    description: "The Bobcat Trail is Marin's do-it-all hardtail. Aggressive geometry, 130mm fork, and Shimano Deore drivetrain. Perfect for Kelowna singletrack.",
    teamNote: "Best value hardtail we carry. We've put dozens of these on Knox Mountain and Myra-Bellevue trails. They just work.",
    specs: { frame: "Series 3 6061 aluminum", fork: "RockShox Recon RL 130mm", groupset: "Shimano Deore 12-speed", wheels: "Marin aluminum, tubeless-ready", tires: "Maxxis Rekon 29x2.4", brakes: "Shimano MT201 hydraulic disc", weight: "14.2 kg" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "3", slug: "transition-sentinel", title: "Transition Sentinel V3", brand: "Transition",
    discipline: "mountain", price: 7299, image: "/images/bikes/bike-03.jpg",
    images: ["/images/bikes/bike-03.jpg"],
    description: "The Sentinel is Transition's long-travel 29er trail bike. 140mm rear, 160mm front, GX Eagle build. The bike the Kelowna enduro crew won't shut up about.",
    teamNote: "If you ride Crawford or Myra seriously, this is the bike. We've built up more Sentinels than we can count. Transition nailed the geometry on V3.",
    specs: { frame: "Carbon, 140mm travel", fork: "Fox 36 Performance 160mm", groupset: "SRAM GX Eagle 12-speed", wheels: "Race Face AR 30", tires: "Maxxis Assegai/Dissector 29x2.5", brakes: "SRAM Code R", weight: "14.5 kg" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "4", slug: "surly-straggler", title: "Surly Straggler", brand: "Surly",
    discipline: "gravel", price: 2299, image: "/images/bikes/bike-04.jpg",
    images: ["/images/bikes/bike-04.jpg"],
    description: "Steel gravel bike with drop bars, disc brakes, and room for 700x41c tires. Commute Monday, gravel ride Saturday, tour all summer.",
    teamNote: "The most versatile bike in the shop. We've seen Stragglers set up as commuters, gravel racers, and loaded tourers. Surly steel lasts forever.",
    specs: { frame: "4130 CroMoly steel", fork: "CroMoly, disc, rack mounts", groupset: "SRAM Rival 1x11", wheels: "Alex Adventurer 2", tires: "Surly Knard 700x41c", brakes: "TRP Spyre mechanical disc" },
    sizes: ["50", "52", "54", "56", "58", "60", "62"], inStock: true,
  },
  {
    id: "5", slug: "pivot-trail-429", title: "Pivot Trail 429", brand: "Pivot",
    discipline: "mountain", price: 8499, image: "/images/bikes/bike-05.jpg",
    images: ["/images/bikes/bike-05.jpg"],
    description: "Pivot's short-travel trail bike. DW-Link suspension, 129mm rear, Fox Factory build. The XC-to-trail crossover that climbs like a goat and descends with confidence.",
    teamNote: "For riders who value efficiency but don't want a pure XC bike. Incredible on Kelowna's climbing-heavy trail systems.",
    specs: { frame: "Carbon, DW-Link, 129mm", fork: "Fox 34 Factory 130mm", groupset: "Shimano XT 12-speed", wheels: "DT Swiss XM 1700", tires: "Maxxis Rekon 29x2.35", brakes: "Shimano XT 4-piston", weight: "12.4 kg" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "6", slug: "marin-nicasio-plus", title: "Marin Nicasio+", brand: "Marin",
    discipline: "gravel", price: 1399, image: "/images/bikes/bike-06.jpg",
    images: ["/images/bikes/bike-06.jpg"],
    description: "Steel gravel bike with a relaxed geometry and 650b wheels. Perfect for the Kettle Valley Rail Trail or daily commuting on Kelowna's bike lanes.",
    specs: { frame: "CroMoly steel", fork: "CroMoly, disc", groupset: "Shimano Advent X 1x10", wheels: "Marin aluminum 650b", tires: "WTB Byway 650x47c", brakes: "Tektro mechanical disc" },
    sizes: ["50", "52", "54", "56", "58"], inStock: true,
  },
  {
    id: "7", slug: "salsa-cutthroat", title: "Salsa Cutthroat GRX 810", brand: "Salsa",
    discipline: "gravel", price: 5199, image: "/images/bikes/bike-07.jpg",
    images: ["/images/bikes/bike-07.jpg"],
    description: "Salsa's flagship gravel racer. Carbon frame, Shimano GRX Di2, Class 5 VRS vibration reduction. Built for races like BCBR and long Okanagan gravel days.",
    teamNote: "If you're doing the Okanagan Gravel Fondo or KVR rides, this is the weapon. Fast on pavement, confident on gravel, comfortable all day.",
    specs: { frame: "Carbon, Class 5 VRS", fork: "Carbon, Deadbolt thru-axle", groupset: "Shimano GRX Di2 2x12", wheels: "DT Swiss G 1800", tires: "Teravail Rutland 700x42c", brakes: "Shimano GRX hydraulic disc", weight: "8.9 kg" },
    sizes: ["52", "54", "56", "58"], inStock: true,
  },
  {
    id: "8", slug: "transition-spire", title: "Transition Spire Carbon", brand: "Transition",
    discipline: "mountain", price: 8999, image: "/images/bikes/bike-08.jpg",
    images: ["/images/bikes/bike-08.jpg"],
    description: "170mm enduro machine. Coil-compatible, high-pivot, 29er. For riders who think the Sentinel doesn't have enough travel.",
    specs: { frame: "Carbon, 170mm, high-pivot", fork: "Fox 38 Factory 180mm", groupset: "SRAM X0 Eagle AXS", wheels: "Industry Nine Hydra", tires: "Maxxis Assegai/DHR II 29x2.5 WT", brakes: "SRAM Code RSC", weight: "15.1 kg" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "9", slug: "moots-routt-ybb", title: "Moots Routt YBB", brand: "Moots",
    discipline: "gravel", price: 12999, image: "/images/bikes/bike-09.jpg",
    images: ["/images/bikes/bike-09.jpg"],
    description: "Handmade titanium gravel bike with YBB micro-suspension seatstay. Built to order in Steamboat Springs, CO. The forever bike.",
    teamNote: "This is the 'buy once, ride forever' bike. Titanium doesn't fatigue, doesn't corrode, and Moots craftsmanship is on another level. We build these to order.",
    specs: { frame: "3/2.5 titanium, YBB flex stays", fork: "Enve carbon gravel", groupset: "SRAM Force AXS XPLR 1x12", wheels: "Enve G23", tires: "Rene Herse Barlow Pass 700x38c", brakes: "SRAM Force hydraulic disc", weight: "8.4 kg" },
    sizes: ["Custom geometry"], inStock: false,
  },
  {
    id: "10", slug: "marin-rift-zone", title: "Marin Rift Zone 29 3", brand: "Marin",
    discipline: "mountain", price: 3499, image: "/images/bikes/bike-10.jpg",
    images: ["/images/bikes/bike-10.jpg"],
    description: "Full-suspension trail bike with MultiTrac linkage, 130mm travel, and Shimano SLX build. The sweet spot for Okanagan trail riding.",
    specs: { frame: "Series 3 aluminum, 130mm", fork: "Fox Rhythm 34 140mm", groupset: "Shimano SLX/Deore 12-speed", wheels: "Marin aluminum, tubeless-ready", tires: "Maxxis Dissector 29x2.4", brakes: "Shimano SLX hydraulic disc", weight: "14.8 kg" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "11", slug: "surly-karate-monkey", title: "Surly Karate Monkey", brand: "Surly",
    discipline: "mountain", price: 1999, image: "/images/bikes/bike-11.jpg",
    images: ["/images/bikes/bike-11.jpg"],
    description: "Steel hardtail that runs 27.5+, 29, or 27.5 wheels. Rigid or suspended. SS or geared. The ultimate do-anything trail bike.",
    specs: { frame: "4130 CroMoly steel", fork: "CroMoly rigid (or run your own suspension)", groupset: "Shimano Deore 1x12", wheels: "Alex MD35 29er", tires: "Surly Dirt Wizard 29x3.0", brakes: "TRP Spyre mechanical disc" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "12", slug: "bianchi-impulso-gravel", title: "Bianchi Impulso Gravel", brand: "Bianchi",
    discipline: "gravel", price: 3299, salePrice: 2799, image: "/images/bikes/bike-12.jpg",
    images: ["/images/bikes/bike-12.jpg"],
    description: "Aluminum gravel bike with full carbon fork, Shimano GRX groupset, and Bianchi's celeste-accented design language. Capable and distinctive.",
    specs: { frame: "Hydroformed aluminum", fork: "Full carbon, flat mount", groupset: "Shimano GRX 600 2x11", wheels: "Fulcrum Racing 900 DB", tires: "Vittoria Terreno Dry 700x38c", brakes: "Shimano GRX 400 hydraulic disc" },
    sizes: ["50", "53", "55", "57"], inStock: true,
  },
];

export const services = [
  { name: "Tune-Up", price: "$89", time: "1-2 days", description: "Shifting and brake adjustment, tire inflation, safety check. The basics done right." },
  { name: "Full Service", price: "$199", time: "2-3 days", description: "Complete drivetrain clean, brake bleed, bearing check, wheel true, and full adjustment. Your bike comes back feeling new." },
  { name: "Suspension Service", price: "$149+", time: "3-5 days", description: "Lower leg service, damper service, or full rebuild. Fox, RockShox, Manitou." },
  { name: "Wheel Build", price: "$89 + parts", time: "3-5 days", description: "Hand-built wheels. Hub, rim, spokes of your choice. Stress-relieved and trued to perfection." },
  { name: "Bike Fit", price: "$199", time: "2 hours", description: "Professional bike fit using contact point analysis. Saddle height, reach, bar width, cleat position." },
  { name: "Tubeless Setup", price: "$39/wheel", time: "Same day", description: "Tape, valve, sealant, and setup. Bring your own tires or choose from our stock." },
];

export function getBikeBySlug(slug: string): Bike | undefined {
  return bikes.find((b) => b.slug === slug);
}

export function getBikesByBrand(brand: string): Bike[] {
  return bikes.filter((b) => b.brand.toLowerCase() === brand.toLowerCase());
}

export function getBikesByDiscipline(discipline: string): Bike[] {
  return bikes.filter((b) => b.discipline === discipline);
}

export function getSaleBikes(): Bike[] {
  return bikes.filter((b) => b.salePrice !== undefined);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
