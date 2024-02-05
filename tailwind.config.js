/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primarybordercolor' : '#E6A0CD'
      }
    },
    colors: {
      'primary': '#FFC3C3',
      'txt-color': '#360037',
      'secondary': '#E6A0CD',
      
      
    },
  },
  plugins: [],
}