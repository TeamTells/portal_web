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
        '670':'670px'
      },
      colors:{
        'red-rgba':'rgba(227,6,17,1)',
        'gray-800':'rgba(220,225,230,1)',
        'blue-1000':'rgba(42,58,205,1)',
        'green-1000':'rgba(39,185,167,1)',
      },
    },
  },
  plugins: [],
}

