/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width:{
        '700':'767px',
        '520':'520px',
      },
      colors:{
        'red-rgba':'rgba(227,6,17,1)',
      },
    },
  },
  plugins: [],
}

