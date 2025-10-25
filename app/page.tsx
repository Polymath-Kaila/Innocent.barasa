import { loadJson } from "@/lib/loadJson";
import type { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Work — Innocent Barasa" };

export default async function WorkPage() {
  const data = await loadJson<Project[]>("/data/projects.json");
  const projects = Array.isArray(data) ? data : [];

  return (
    <main>
      <section className="container py-12 md:py-16">
        <h1 className="text-4xl font-extrabold mb-2">Work</h1>
        <p className="text-ink/80 mb-8">
          A selection of projects that pair craft with outcomes.
        </p>

        {projects.length === 0 ? (
          <p className="text-ink/60">
            No projects found in <code>/public/data/projects.json</code>.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.slug} className="card overflow-hidden">
                <Link href={`/work/${p.slug}`} className="no-underline">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-ink/70">{p.summary}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
