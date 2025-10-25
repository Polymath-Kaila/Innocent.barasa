export const metadata = { title: "Leadership — Innocent Barasa" };
export default function LeadershipPage() {
  return (
    <main>
      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-3xl font-bold">Leadership Principles</h2>
          <ul className="list-disc pl-6 mt-3 text-ink/80 space-y-2">
            <li>Clarity over certainty</li>
            <li>Design as a team sport</li>
            <li>Prototype to align</li>
            <li>Narratives win hearts and budgets</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-3xl font-bold">Talks & Workshops</h2>
          <ul className="mt-3 text-ink/80 space-y-2">
            <li><span className="badge mr-2">2025</span> Systems that Scale — Build Africa</li>
            <li><span className="badge mr-2">2024</span> Designing for Trust — Design Days</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
