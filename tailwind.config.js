/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Regular", "sans-serif"],
        semiBold: ["SemiBold", "sans-serif"],
        boldItalic: ["BoldItalic", "sans-serif"],
        italic: ["Italic", "sans-serif"],
        bold: ["Bold", "sans-serif"],
        light: ["Light", "sans-serif"],
      },
      colors: {
        darkGray: "#141313",
        purpleGrad: "#B86ADF",
        redGrad: "#FF6C63",
        yellowGrad: "#FFB147",
      },
    },
  },
  plugins: [],
};
