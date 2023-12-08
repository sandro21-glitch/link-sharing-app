/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strongPurple: 'rgb(99, 60, 255)',
        veryLightPurple: 'rgb(239, 235, 255)',
        darkGrey: "#737373",
      },
    },
  },
  plugins: [],
};
