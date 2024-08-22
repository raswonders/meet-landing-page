/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-600": "rgba(77, 150, 169, 1)",
        "cyan-300": "rgba(143, 227, 249, 1)",
        "purple-600": "rgba(133, 95, 177, 1)",
        "purple-300": "rgba(217, 184, 255, 1)",
        "slate-900": "rgba(40, 40, 61, 1)",
        "slate-600": "rgba(135, 135, 157, 1)",
        "slate-300": "rgba(209, 209, 223, 1)",
        "white": "rgba(250, 250, 250, 1)",
      },
      fontFamily: {
        "red-hat-display": "Red Hat Display",
      },
    },
  },
  plugins: [],
};
