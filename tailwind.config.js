/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      quick: ['Quicksand']
    },
    colors: {
      black: '#1D191A',
      white: '#F5F5F5',
      lightGray: '#E1DFE1',
      gray: '#C0BFC0',
      softRed: '#FF605C',
      softGreen: '#00CA4E',
      softYellow: '#FFBD44',
      lightBlue: '#85E4DC',
      lightPurple: '#6962C9',
      purple: '#473C88',
    },
  },
  plugins: [],
}