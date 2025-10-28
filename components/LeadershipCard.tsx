"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipCard({ name, year, quote, icon, rating }: {
  name: string;
  year: string;
  quote: string;
  icon: string;
  rating?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative bg-gradient-to-br from-[#0f0f15] to-[#1a1a22] border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-md"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-purple-500/40">
          <Image src={icon} alt={name} width={48} height={48} className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-white/90">{name}</h3>
          <span className="text-xs text-white/50">{year}</span>
        </div>
      </div>

      <p className="text-white/80 italic text-lg leading-relaxed mb-4">“{quote}”</p>

      {rating && (
        <div className="flex items-center gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
