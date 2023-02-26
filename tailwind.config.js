/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0c4a6e",
      },
      width:{
        sm:"320px",
        md:"500px",
        lg:"950px"
      },
      height:{
        agency:"370px",
        nav:"calc(100vh - 54px)"
      }
    },
  },
  plugins: [],
}
