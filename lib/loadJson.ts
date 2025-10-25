export async function loadJson<T = unknown>(path: string): Promise<T> {
  try {
    const isServer = typeof window === "undefined";
    const base =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (isServer ? "http://localhost:3000" : "");

    // Ensure valid URL (works both client & server)
    const url = path.startsWith("http")
      ? path
      : `${base}${path.startsWith("/") ? path : `/${path}`}`;

    const res = await fetch(url, { cache: "no-store" });
    const contentType = res.headers.get("content-type");

    if (!res.ok) {
      console.error(`❌ Failed to load ${url} (${res.status})`);
      return [] as T;
    }

    if (!contentType?.includes("application/json")) {
      console.error(`❌ ${url} did not return JSON, got ${contentType}`);
      return [] as T;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌ loadJson error:", err);
    return [] as T;
  }
}
