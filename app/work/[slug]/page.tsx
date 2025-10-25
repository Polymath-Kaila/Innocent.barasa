import { loadJson } from "@/lib/loadJson";
import type { Project } from "@/lib/types";
import Image from "next/image";
import MetricGrid from "@/components/MetricGrid";

export default async function WorkDetail({ params }: { params: { slug: string } }) {
  const projects = await loadJson<Project[]>("/data/projects.json");
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return <div className="container py-16">Not found.</div>;
  return (
    <main>
      <article className="container py-12 md:py-16">
        <h1 className="text-4xl font-extrabold">{p.title}</h1>
        <p className="mt-3 text-ink/80 max-w-2xl">{p.summary}</p>
        <div className="relative aspect-[16/9] mt-6 card overflow-hidden">
          <Image src={p.cover} alt={p.title} fill className="object-cover" />
        </div>
        {p.story?.length ? (
          <section className="mt-8 grid gap-4">
            {p.story.map((s) => <p key={s} className="text-ink/80">{s}</p>)}
          </section>
        ) : null}
        {p.metrics?.length ? (
          <section className="mt-8">
            <MetricGrid items={p.metrics} />
          </section>
        ) : null}
        {p.gallery?.length ? (
          <section className="mt-10 grid md:grid-cols-2 gap-4">
            {p.gallery.map((g) => (
              <div key={g} className="relative aspect-[16/10] card overflow-hidden">
                <Image src={g} alt={`${p.title} shot`} fill className="object-cover" />
              </div>
            ))}
          </section>
        ) : null}
      </article>
    </main>
  );
}
