/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "basic":"#14383A",
        "light":"#EFF5F5",
        "blue":"#138176",
        "Orange":"#EB6440",
        "Sky":"#A8DADC",
        "Error":"#E63946",
        "Text":"#141212",
        "Text-color":"#138176",
      }
      ,
      fontFamily:{
        "playfair":["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}

