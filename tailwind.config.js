/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["cupcake", "retro"],
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        btnColor: '#c95fa1',
      },
    },
  },
  plugins: [require("daisyui")],
}