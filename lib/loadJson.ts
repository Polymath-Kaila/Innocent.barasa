export async function loadJson<T>(path: string): Promise<T | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : ""; // ✅ auto-detect production URL

    const res = await fetch(`${baseUrl}${path}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch JSON");
    return await res.json();
  } catch (err) {
    console.error("loadJson error:", err);
    return null;
  }
}
