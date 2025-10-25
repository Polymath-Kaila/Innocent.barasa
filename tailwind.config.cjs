/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0A13", ink: "#EDE9FF",
        grape: { 300:"#B08CFF", 500:"#8D61FF", 600:"#7A4DFF" },
        cyan: { 400:"#64E1D9" }, magenta: { 500:"#E04BCE" }
      },
      boxShadow: { glow:"0 0 40px rgba(122,77,255,0.35)", glowSoft:"0 0 24px rgba(168,131,255,0.25)" }
    }
  }, plugins: []
};
