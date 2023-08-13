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
      }
    },
    
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}