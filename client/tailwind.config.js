/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#282661",
        "secondary" : "#0088cc",
        "tertiary" : "#EA7826",
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