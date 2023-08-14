/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "#30445A",
        primary: {
          50: "#f1fcfb",
          100: "#cef9f2",
          200: "#9df2e6",
          300: "#64e4d7",
          400: "#34cdc2",
          500: "#19a49c",
          600: "#138e89",
          700: "#13726f",
          800: "#145b5a",
          900: "#164b4b",
          950: "#062c2d",
        },
        secondary: {
          50: "#f5f5fa",
          100: "#eaebf4",
          200: "#d1d4e6",
          300: "#a9aed0",
          400: "#7b84b5",
          500: "#5a649d",
          600: "#4c548c",
          700: "#3a3f6a",
          800: "#333859",
          900: "#2e314c",
          950: "#1f2032",
        },
        gray: {
          50: "#f5f7fa",
          100: "#eaeef4",
          200: "#d0dbe7",
          300: "#a7bcd2",
          400: "#789ab8",
          500: "#567da1",
          600: "#436386",
          700: "#37516d",
          800: "#30445a",
          900: "#2c3b4e",
          950: "#1e2733",
        },
      },
      fontFamily: {
        avenir: ["AVENIR", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
