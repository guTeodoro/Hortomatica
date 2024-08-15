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
        '664px':'664px',
        '700px':'700px',
        '624px':'624px',
        '536px':'536px',
        '500px':'500px',
        '422px':'422px',
        '444px':'444px',
        '856px':'856px',
        '754px':'754px',
        '36%': '36%',
        '47.5%': '47.5%',
        '32%':'32%',
      },
      backgroundImage: {
        'hortomática': "url('/inicio-img.png')",
        'componentes': "url('/fundo_componentes.png')"
      },
      screens: {
        'mob': {'max': '1023px'},
      }
    },
  },
  plugins: [],
}