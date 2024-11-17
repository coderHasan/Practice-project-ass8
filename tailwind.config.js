/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        privetColor: "#9538E2",
      },
      colors: {
        textColor: "#9538E2",
      },
    },
  },
  plugins: [require("daisyui")],
};
