/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        colors: {
          'arq-blue': '#001F3F',   // Substitua pelo código exato do azul dela
          'arq-orange': '#D35400', // Substitua pelo código exato do laranja dela
        },
      },
    },
  plugins: [],
}