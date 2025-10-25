import Image from "next/image";
export const metadata = { title: "About — Innocent Barasa" };
export default function AboutPage() {
  return (
    <main>
      <section className="container py-12 md:py-16 grid md:grid-cols-[260px_1fr] gap-8 items-start">
        <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden card">
          <Image src="/media/innocent-portrait.svg" alt="Innocent Barasa portrait" fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">Innocent Barasa</h1>
          <p className="text-ink/80 mt-3 max-w-2xl">
            Designer, innovator, and leadership enthusiast based in Nairobi.
            I turn ambiguity into momentum through narrative, systems, and craft.
          </p>
        </div>
      </section>
    </main>
  );
}
