/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#fad5ab",
        secondary: "#4DD0E1",
        accent: "#333333",
      },
    },
  },
  plugins: [],
};
