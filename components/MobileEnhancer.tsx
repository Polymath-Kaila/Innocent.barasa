"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileEnhancer() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Auto-close menu on resize (for tablets/desktops)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="scrolltop"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 shadow-lg text-white hover:scale-105 transition-transform"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-5 right-5 z-50 bg-white/10 border border-white/20 p-2 rounded-lg backdrop-blur-md"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.div
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }}
          className="w-6 h-[2px] bg-white mb-[6px]"
        ></motion.div>
        <motion.div
          animate={{ opacity: menuOpen ? 0 : 1 }}
          className="w-6 h-[2px] bg-white mb-[6px]"
        ></motion.div>
        <motion.div
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          className="w-6 h-[2px] bg-white"
        ></motion.div>
      </button>

      {/* Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-lg"
          >
            {["Home", "Work", "Innovation", "Leadership", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white text-2xl hover:text-purple-400 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
