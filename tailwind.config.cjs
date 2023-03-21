/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        blue: '#006D77',
        orange: '#FFF3EA',
        blueLight: '#0093A0'
      }
    },
  },
  plugins: [],
}
