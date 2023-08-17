/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'feed': 'calc(100vh - 56px)',
      },
      boxShadow: {
        'mini': '0 0 16px -8px rgba(0, 0, 0, 0.68)',
      }
    },
    
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}