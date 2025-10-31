"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-gradient-to-b from-purple-900/40 to-black/40 rounded-2xl overflow-hidden shadow-lg border border-purple-500/10 hover:border-purple-400/40 transition duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-pink-400 transition">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm md:text-base line-clamp-2">
          {project.summary}
        </p>

        {/* Tags (optional) */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
