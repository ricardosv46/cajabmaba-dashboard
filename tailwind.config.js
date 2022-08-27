/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C000C',
        primarydark: '#2F080D',
        butacas: '#C30404',
        secondary: '#F0AC42',
        tertiary: '#A02E2B',
        text: '#505050',
        blacklight: '#1c1c1c',
      }
    },
  },
  plugins: [],
}