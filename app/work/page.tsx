"use client";

import { useEffect, useState } from "react";
import { loadJson } from "@/lib/loadJson";
import type { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadJson<Project[]>("/data/projects.json").then((data) => {
      if (Array.isArray(data)) setProjects(data);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a0a1f] text-white">
      <section className="container py-24 md:py-32">
        <h1 className="text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Work
        </h1>
        <p className="text-ink/80 mb-12 text-lg">
          A showcase of crafted identities, immersive visuals, and purposeful design.
        </p>

        {projects.length === 0 ? (
          <p className="text-ink/60 text-center">
            No projects found 
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/work/${p.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
                >
                  {/* Subtle gradient border animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />

                  {/* Project image */}
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-sm font-medium text-white tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full shadow-lg">
                        View Case Study →
                      </span>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="relative p-6 flex flex-col justify-between bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-white/70 line-clamp-3">
                        {p.summary}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {(p.tags ?? []).slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
