import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const instrumentSerif = localFont({
  src: [{ path: "../public/fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" }, { path: "../public/fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" }],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "ChainLine Cycle | Kelowna Bike Shop", template: "%s | ChainLine Cycle" },
  description: "Rider-owned bike shop in Kelowna, BC. Marin, Transition, Pivot, Surly, Bianchi, Moots, Salsa. Service, custom builds, and 100+ years combined wrench experience.",
  metadataBase: new URL("https://chainline-cycle.netlify.app"),
  openGraph: { siteName: "ChainLine Cycle", locale: "en_CA", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm-sans)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
