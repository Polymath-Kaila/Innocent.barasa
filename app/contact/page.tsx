"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const endpoint = process.env.NEXT_PUBLIC_FORMS_ENDPOINT;
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [loading, setLoading] = useState(false);

  // Automatically clear success/error message after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    try {
      const res = await fetch(endpoint as string, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a12] via-[#0f0f1f] to-[#1a0929] text-white overflow-hidden">
      {/* Background motion layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.12),transparent_60%)] blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.12),transparent_60%)] blur-3xl animate-pulse delay-700"></div>

      <section className="container mx-auto py-24 px-4 md:px-12 grid md:grid-cols-2 gap-14 relative z-10">
        {/* Text / Info side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            Let’s Build Something Extraordinary
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Looking for striking visuals, a brand refresh, or a creative partner
            to bring your vision to life? I’m available for freelance design
            work, collaborations, and creative consulting — let’s turn your
            ideas into experiences that stand out.
          </p>

          <p className="text-white/50 text-sm">
            <span className="text-purple-400">Reach me directly:</span>{" "}
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "+254 (759) 541-736"}
          </p>
        </motion.div>

        {/* Form side */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative bg-white/10 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.15)] backdrop-blur-md space-y-5"
        >
          <div>
            <label className="block text-sm text-white/60 mb-1">Name</label>
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Subject</label>
            <input
              name="subject"
              placeholder="Project / Talk / Collaboration"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 outline-none focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            ></textarea>
          </div>

          {/* 🌈 Animated “Send Message” button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="relative w-full py-3 rounded-xl font-semibold overflow-hidden text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(90deg,#a855f7,#ec4899,#6366f1)] animate-[gradientMove_4s_linear_infinite] bg-[length:200%_200%]" />
            <span className="relative z-10">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </motion.button>

          {status === "ok" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-400 font-medium"
            >
              ✅ Thanks! I’ll get back to you shortly.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-red-400 font-medium"
            >
              ❌ Something went wrong. Check your form endpoint.
            </motion.p>
          )}
          {!endpoint && (
            <p className="text-white/40 text-xs text-center">
              Tip: Set <code>NEXT_PUBLIC_FORMS_ENDPOINT</code> in .env.local
            </p>
          )}
        </motion.form>
      </section>
    </main>
  );
}
