/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: "#a8327f",
        secondary: "#fcf2f9",
        dimblack: "#080005",
        dimblackopacity: "#0800057c",
        dimred: "#e61037",
        dimwhite: "#a8327f",
        transWhite: '#cfbcc825'
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"]
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700"
      },
      backgroundImage: {
       heroImage: "url('./src/assets/photo-1627853767822-4bb7a2683da6.jpeg')",
      }
    },
  },
  plugins: [],
}