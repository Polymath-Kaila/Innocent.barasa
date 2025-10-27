"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/innovation", label: "Innovation" },
    { href: "/leadership", label: "Leadership" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link
          href="/"
          className="text-xl font-bold text-white tracking-wide hover:text-purple-400 transition-colors"
        >
          Innocent <span className="text-purple-400">Barasa</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative text-white/80 hover:text-white transition-colors duration-200",
                "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all hover:after:w-full",
                pathname === link.href && "text-white after:w-full after:bg-purple-400"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:shadow-[0_0_12px_#a855f7] transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
