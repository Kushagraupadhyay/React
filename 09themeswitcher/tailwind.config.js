/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class", // notifying tailwind to update darkmode based on class 
  theme: {
    extend: {},
  },
  plugins: [],
}

