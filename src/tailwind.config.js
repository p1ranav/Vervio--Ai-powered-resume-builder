/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // CRITICAL: Ensure this path is correct for your React components
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}