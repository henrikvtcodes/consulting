const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const theme = require("./theme.js")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: theme.colors.blue.cornflower,
          accent1: theme.colors.blue.eyes,
          accent1h: theme.colors.blue.boy,
          accent2: theme.colors.yellow.minion,
          accent2h: theme.colors.yellow.jonquil,
          text1: theme.colors.black.raisin,
          text2: theme.colors.gray.rock,
          grey: theme.colors.gray.rock,
          black: theme.colors.black.raisin,
        },
        ...theme.colors,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
