
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
          'text': '#FFFFFF',
          'primary': '#191d30',
          'secondary': "#28304f",
          'light': "#8884d8",
          'accent': '#F7C316',
          'success': '#49E8A1',
          'fail': '#F94261',
      },
      fontFamily: {
        'main': ['Barlow', 'sans-serif']
      },
    },
  },
  plugins: [],
}


