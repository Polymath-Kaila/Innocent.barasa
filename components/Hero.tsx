"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-gradient relative overflow-hidden">
      <div className="container py-16 md:py-24 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-10">
        <div>
          {/* Animated Name */}
          <motion.h1
            initial={{ opacity: 0, rotateX: 60 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent glow-text">
              Innocent Barasa
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-white/80 max-w-lg leading-relaxed"
          >
            Designer • Innovator • Leader — transforming abstract ideas into
            impactful digital experiences.
          </motion.p>

          {/* Extra about text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-3 text-sm sm:text-base text-white/70 max-w-xl leading-relaxed"
          >
            Passionate about building immersive interfaces and visionary
            products. I merge creativity, logic, and empathy to shape user
            experiences that inspire emotion and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 flex gap-3"
          >
            <Link href="/work" className="btn-primary">
              Explore My Work
            </Link>
            <Link href="/contact" className="btn">
              Let’s Connect
            </Link>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg shadow-purple-500/30"
        >
          <Image
            src="/media/innocent-portrait.svg"
            alt="Innocent Barasa Portrait"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Glowing background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute w-64 h-64 bg-purple-600/30 blur-3xl rounded-full top-10 left-[-50px] animate-pulse" />
        <div className="absolute w-72 h-72 bg-pink-500/30 blur-3xl rounded-full bottom-10 right-[-50px] animate-pulse" />
      </motion.div>

      {/* Optional rotating icons */}
      <motion.img
        src="/media/star.svg"
        alt="decorative star"
        className="absolute top-10 right-10 w-8 h-8 opacity-60"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
