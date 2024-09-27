/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F58509",
        white: {
          DEFAULT: "#FCFCFC",
          100: "#F6F6F6",
        },
        gray: {
          DEFAULT: "#696969",
        },
      },
    },
  },
  plugins: [],
};
