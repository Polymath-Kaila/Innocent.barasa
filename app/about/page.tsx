"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const lines = [
    "I’m Innocent Barasa, a designer, innovator, and storyteller driven by curiosity and purpose.",
    "I believe design is not about how things look, but how they move people  emotionally, mentally, and collectively.",
    "My work blends systems thinking with imagination, turning abstract ideas into experiences that feel inevitable.",
    "I lead by exploration  by questioning assumptions, shaping clarity from ambiguity, and building stories that guide change.",
    "Every pixel I craft, every word I write, every prototype I build  is part of a larger vision: to create work that lasts, moves, and inspires."
  ];

  const skills = [
    {
      title: "Creative Tools",
      items: ["Figma", "After Effects", "Blender", "Framer", "Cinema 4D", "Webflow"]
    },
    {
      title: "Creative Disciplines",
      items: [
              "Visual Design",
              "User Experience",
              "Concept Development",
              "Storytelling & Presentation",
              "Brand Systems",
              "Prototyping Ideas"
  ]
},

    {
      title: "Values",
      items: ["Clarity", "Momentum", "Integrity", "Empathy", "Curiosity"]
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#09090f] to-[#11111a] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)] blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_60%)] blur-3xl animate-pulse delay-700"></div>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-10 relative z-10">
        {/* Animated Text */}
<div className="md:w-1/2 space-y-6">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
  >
    About Me
  </motion.h1>

  <div className="space-y-6 text-lg leading-relaxed text-white/80 font-light">
    {lines.map((line, i) => (
      <motion.p
        key={i}
        className="whitespace-pre-wrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: i * 2, // delay each line
              staggerChildren: 0.035, // space letters
            },
          },
        }}
      >
        {line.split("").map((char, j) => (
          <motion.span
            key={j}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.03 }}
            className={`inline-block ${
              char === " " ? "w-1" : ""
            } text-white/90 hover:text-purple-400 transition-colors`}
            style={{
              textShadow: "0 0 8px rgba(168,85,247,0.4)",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    ))}
  </div>
</div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.3)] transition-all duration-700">
            <Image
              src="/media/innocent.webp" // update to your image
              alt="Innocent Barasa"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto py-16 grid md:grid-cols-3 gap-8 z-10 relative">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all"
          >
            <h3 className="font-semibold text-xl mb-4 text-purple-400">
              {s.title}
            </h3>
            <ul className="space-y-2 text-white/70">
              {s.items.map((item, j) => (
                <li key={j}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-center py-20 text-white/70 text-lg italic tracking-wide"
      >
        
      </motion.div>
    </main>
  );
}
