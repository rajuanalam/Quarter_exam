/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nunito': ['Nunito'],
        'Poppins': ['Poppins']
      },
      colors:{
        'btn': '#FF5A3C',
        'bannerBgColor' : "#F2F6F7",
        'textColor':"#5C727D",
        'textTwoColor' : "#0A2C3D"
      },
      maxWidth: {
        'container': '1170px',
      }
    },
  },
  plugins: [],
}