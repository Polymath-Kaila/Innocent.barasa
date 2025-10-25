import Link from "next/link";
export default function Nav() {
  return (
    <header className="container py-6 flex items-center justify-between">
      <Link href="/" className="no-underline"><span className="text-lg font-semibold">Innocent Barasa</span></Link>
      <nav className="flex gap-4 text-sm">
        <Link href="/work" className="no-underline">Work</Link>
        <Link href="/innovation" className="no-underline">Innovation</Link>
        <Link href="/leadership" className="no-underline">Leadership</Link>
        <Link href="/about" className="no-underline">About</Link>
        <Link href="/contact" className="no-underline btn-primary">Contact</Link>
      </nav>
    </header>
  );
}
