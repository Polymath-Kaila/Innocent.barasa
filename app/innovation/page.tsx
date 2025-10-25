import { loadJson } from "@/lib/loadJson";
import type { Project } from "@/lib/types";

export const metadata = { title: "Innovation — Innocent Barasa" };

export default async function InnovationPage() {
  const data = await loadJson<Project[]>("/data/projects.json");
  const projects = Array.isArray(data) ? data : [];

  const experimental = projects.filter((p) =>
    (p.tags ?? []).includes("Experimental")
  );

  return (
    <main>
      <section className="container py-12 md:py-16">
        <h1 className="text-4xl font-extrabold mb-2">Innovation</h1>
        <p className="text-ink/80 mb-8">
          Experiments that explore the boundaries of design and computation.
        </p>

        {experimental.length === 0 ? (
          <p className="text-ink/60">
            No experimental projects found in <code>projects.json</code>.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {experimental.map((p) => (
              <article key={p.slug} className="card p-6">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-ink/70 mb-2">{p.summary}</p>
                <p className="text-xs text-ink/60">
                  Tags: {(p.tags || []).join(", ")}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
