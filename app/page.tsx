import { loadJson } from "@/lib/loadJson";
import type { Site, Project } from "@/lib/types";
import Hero from "@/components/Hero";
import WorkStripe from "@/components/WorkStripe";

export default async function HomePage() {
  const site = await loadJson<Site>("/data/site.json").catch(() => ({
    name: "",
    title: "",
    tagline: "",
    social: [],
  }));

  const data = await loadJson<Project[]>("/data/projects.json");
  const projects = Array.isArray(data) ? data : [];

  return (
    <main>
      <Hero />
      <section className="section-gradient">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-6 items-start">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Vision</h3>
            <p className="text-ink/80 mt-2">
              I design systems and stories that align teams and move audiences.
              From brands to products, the through-line is clarity, momentum, and measurable impact.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Focus</h3>
            <p className="text-ink/80 mt-2">
              Brand systems, design leadership, motion, and prototyping.
              Tools: Figma, AE, Blender, Web tech.
            </p>
          </div>
        </div>
      </section>
      {projects.length > 0 ? (
        <WorkStripe projects={projects} />
      ) : (
        <div className="container py-12 text-ink/60">
          No projects found. Check <code>/public/data/projects.json</code>.
        </div>
      )}
    </main>
  );
}
