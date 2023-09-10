/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["cupcake", "retro"],
    extend: {},
  },
  plugins: [require("daisyui")],
}