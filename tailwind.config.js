/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 10px 20px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 25%);",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
