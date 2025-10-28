export async function loadJson<T>(path: string): Promise<T> {
  const isServer = typeof window === "undefined";
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (isServer ? process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000" : "");

  const url = `${base}${path}`;
  
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return res.json() as Promise<T>;
  } catch (error) {
    console.error("Error loading JSON:", error);
    throw error;
  }
}
