/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    fontFamily: {
      riponFont: ["Graphik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
