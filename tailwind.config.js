/** @type {import('tailwindcss').Config} */
// Tailwind v4 lê os tokens a partir de @theme em globals.css.
// Este arquivo permanece apenas para ferramentas/plugins que ainda esperam encontrá-lo.
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F2340",
        "navy-deep": "#0A1930",
        orange: "#FF6A3D",
        "orange-dark": "#E85A2A",
        paper: "#F8F6F2",
        ink: "#16202E",
        muted: "#A9AFB8",
      },
    },
  },
  plugins: [],
};
