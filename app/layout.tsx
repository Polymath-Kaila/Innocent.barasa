import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import MobileEnhancer from "@/components/MobileEnhancer"; // 🌟 NEW

export const metadata: Metadata = {
  title: "Innocent Barasa — Portfolio",
  description: "Designer • Innovator • Leader — crafting clarity into chaos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="flex flex-col min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
        <LenisProvider />
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* 🌟 Add this here, after everything */}
        <MobileEnhancer />
      </body>
    </html>
  );
}
