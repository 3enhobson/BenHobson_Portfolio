/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#a2b67f",
        "secondary" : "#2a1e15",
        "tertiary" : "#707a5f",
        "quartenary" : "#666666"
      }
    },
    screens: {
  
      lg: { max: '2023px' },
     
      sm: { max: '1170px' },
      
    }
  },
  plugins: [],
}