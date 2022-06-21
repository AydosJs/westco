/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
}
