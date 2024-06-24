/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        'red': '#FF5A5A',
        'blue':'rgb(47,0,255)',
        'green':'rgb(0,195,0)'
      }
    },
  },
  plugins: [],
}

