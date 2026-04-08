import type { Metadata } from "next";
import { Outfit, Space_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/commerce/cart-drawer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap", weight: ["300", "400", "500", "600", "700"] });
const spaceMono = Space_Mono({ subsets: ["latin"], variable: "--font-space-mono", display: "swap", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: { default: "ChainLine Cycle | Kelowna Bike Shop", template: "%s | ChainLine Cycle" },
  description: "Rider-owned bike shop in Kelowna, BC. Marin, Bianchi. Expert service and 100+ years combined experience.",
  metadataBase: new URL("https://chainline-cycle.pages.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${spaceMono.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-outfit)] antialiased font-light">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
