/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bongee:['Bungee Shade'],
        montserrat:['Montserrat']

      },
      colors:{
        blueberry:'#02142e'
      }
    },
  },
  plugins: [],
}

