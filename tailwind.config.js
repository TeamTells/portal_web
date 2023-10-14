/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "tt-black": "#000",
        "tt-white": "#FFF",
        "tt-light-light-gray": "#F2F3F7",
        "tt-stroke": "#DCE1E6",
        "tt-red": "#E30611",
        "tt-gray": "#88888D",
        "tt-dark-gray": "#5F6367",
        "tt-light-gray": "#9B9EA1",
        "tt-bg-error": "#FFF5F5",
        "tt-stroke-error": "#FFD8D8",
        "tt-blue": "#007BFF"
      },
      maxWidth: {
        "tt-field": "334px",
      },
      height: {
        "tt-field": "56px",
      },
      borderRadius: {
        "tt-input": "0.25rem",
        "tt-card": "1rem",
        "tt-bth": "0.5rem",
      },
      textColor: {
        DEFAULT: "#000",
        "tt-field": "#212121",
      },
      backgroundColor: {
        DEFAULT: "#FFF",
        "tt-bg": "#FFF",
      },
    },
    extend: {
      width:{
        '700':'767px',
        '520':'520px',
        '670':'670px',
        '340':'340px',
      },
      height:{
        '1017':'1017px',
      },
      colors:{
        'red-rgba':'rgba(227,6,17,1)',
        'gray-800':'rgba(220,225,230,1)',
        'blue-1000':'rgba(42,58,205,1)',
        'green-1000':'rgba(39,185,167,1)',
        'white-1':'rgba(250,251,252,1)',
        'gray-1':'rgba( 235,236,240,1)'
      },
    },
  },
  plugins: [],
}

