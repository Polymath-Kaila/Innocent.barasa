import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import LenisProvider from "@/components/LenisProvider";
import ResponsiveLayout from "@/components/ResponsiveLayout";

export const metadata: Metadata = {
  title: "Innocent Barasa — Portfolio",
  description: "Designer • Innovator • Leader — crafting clarity into chaos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <LenisProvider />
        <Nav />
        <ResponsiveLayout>{children}</ResponsiveLayout>
        <footer className="container py-10 text-sm text-center text-white/60">
          <p>
            © {new Date().getFullYear()} Innocent Barasa • Designed & Developed by{" "}
            <a
              href="https://yourportfolio.link"
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              Polymath Kaila
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
