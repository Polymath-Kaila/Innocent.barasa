"use client";

import { motion } from "framer-motion";
import { loadJson } from "@/lib/loadJson";
import type { Site, Project } from "@/lib/types";
import Hero from "@/components/Hero";
import WorkStripe from "@/components/WorkStripe";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [site, setSite] = useState<Site | null>(null); // ✅ allow null safely

  useEffect(() => {
    async function load() {
      const siteData =
        (await loadJson<Site>("/data/site.json").catch(() => null)) ?? {
          name: "",
          title: "",
          tagline: "",
          social: [],
        };
      setSite(siteData);

      const projData = await loadJson<Project[]>("/data/projects.json");
      if (Array.isArray(projData)) setProjects(projData);
    }

    load();
  }, []);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#090910] via-[#0f0f1a] to-[#181029] text-white">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.15),transparent_60%)] blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_60%)] blur-3xl animate-pulse delay-700"></div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-32 md:py-48">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
        >
          {site?.title || "Innocent Barasa"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl text-white/70 mt-6 max-w-2xl"
        >
          {site?.tagline ||
            "I craft systems, brands, and digital experiences that move people and ideas forward."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-10"
        >
          <a
            href="#work"
            className="inline-block px-8 py-3 text-lg font-medium rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all"
          >
            Explore My Work
          </a>
        </motion.div>
      </section>

      {/* Vision & Focus */}
      <section className="relative z-10 section-gradient">
        <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.2)] transition-all backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">
              Vision
            </h3>
            <p className="text-white/80 leading-relaxed">
              I design systems and stories that align teams and move audiences.
              From brands to products, the through-line is clarity, momentum, and
              measurable impact.
            </p>
          </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.2)] transition-all backdrop-blur-md"
    >
      <h3 className="text-2xl font-semibold text-pink-400 mb-3">
        Focus
      </h3>
      <p className="text-white/80 leading-relaxed">
        Brand systems, design leadership, motion, and prototyping. I
        combine storytelling with structure, emotion with clarity, and
        innovation with measurable design outcomes.
      </p>
    </motion.div>
        </div>
      </section>

      {/* Work Stripe */}
      <motion.div
        id="work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {projects.length > 0 ? (
          <WorkStripe projects={projects} />
        ) : (
          <div className="container py-12 text-white/50">
            No projects found. Check <code>/public/data/projects.json</code>.
          </div>
        )}
      </motion.div>

      {/* Footer tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center py-16 text-white/50 text-lg"
      >
        <span className="text-purple-400">Driven by purpose.</span> Guided by
        design. Crafted with emotion.
      </motion.div>
    </main>
  );
}
