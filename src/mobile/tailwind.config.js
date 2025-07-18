/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: [
   "./components/**/*.{ts,tsx}", 
   "./app/**/*.{ts,tsx}", // Local Directories
   "../components/**/*.{ts,tsx}", // Shared Components
   "./**/*.{ts,tsx}", // Catch All
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

