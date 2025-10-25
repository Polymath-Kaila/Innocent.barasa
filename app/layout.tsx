import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Innocent Barasa — Portfolio",
  description: "Designer • Innovator • Leader — crafting clarity into chaos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0016] text-white">
        <LenisProvider />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
