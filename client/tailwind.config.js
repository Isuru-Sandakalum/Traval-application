/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:'#FF6969',
      },
      fontFamily:{
        customeF:'Poppins',
      }
    },
  },
  plugins: [],
}

