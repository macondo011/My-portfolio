/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        bongee:['Bungee Shade'],
        montserrat:['Montserrat']

      },
      colors:{
        blueberry:'#02142e',
        chicken:'#F6FF01',
        lime:'#A6FF00',
        rose:'#FC2947',
        pinkpanter:'#FF55BB',
        graper:'#7E22CE'
      }
    },
  },
  plugins: [],
}

