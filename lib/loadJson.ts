export async function loadJson<T>(path: string): Promise<T> {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    return (await res.json()) as T;
  } catch (error) {
    console.error("loadJson error:", error);
    // ✅ Always return a default empty structure, never null
    return [] as unknown as T;
  }
}
