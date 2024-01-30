/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      newGrey: '#1B1D1F',
      newBlack: '#111315',
      newBlue: '#6F757C',
      newLightBlue: '#BEE3CC',
      newWhite: '#FEF7EE',
      newYellow: '#F6C768',
      newPink: '#ED735D'

    }
    ,
    fontFamily: {
      'dm': ['DM Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

