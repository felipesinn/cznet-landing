/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cznet-red': '#E74423',
        'cznet-orange': '#FF6600',
        'cznet-yellow': '#FFC107',
        'cznet-white': '#FFFFFF',
        'cznet-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
