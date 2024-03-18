/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["poppins"],
      noNotoSerif: ["Noto Serif Thai"],
      madimi: ["Madimi One"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
    extend: {
      colors: {
        primary: "#FB452D",
      },
    },
  },
  plugins: [],
};

