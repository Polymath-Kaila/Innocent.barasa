"use client";
import { useState } from "react";
export default function ContactPage() {
  const endpoint = process.env.NEXT_PUBLIC_FORMS_ENDPOINT;
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [loading, setLoading] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) { setStatus("error"); return; }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    try {
      const res = await fetch(endpoint as string, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) { setStatus("ok"); form.reset(); } else setStatus("error");
    } catch { setStatus("error"); } finally { setLoading(false); }
  }
  return (
    <main>
      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-extrabold">Let’s build something meaningful</h1>
          <p className="text-ink/80 mt-3">For collaborations, speaking, or consulting—drop a note. I read every message.</p>
          <div className="mt-6 text-ink/70 text-sm">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</div>
        </div>
        <form onSubmit={onSubmit} className="card p-6 space-y-4">
          <div><label className="block text-sm mb-1">Name</label><input name="name" required placeholder="Your name" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 outline-none" /></div>
          <div><label className="block text-sm mb-1">Email</label><input type="email" name="email" required placeholder="you@example.com" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 outline-none" /></div>
          <div><label className="block text-sm mb-1">Subject</label><input name="subject" placeholder="Project / Talk / Collaboration" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 outline-none" /></div>
          <div><label className="block text-sm mb-1">Message</label><textarea name="message" required rows={5} placeholder="Tell me about your project..." className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 outline-none"></textarea></div>
          <button disabled={loading} className="btn-primary">{loading ? "Sending..." : "Send message"}</button>
          {status === "ok" && <p className="text-cyan-400">Thanks! I’ll get back to you shortly.</p>}
          {status === "error" && <p className="text-red-400">Something went wrong. Check the form endpoint in your .env.</p>}
          {!endpoint && <p className="text-ink/60 text-sm">Tip: Set NEXT_PUBLIC_FORMS_ENDPOINT in .env.local</p>}
        </form>
      </section>
    </main>
  );
}
