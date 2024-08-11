/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '85px': '85px',
        '280px': '280px',
        '72px': '72px',
        '272px': '272px',
        '88px': '88px',
        '352px': '352px',
        '260px': '260px',
      },
      backgroundImage: {
        'hortomática': "url('/inicio-img.png')"
      },
      screens: {
        'mob': {'max': '1023px'},
      }
    },
  },
  plugins: [],
}