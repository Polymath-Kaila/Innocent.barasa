"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function WorkStripe({ projects }: { projects: any[] }) {
  return (
    <section>
      <div className="container py-10"><h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2></div>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 px-6 pb-8">
          {projects.map((p) => (
            <motion.article key={p.slug} whileHover={{ y: -6, scale: 1.01 }} className="min-w-[320px] max-w-[360px] card overflow-hidden">
              <Link href={`/work/${p.slug}`} className="no-underline">
                <div className="relative aspect-[16/10]"><Image src={p.cover} alt={p.title} fill className="object-cover" /></div>
                <div className="p-4"><h3 className="font-semibold">{p.title}</h3><p className="text-sm text-ink/70">{p.summary}</p></div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
