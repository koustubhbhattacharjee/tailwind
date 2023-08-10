/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge:['./**/*.html'],
  darkMode: false,
  content: [],
  theme: {
    fontfamily:{
      'sans':['Montserrat','sans-serif'],

    },
    extend: {
      // screens:{
      //   huge: '2000px'
      // },
   
    },
  },
  variants:{
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
   
  ],
}

