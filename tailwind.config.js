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
          accent1: theme.colors.yellow.hair,
          accent1h: theme.colors.yellow.hair2,
          accent2: theme.colors.blue.cornflower,
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
