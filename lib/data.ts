export type Bike = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  discipline: "mountain" | "road" | "gravel" | "commuter" | "kids";
  price: number;
  salePrice?: number;
  image: string;
  images: string[];
  description: string;
  teamNote?: string;
  specs: Record<string, string>;
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
  { name: "Bianchi", slug: "bianchi", tagline: "The world's oldest bike manufacturer", origin: "Milan, Italy" },
];

export const bikes: Bike[] = [
  // === BIANCHI ===
  {
    id: "1", slug: "bianchi-sprint", title: "Bianchi Sprint", brand: "Bianchi",
    discipline: "road", price: 5499, image: "/images/bikes/bianchi-sprint.jpg", images: ["/images/bikes/bianchi-sprint.jpg"],
    description: "The Sprint is Bianchi's race-ready carbon road bike. Shimano Ultegra groupset, internal routing, and aero-optimized tube profiles. Built to win.",
    teamNote: "This is the bike our road crew reaches for when the group ride gets spicy. Stiff where it counts, compliant where it matters.",
    specs: { "Frame": "Sprint carbon, aero tube profiles, internal routing", "Fork": "Bianchi full carbon, tapered 1-1/8\" to 1-1/2\"", "Groupset": "Shimano Ultegra Di2 R8170 2x12-speed", "Crankset": "Shimano Ultegra FC-R8100, 50/34T", "Cassette": "Shimano Ultegra CS-R8100, 11-34T", "Chain": "Shimano CN-M8100 12-speed", "Brakes": "Shimano Ultegra BR-R8170 hydraulic disc, 160mm rotors", "Wheels": "Shimano RS710 C32, tubeless-ready", "Tires": "Vittoria Corsa N.EXT 700x28c, tubeless-ready", "Handlebar": "Bianchi Reparto Corse, alloy, 31.8mm clamp", "Stem": "Bianchi Reparto Corse, alloy, -6 degree", "Seatpost": "Bianchi carbon, 27.2mm", "Saddle": "fi'zi:k Argo Vento R5, 150mm", "Headset": "FSA IS-2 1-1/8\" to 1-1/2\" integrated", "BB": "Shimano BB-RS500 press-fit", "Weight": "7.8 kg (56cm)" },
    sizes: ["47", "50", "53", "55", "57", "59"], inStock: true,
  },
  {
    id: "20", slug: "bianchi-impulso-gravel", title: "Bianchi Impulso Allroad", brand: "Bianchi",
    discipline: "gravel", price: 3299, salePrice: 2799, image: "/images/bikes/bike-12.jpg", images: ["/images/bikes/bike-12.jpg"],
    description: "Aluminum gravel bike with full carbon fork, Shimano GRX groupset, and Bianchi's celeste-accented design language. Capable and distinctive.",
    specs: { "Frame": "Impulso Allroad hydroformed triple-butted aluminum", "Fork": "Bianchi full carbon gravel, flat mount, thru-axle", "Groupset": "Shimano GRX RX600 2x11-speed", "Crankset": "Shimano GRX FC-RX600, 46/30T", "Cassette": "Shimano CS-HG700, 11-34T", "Chain": "Shimano CN-HG601 11-speed", "Brakes": "Shimano GRX BR-RX400 hydraulic disc, 160mm rotors", "Wheels": "Fulcrum Racing 900 DB, alloy", "Tires": "Vittoria Terreno Dry 700x38c", "Handlebar": "Bianchi Reparto Corse compact drop, 31.8mm", "Stem": "Bianchi Reparto Corse alloy", "Seatpost": "Bianchi alloy, 27.2mm", "Saddle": "Selle Royal Seta S1", "Max Tire Clearance": "700x45c / 650x50c", "Weight": "9.8 kg (55cm)" },
    sizes: ["50", "53", "55", "57"], inStock: true,
  },

  // === MARIN MTB ===
  {
    id: "2", slug: "marin-bobcat-trail-5", title: "Marin Bobcat Trail 5", brand: "Marin",
    discipline: "mountain", price: 1699, image: "/images/bikes/marin-bobcat-trail.jpg", images: ["/images/bikes/marin-bobcat-trail.jpg"],
    description: "Marin's do-it-all hardtail. Aggressive geometry, 130mm fork, and Shimano Deore drivetrain. Perfect for Kelowna singletrack.",
    teamNote: "Best value hardtail we carry. We've put dozens of these on Knox Mountain and Myra-Bellevue trails. They just work.",
    specs: { "Frame": "Series 3 6061 aluminum, tapered headtube, Boost 148 spacing", "Fork": "RockShox Recon RL 130mm, 15x110 Boost", "Groupset": "Shimano Deore M6100 1x12-speed", "Crankset": "Shimano Deore FC-M6100, 30T", "Cassette": "Shimano Deore CS-M6100, 10-51T", "Chain": "Shimano CN-M6100", "Brakes": "Shimano MT201 hydraulic disc, 180/160mm rotors", "Wheels": "Marin aluminum double-wall, 30mm inner width, tubeless-ready", "Tires": "Maxxis Rekon 29x2.4\" WT, tubeless-ready", "Handlebar": "Marin alloy riser, 780mm, 20mm rise", "Stem": "Marin alloy, 50mm", "Seatpost": "TranzX dropper, 31.6mm, 150mm travel", "Saddle": "Marin Speed Saddle", "Headset": "FSA No.42 integrated", "Weight": "14.2 kg (M)" },
    sizes: ["XS", "S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "3", slug: "marin-wildcat-trail-3", title: "Marin Wildcat Trail 3", brand: "Marin",
    discipline: "mountain", price: 899, image: "/images/bikes/marin-wildcat-trail-3.jpg", images: ["/images/bikes/marin-wildcat-trail-3.jpg"],
    description: "Entry-level hardtail with solid components and Marin's progressive geometry. 27.5\" wheels, 120mm fork, hydraulic disc brakes. A great first mountain bike.",
    specs: { "Frame": "Series 2 6061 aluminum, internal routing", "Fork": "SR Suntour XCR 120mm, coil", "Groupset": "Shimano Altus/Acera 2x9-speed", "Crankset": "Shimano FC-M3120, 36/22T", "Cassette": "Shimano CS-HG200, 11-36T", "Brakes": "Shimano MT200 hydraulic disc, 160mm rotors", "Wheels": "Marin aluminum double-wall 27.5\"", "Tires": "Vee Tire Crown Gem 27.5x2.3\"", "Handlebar": "Marin alloy riser, 720mm", "Stem": "Marin alloy, 60mm", "Seatpost": "Marin alloy, 30.9mm", "Saddle": "Marin Speed Saddle", "Weight": "14.8 kg (M)" },
    sizes: ["XS", "S", "M", "L"], inStock: true,
  },
  {
    id: "4", slug: "marin-palisades-trail-2", title: "Marin Palisades Trail 2", brand: "Marin",
    discipline: "mountain", price: 1299, image: "/images/bikes/marin-palisades-trail-2.jpg", images: ["/images/bikes/marin-palisades-trail-2.jpg"],
    description: "Mid-range hardtail with Marin's aggressive MultiTrac geometry. 130mm fork, Deore drivetrain, and dropper post included. Confident on Okanagan singletrack.",
    specs: { "Frame": "Series 3 6061 aluminum, tapered HT, Boost 148", "Fork": "SR Suntour XCR34 Air 130mm, 15x110 Boost", "Groupset": "Shimano Deore M5100 1x11-speed", "Crankset": "Shimano Deore FC-M5100, 32T", "Cassette": "Shimano Deore CS-M5100, 11-51T", "Brakes": "Shimano MT200 hydraulic disc, 180/160mm", "Wheels": "Marin aluminum, 29\", 30mm inner, tubeless-ready", "Tires": "Maxxis Rekon 29x2.4\" WT", "Handlebar": "Marin alloy riser, 760mm", "Seatpost": "TranzX dropper, 31.6mm, 120mm travel", "Saddle": "Marin Speed Saddle", "Weight": "14.5 kg (M)" },
    sizes: ["XS", "S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "5", slug: "marin-pine-mountain-1", title: "Marin Pine Mountain 1", brand: "Marin",
    discipline: "mountain", price: 2099, image: "/images/bikes/marin-pine-mountain-1.jpg", images: ["/images/bikes/marin-pine-mountain-1.jpg"],
    description: "Steel hardtail with plus-size tires and adventure geometry. Rack and fender mounts, dropper post, and Shimano Deore. The do-everything trail bike.",
    teamNote: "This is the bike for riders who want one bike that does trail, gravel, bikepacking, and commuting. Steel rides beautifully and the plus tires roll over anything.",
    specs: { "Frame": "4130 CroMoly steel, butted main tubes, Boost 148", "Fork": "Marin InVisiTravel 120mm or rigid (2 configs)", "Groupset": "Shimano Deore M6100 1x12-speed", "Crankset": "Shimano Deore FC-M6100, 30T", "Cassette": "Shimano Deore CS-M6100, 10-51T", "Brakes": "Shimano MT201 hydraulic disc, 180mm rotors", "Wheels": "Marin aluminum, 29\" / 27.5\"+, 35mm inner width", "Tires": "Maxxis Rekon 29x2.6\" WT, tubeless-ready", "Handlebar": "Marin alloy riser, 780mm", "Seatpost": "TranzX dropper, 31.6mm, 150mm", "Saddle": "Marin Speed Saddle", "Extras": "Rack mounts, fender mounts, 3x bottle cage mounts", "Weight": "14.0 kg (M)" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "6", slug: "marin-bobcat-trail-3", title: "Marin Bobcat Trail 3", brand: "Marin",
    discipline: "mountain", price: 1099, image: "/images/bikes/marin-bobcat-trail-3.jpg", images: ["/images/bikes/marin-bobcat-trail-3.jpg"],
    description: "The sweet spot in Marin's hardtail lineup. 120mm fork, Shimano Deore drivetrain, hydraulic brakes, and dropper post. Ready for real trail riding.",
    specs: { "Frame": "Series 3 6061 aluminum, tapered HT, Boost 148", "Fork": "SR Suntour XCR34 120mm, coil, 15x110 Boost", "Groupset": "Shimano Deore M5100 1x11-speed", "Crankset": "Shimano Deore FC-M5100, 32T", "Cassette": "Shimano CS-M5100, 11-51T", "Brakes": "Shimano MT200 hydraulic disc, 180/160mm", "Wheels": "Marin aluminum 29\", tubeless-ready", "Tires": "Maxxis Rekon 29x2.4\"", "Seatpost": "TranzX dropper, 31.6mm, 120mm", "Handlebar": "Marin alloy riser, 760mm", "Weight": "14.4 kg (M)" },
    sizes: ["XS", "S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "14", slug: "marin-san-quentin-3", title: "Marin San Quentin 3", brand: "Marin",
    discipline: "mountain", price: 2299, image: "/images/bikes/marin-san-quentin-3.jpg", images: ["/images/bikes/marin-san-quentin-3.jpg"],
    description: "Aggressive hardtail built for jumps, drops, and rowdy trail riding. Slack geometry, beefy fork, and components that can take a beating.",
    teamNote: "The bike for riders who hit every jump and drop on the trail. Slack, low, and confidence-inspiring. Popular with the bike park crowd.",
    specs: { "Frame": "Series 3 6061 aluminum, MultiTrac geometry, Boost 148", "Fork": "RockShox Pike Select 140mm, 15x110 Boost", "Groupset": "Shimano SLX M7100 1x12-speed", "Crankset": "Shimano SLX FC-M7100, 30T", "Cassette": "Shimano SLX CS-M7100, 10-51T", "Brakes": "Shimano SLX BR-M7100 4-piston, 200/180mm rotors", "Wheels": "Marin aluminum, 27.5\", 30mm inner, tubeless-ready", "Tires": "Maxxis Minion DHF/DHR II 27.5x2.5\" WT", "Seatpost": "TranzX dropper, 31.6mm, 170mm", "Handlebar": "Marin alloy riser, 780mm, 30mm rise", "Weight": "13.8 kg (M)" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "15", slug: "marin-rift-zone-jr", title: "Marin Rift Zone 24\" Jr", brand: "Marin",
    discipline: "kids", price: 1699, image: "/images/bikes/marin-rift-zone-jr.jpg", images: ["/images/bikes/marin-rift-zone-jr.jpg"],
    description: "Full-suspension kids bike with real components. 120mm travel, Shimano Deore, and hydraulic brakes. Built so kids can ride what the adults ride.",
    teamNote: "Finally a kids full-suspension bike that's not a toy. Real fork, real shock, real drivetrain. Kids who ride this keep up with their parents on Myra.",
    specs: { "Frame": "Series 3 6061 aluminum, MultiTrac linkage, 120mm travel", "Fork": "X-Fusion Velvet RL2 120mm, air", "Shock": "X-Fusion Microlite RL, air", "Groupset": "Shimano Deore M5100 1x11-speed", "Crankset": "Samox 140mm arms, 28T", "Cassette": "Shimano CS-M5100, 11-51T", "Brakes": "Shimano MT200 hydraulic disc, 160mm", "Wheels": "Marin aluminum 24\"", "Tires": "Maxxis Rekon 24x2.4\"", "Seatpost": "TranzX dropper, 27.2mm, 80mm travel", "Weight": "13.0 kg" },
    sizes: ["One Size (fits ~4'2\" to 4'10\")"], inStock: true,
  },

  // === MARIN ROAD/GRAVEL/COMMUTER ===
  {
    id: "7", slug: "marin-fairfax-1", title: "Marin Fairfax 1", brand: "Marin",
    discipline: "commuter", price: 799, image: "/images/bikes/marin-fairfax-1.jpg", images: ["/images/bikes/marin-fairfax-1.jpg"],
    description: "The everyday commuter. Flat bar, lightweight aluminum frame, Shimano drivetrain, and disc brakes. Built for bike lanes, rail trails, and grocery runs.",
    specs: { "Frame": "Series 2 6061 aluminum, flat mount disc", "Fork": "Marin alloy, flat mount disc", "Groupset": "Shimano Altus/Tourney 3x8-speed", "Brakes": "Tektro mechanical disc, 160mm", "Wheels": "Marin aluminum, 700c", "Tires": "Schwalbe Road Cruiser 700x35c", "Handlebar": "Marin alloy flat bar, 620mm", "Extras": "Rack mounts, fender mounts, kickstand mount", "Weight": "12.4 kg (M)" },
    sizes: ["XS", "S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "8", slug: "marin-fairfax-2", title: "Marin Fairfax 2", brand: "Marin",
    discipline: "commuter", price: 999, image: "/images/bikes/marin-fairfax-2.jpg", images: ["/images/bikes/marin-fairfax-2.jpg"],
    description: "Upgraded commuter with hydraulic disc brakes, Shimano Alivio drivetrain, and a more capable wheelset. The step up for daily riders.",
    specs: { "Frame": "Series 3 6061 aluminum, internal routing, flat mount", "Fork": "Marin alloy, flat mount disc, thru-axle", "Groupset": "Shimano Alivio 2x9-speed", "Brakes": "Shimano MT200 hydraulic disc, 160mm", "Wheels": "Marin aluminum 700c, thru-axle", "Tires": "Schwalbe Road Cruiser 700x35c", "Handlebar": "Marin alloy flat bar, 620mm", "Extras": "Rack mounts, fender mounts, kickstand mount", "Weight": "11.8 kg (M)" },
    sizes: ["XS", "S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "9", slug: "marin-nicasio-plus", title: "Marin Nicasio+", brand: "Marin",
    discipline: "gravel", price: 1399, image: "/images/bikes/marin-nicasio-plus.jpg", images: ["/images/bikes/marin-nicasio-plus.jpg"],
    description: "Steel gravel bike with a relaxed geometry and 650b wheels. Perfect for the Kettle Valley Rail Trail or daily commuting on Kelowna's bike lanes.",
    teamNote: "The bike we recommend most for people who want one bike for everything. Drop bars, steel, big tires. Commute to work, ride gravel on the weekend.",
    specs: { "Frame": "4130 CroMoly steel, double-butted, disc", "Fork": "Marin CroMoly, disc, rack mounts", "Groupset": "microSHIFT Advent X 1x10-speed", "Crankset": "FSA Vero, 40T", "Cassette": "microSHIFT 11-48T", "Brakes": "Tektro Mira mechanical disc, 160mm", "Wheels": "Marin aluminum 650b", "Tires": "WTB Byway 650bx47c, tubeless-ready", "Handlebar": "Marin alloy compact drop, 31.8mm", "Extras": "Rack mounts, fender mounts, 3x bottle mounts", "Max Tire": "650bx50c / 700x38c", "Weight": "12.2 kg (54cm)" },
    sizes: ["50", "52", "54", "56", "58"], inStock: true,
  },
  {
    id: "10", slug: "marin-gestalt-1", title: "Marin Gestalt 1", brand: "Marin",
    discipline: "gravel", price: 1599, image: "/images/bikes/marin-gestalt-1.jpg", images: ["/images/bikes/marin-gestalt-1.jpg"],
    description: "Aluminum gravel bike with Shimano Claris groupset, carbon fork, and clearance for 700x45c tires. The entry point for serious gravel riding.",
    specs: { "Frame": "Series 3 6061 aluminum, internal routing, flat mount", "Fork": "Marin carbon, 12mm thru-axle, flat mount disc", "Groupset": "Shimano Claris R2000 2x8-speed", "Brakes": "Tektro Mira mechanical disc, 160mm", "Wheels": "Marin aluminum 700c, thru-axle", "Tires": "Vittoria Terreno Dry 700x38c", "Handlebar": "Marin alloy compact drop, 31.8mm", "Max Tire": "700x45c / 650bx50c", "Weight": "10.8 kg (54cm)" },
    sizes: ["50", "52", "54", "56", "58"], inStock: true,
  },
  {
    id: "11", slug: "marin-gestalt-x", title: "Marin Gestalt X10", brand: "Marin",
    discipline: "gravel", price: 2199, image: "/images/bikes/marin-gestalt-x.jpg", images: ["/images/bikes/marin-gestalt-x.jpg"],
    description: "Top-spec aluminum gravel bike. Shimano GRX groupset, carbon fork, tubeless wheels, and a geometry that's equal parts fast and comfortable.",
    teamNote: "The Gestalt X is our pick for the Okanagan Gravel Fondo. Fast enough for road, tough enough for FSR roads up to Big White.",
    specs: { "Frame": "Series 3 6061 aluminum, internal routing, flat mount", "Fork": "Marin carbon, 12mm thru-axle, flat mount", "Groupset": "Shimano GRX RX600 1x10-speed", "Crankset": "Shimano GRX FC-RX600, 40T", "Cassette": "Shimano CS-M8000, 11-42T", "Brakes": "Shimano GRX BR-RX400 hydraulic disc, 160mm", "Wheels": "Marin aluminum 700c, tubeless-ready", "Tires": "WTB Riddler 700x37c, TCS Light, tubeless-ready", "Handlebar": "Marin alloy flared drop, 31.8mm", "Max Tire": "700x45c / 650bx50c", "Weight": "10.2 kg (54cm)" },
    sizes: ["50", "52", "54", "56", "58"], inStock: true,
  },
  {
    id: "12", slug: "marin-presidio-3", title: "Marin Presidio 3", brand: "Marin",
    discipline: "commuter", price: 1499, image: "/images/bikes/marin-presidio-3.jpg", images: ["/images/bikes/marin-presidio-3.jpg"],
    description: "Belt-drive commuter with Gates CDN belt, Shimano Alfine 8-speed internal hub, and hydraulic disc brakes. Zero chain maintenance.",
    teamNote: "The cleanest commuter bike we sell. No chain to lube, no derailleur to adjust. Gates belt drive is silent and lasts 30,000+ km.",
    specs: { "Frame": "Series 3 6061 aluminum, sliding dropouts, internal routing", "Fork": "Marin alloy, flat mount disc", "Drivetrain": "Gates CDN belt drive, Shimano Alfine 8-speed internal hub", "Brakes": "Shimano MT200 hydraulic disc, 160mm", "Wheels": "Marin aluminum 700c, Shimano Alfine rear hub", "Tires": "Schwalbe Super Moto-X 700x35c", "Handlebar": "Marin alloy flat bar, 620mm", "Extras": "Rack mounts, fender mounts, integrated rear light mount", "Weight": "12.0 kg (M)" },
    sizes: ["S", "M", "L", "XL"], inStock: true,
  },
  {
    id: "13", slug: "marin-san-anselmo-2", title: "Marin San Anselmo DS2", brand: "Marin",
    discipline: "commuter", price: 949, image: "/images/bikes/marin-san-anselmo-2.jpg", images: ["/images/bikes/marin-san-anselmo-2.jpg"],
    description: "Dual-sport hybrid with 700c wheels, suspension fork, and upright geometry. For riders who want comfort on paved paths and light gravel.",
    specs: { "Frame": "Series 2 6061 aluminum, internal routing", "Fork": "SR Suntour NEX 63mm, lockout", "Groupset": "Shimano Altus/Acera 3x8-speed", "Brakes": "Shimano MT200 hydraulic disc, 160mm", "Wheels": "Marin aluminum 700c", "Tires": "Schwalbe Road Cruiser 700x38c", "Handlebar": "Marin alloy riser, 640mm", "Extras": "Rack mounts, fender mounts, kickstand mount", "Weight": "13.2 kg (M)" },
    sizes: ["XS", "S", "M", "L", "XL"], inStock: true,
  },
];

export const services = [
  { name: "Tune-Up", price: "$89", time: "1-2 days", description: "Shifting and brake adjustment, tire inflation, safety check. The basics done right." },
  { name: "Full Service", price: "$199", time: "2-3 days", description: "Complete drivetrain clean, brake bleed, bearing check, wheel true, and full adjustment. Your bike comes back feeling new." },
  { name: "Suspension Service", price: "$149+", time: "3-5 days", description: "Lower leg service, damper service, or full rebuild. Fox, RockShox, SR Suntour." },
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
