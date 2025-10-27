"use client";

import { useEffect, useState } from "react";
import { loadJson } from "@/lib/loadJson";
import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function InnovationPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadJson<Project[]>("/data/projects.json").then((data) => {
      if (Array.isArray(data)) setProjects(data);
    });
  }, []);

  const experimental = projects.filter((p) =>
    (p.tags ?? []).includes("Experimental")
  );

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12081a] text-white overflow-hidden">
      {/* Floating lights background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-ping" />
      </div>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Innovation Lab
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
        >
          Exploring the frontiers of design, technology, and creative systems —
          where prototypes meet possibility.
        </motion.p>
      </section>

      {/* Focus Areas */}
      <section className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          { icon: "💡", title: "AI & Design", desc: "Using machine learning for creative automation." },
          { icon: "🎨", title: "Motion Systems", desc: "Animating logic and rhythm across brand ecosystems." },
          { icon: "🧠", title: "Prototyping", desc: "Bringing abstract ideas to life interactively." },
          { icon: "⚡", title: "Generative Tools", desc: "Building systems that design themselves." },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-1 text-purple-300">{f.title}</h3>
            <p className="text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Experimental Projects */}
      <section className="container pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400"
        >
          Featured Experiments
        </motion.h2>

        {experimental.length === 0 ? (
          <p className="text-ink/60 text-center">
            No experimental projects found in <code>projects.json</code>.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {experimental.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/work/${p.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-white/70">{p.summary}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container text-center pb-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Curiosity Builds the Future
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-2xl mx-auto mb-8"
        >
          These explorations blur the lines between art, logic, and technology.
          Have an idea worth exploring together?
        </motion.p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300"
        >
          Let’s Collaborate →
        </Link>
      </section>
    </main>
  );
}
