/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2874F0', // Flipkart classic primary blue
          dark: '#1C5BBA',
          light: '#EBF4FF',
          yellow: '#FFE11B', // Flipkart yellow
          orange: '#FB641B', // Flipkart orange CTA
          green: '#388E3C', // Grocery / discount green
          lightgreen: '#E8F5E9',
          surface: '#F1F3F6', // Flipkart background gray
          border: '#E0E0E0',
          darkText: '#212121',
          mutedText: '#878787',
          grocery: '#10893E', // Fresh supermarket green
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'fk': '0 2px 4px 0 rgba(0,0,0,.08)',
        'fk-hover': '0 4px 16px 0 rgba(0,0,0,.15)',
        'card': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
