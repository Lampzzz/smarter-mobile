/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        gray: {
          600: "#4B5563",
          800: "#202E42",
        },
        "white-blue": "#FAFCFF",
      },
      fontFamily: {
        athin: ["AlbertSans-Thin", "sans-serif"],
        aextralight: ["AlbertSans-ExtraLight", "sans-serif"],
        alight: ["AlbertSans-Light", "sans-serif"],
        aregular: ["AlbertSans-Regular", "sans-serif"],
        amedium: ["AlbertSans-Medium", "sans-serif"],
        asemibold: ["AlbertSans-SemiBold", "sans-serif"],
        abold: ["AlbertSans-Bold", "sans-serif"],
        aextrabold: ["AlbertSans-ExtraBold", "sans-serif"],
        ablack: ["AlbertSans-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
