"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="section-gradient">
      <div className="container py-16 md:py-24 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-extrabold leading-[1.05]">Innocent Barasa</motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-4 text-lg text-ink/80">Designer • Innovator • Leader — crafting clarity into chaos.</motion.p>
          <div className="mt-8 flex gap-3"><Link href="/work" className="btn-primary">View Work</Link><Link href="/contact" className="btn">Get in touch</Link></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative w-full aspect-square card overflow-hidden">
          <Image src="/media/innocent-portrait.svg" alt="Innocent Barasa" fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
