/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jsx,ts,tsx}",
    "./components/**/*.{jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary:"#20252D",
          heading:"#00C399",
          secondary:"#171C23",
      },
      screens:{
        "xl":"1200px",
        "lg":"1024px",
        "md":"768px",
        "sm":"640px",
        "sm_max":"max:639px",
        "md_max":"max:767px",
        "lg_max":"max:1023px",
      },
    },
  },
  plugins: [],
}