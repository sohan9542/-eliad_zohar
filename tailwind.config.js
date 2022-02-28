module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        pr:"#b015cf"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}