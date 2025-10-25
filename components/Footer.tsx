"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter,FaTiktok, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61579905902819", label: "Facebook" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@InnocentBarasa-d6v", label: "Youtube" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/innocent-barasa-8a6312381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/innocent_mayuya?igsh=NHV3YzB5OWh5MWp3", label: "Instagram" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@innocent.barasa6?_t=ZM-90q6NJStx3g&_r=1", label: "Tiktok" },
    { icon: <FaXTwitter />, href: "https://x.com/InnocentBa99441?s=09", label: "X" },
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-b from-transparent to-[#120024] text-center py-12 text-white">
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-5">
        {/* Avatar */}
        <motion.div
          className="w-20 h-20 rounded-full border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] overflow-hidden"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="/media/innocent.jpeg"
            alt="innocent barasa"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Signature */}
        <p className="text-sm text-purple-200 font-light">
          Presented & owned by{" "}
          <Link
            href="https://github.com/Polymath-Kaila"
            className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
            target="_blank"
          >
            Innocent Barasa
          </Link>
        </p>

        {/* Social icons */}
        <div className="flex space-x-5 text-xl mt-3">
          {socials.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#c084fc", y: -2 }}
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Innocent Barasa • All rights reserved.
        </p>
      </div>
    </footer>
  );
}
