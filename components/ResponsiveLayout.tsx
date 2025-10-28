"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ResponsiveLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  // Subtle parallax background movement
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen relative overflow-x-hidden ${
        isMobile ? "px-4 py-6 text-[0.95rem]" : "px-12 py-10 text-[1rem]"
      }`}
    >
      {/* Parallax Gradient Layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.1),transparent_60%)] blur-3xl"
      ></motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_60%)] blur-3xl"
      ></motion.div>

      {/* Smooth fade on content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
