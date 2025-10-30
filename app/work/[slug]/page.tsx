import { loadJson } from "@/lib/loadJson";
import type { Project } from "@/lib/types";
import Image from "next/image";
import MetricGrid from "@/components/MetricGrid";
import Link from "next/link";

export default async function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ Use absolute path for server-side fetching
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const data = await fetch(`${baseUrl}/data/projects.json`, {
    cache: "no-store",
  }).then((r) => r.json()).catch(() => []);

  const projects: Project[] = Array.isArray(data) ? data : [];

  // ✅ Normalize slug and find project
  const slug = decodeURIComponent(params.slug).toLowerCase();
  const p = projects.find((x) => x.slug.toLowerCase() === slug);

  // ✅ Fallback if not found
  if (!p)
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center text-white/70 bg-black">
        <p className="text-lg">⚠️ Project not found.</p>
        <Link
          href="/work"
          className="mt-4 text-purple-400 hover:text-pink-400 transition-colors"
        >
          ← Back to Work
        </Link>
      </main>
    );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a0a1f] text-white">
      <article className="container py-12 md:py-16">
        {/* Title & summary */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
          {p.title}
        </h1>
        <p className="text-white/70 text-lg max-w-2xl">{p.summary}</p>

        {/* Cover */}
        <div className="relative aspect-[16/9] mt-8 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Story */}
        {p.story?.length ? (
          <section className="mt-10 grid gap-4 text-white/80 leading-relaxed">
            {p.story.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </section>
        ) : null}

        {/* Metrics */}
        {p.metrics?.length ? (
          <section className="mt-10">
            <MetricGrid items={p.metrics} />
          </section>
        ) : null}

        {/* Gallery */}
        {p.gallery?.length ? (
          <section className="mt-10 grid md:grid-cols-2 gap-4">
            {p.gallery.map((g, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={g}
                  alt={`${p.title} image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </section>
        ) : null}

        {/* Tags */}
        {p.tags?.length ? (
          <div className="mt-10 flex flex-wrap gap-3">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}

        <Link
          href="/work"
          className="inline-block mt-16 text-purple-400 hover:text-pink-400 font-medium transition-colors"
        >
          ← Back to all work
        </Link>
      </article>
    </main>
  );
}
