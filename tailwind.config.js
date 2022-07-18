const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      cyan:colors.cyan,
      pink:colors.pink,
      green:colors.green,
      red:colors.red
    },
    extend: {
      colors: {
        night: "#151515",
        dusk: "#202022",
        dawn: "#949495",
        react: "#61dafb",
        nextjs: "#fafafa",
        js: "#d6ba32",
        html: "#dd4b25",
        css: "#254bdd",
        redux: "#7248b6",
        saga: "#84d269",
        node: "#3b823c",
        git: "#161b22",
        docker: "#2496ec",
        babel: "#f9dc3c",
        cypress: "#47474a",
        ts: "#3074bf",
        tailwind: "#08b6d3",
        webpack: "#2b3a42",
        "story-book": "#ff4685",
        "styled-components": "#d76c8d",
        "blue-gray": colors.blueGray,
        "cool-gray": colors.coolGray,
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
