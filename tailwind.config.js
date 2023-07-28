/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(src/img/background.gif)",
        'tools': "url(src/img/backgroundTools.gif)",
      }
    },
  },
  plugins: [],
}

