export type Accessory = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "helmet" | "light" | "lock" | "bottle" | "pedals" | "tool";
  description: string;
  forDiscipline?: string[];
};

export const accessories: Accessory[] = [
  { id: "acc-helmet-road", name: "Giro Synthe II MIPS", price: 299, image: "/images/bikes/bike-05.jpg", category: "helmet", description: "Top-tier road helmet. MIPS protection, excellent ventilation.", forDiscipline: ["road", "gravel"] },
  { id: "acc-helmet-mtb", name: "Fox Speedframe Pro", price: 249, image: "/images/bikes/bike-05.jpg", category: "helmet", description: "Trail and enduro helmet with MIPS. Full coverage, adjustable visor.", forDiscipline: ["mountain"] },
  { id: "acc-light-set", name: "Light & Motion Vis 500 + Vya", price: 129, image: "/images/bikes/bike-05.jpg", category: "light", description: "Front and rear light set. USB rechargeable, 500 lumens front." },
  { id: "acc-lock", name: "Kryptonite New York Fahgettaboudit", price: 149, image: "/images/bikes/bike-05.jpg", category: "lock", description: "The gold standard of bike locks. 18mm hardened steel." },
  { id: "acc-bottle", name: "CamelBak Podium Chill 21oz", price: 22, image: "/images/bikes/bike-05.jpg", category: "bottle", description: "Insulated water bottle. Jet valve, BPA-free. Keeps water cold 2x longer." },
  { id: "acc-pedals-flat", name: "OneUp Composite Pedals", price: 69, image: "/images/bikes/bike-05.jpg", category: "pedals", description: "Thin platform, excellent grip, 10 pins per side. Best flat pedal under $100.", forDiscipline: ["mountain"] },
  { id: "acc-pedals-clip", name: "Shimano PD-ES600 SPD", price: 119, image: "/images/bikes/bike-05.jpg", category: "pedals", description: "Road-style SPD pedals. Dual-sided entry, lightweight.", forDiscipline: ["road", "gravel"] },
  { id: "acc-tool", name: "Topeak Ratchet Rocket Multi-Tool", price: 49, image: "/images/bikes/bike-05.jpg", category: "tool", description: "Compact ratcheting multi-tool. 15 functions, fits in a jersey pocket." },
];

export function getUpsellsForBike(discipline: string): Accessory[] {
  return accessories.filter((a) => !a.forDiscipline || a.forDiscipline.includes(discipline)).slice(0, 4);
}
