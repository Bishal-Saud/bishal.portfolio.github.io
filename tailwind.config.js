/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
    content: ["./*.html","./dist/Projects/*.html"],
  },
  theme: {
    extend: { 
       backgroundColor: {
      'black': '#141414',
      'blue-500': '#3333ff',
    },
    textColor: {
      'white': '#eee',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans'],
    },
  }, 
},
variants: {},
  plugins: [],
}

// tailwind.config.js



