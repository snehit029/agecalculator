/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple: "	#854dff",
        lightred: "#ff5757",
        white: "#ffffff",
        offWhite: "#f0f0f0",
        lightgrey: "#dbdbdb",
        smokeygrey: "#716f6f",
        offBlack: "#141414",
      }
    },
  },
  plugins: [],
}

