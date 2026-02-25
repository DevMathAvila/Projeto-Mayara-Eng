/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        colors: {
          'arq-blue': '#001F3F',
          'arq-orange': '#D35400',
        },
      },
    },
  plugins: [],
}