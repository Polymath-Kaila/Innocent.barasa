"use client";

import LeadershipCard from "@/components/LeadershipCard";
import { motion } from "framer-motion";


export default function LeadershipPage() {
  const beliefs = [
    {
      name: "harvy bonifa",
      year: "2025",
      quote: "Leadership is not about control,it's about clarity that empowers others to move freely.",
      icon: "/media/leader1.jpg",
      rating: 5,
    },
    {
      name: "polymath kaila",
      year: "2025",
      quote: "Design leadership begins where certainty ends, in the space of creative ambiguity.",
      icon: "/media/leader2.jpg",
      rating: 5,
    },
       {
      name: "Innocent Barasa",
      year: "2024",
      quote: "Leadership is not about control,it's about clarity that empowers others to move freely.",
      icon: "/media/leader1.jpg",
      rating: 5,
    },
    {
      name: "polymath kaila",
      year: "2025",
      quote: "Design leadership begins where certainty ends, in the space of creative ambiguity.",
      icon: "/media/leader2.jpg",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#09090f] to-[#0e0e14] text-white">
      {/* Hero */}
      <section className="container mx-auto py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Leadership Through Vision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-white/70 max-w-2xl mx-auto"
        >
          Building cultures of clarity, creativity, and trust.  
          Leadership isn’t about control — it’s about empowering collective momentum.
        </motion.p>
      </section>

      {/* Leadership Quotes */}
      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-8">
        {beliefs.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <LeadershipCard {...b} />
          </motion.div>
        ))}
      </section>

      {/* Principles Section */}
      <section className="container mx-auto py-20 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8 bg-gradient-to-br from-purple-900/10 to-transparent border border-white/10 rounded-2xl backdrop-blur-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Leadership Principles</h2>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Clarity over certainty</li>
            <li>Design as a team sport</li>
            <li>Prototype to align</li>
            <li>Narratives win hearts and budgets</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8 bg-gradient-to-br from-indigo-900/10 to-transparent border border-white/10 rounded-2xl backdrop-blur-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Talks & Workshops</h2>
          <ul className="space-y-3 text-white/80">
            <li><span className="badge mr-2 bg-purple-600/40 px-2 py-1 rounded-md text-xs">2025</span> Systems that Scale — Build Africa</li>
            <li><span className="badge mr-2 bg-pink-600/40 px-2 py-1 rounded-md text-xs">2024</span> Designing for Trust — Design Days</li>
          </ul>
        </motion.div>
      </section>

      {/* Closing CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-24"
      >
        <h3 className="text-2xl font-semibold mb-3 text-white/90">“Leadership is designing trust.”</h3>
        <p className="text-white/60 mb-6">
          Ready to build clarity and creative momentum together?
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-[0_0_20px_#a855f7] transition-all duration-300"
        >
          Let’s Connect
        </a>
      </motion.section>
    </main>
  );
}
