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
        "tt-red": "#E30611",
        "tt-gray": "#88888D",
        "tt-dark-gray": "#5F6367",
        "tt-light-gray": "#9B9EA1",
      },
      borderRadius: {
        "tt-input": "0.25rem",
        "tt-card": "1rem",
        "tt-bth": "0.5rem",
      },
      textColor: {
        DEFAULT: "#000",
      },
      backgroundColor: {
        DEFAULT: "#FFF",
        "tt-bg": "#FFF",
        // "tt-accent-bg": "#F2F3F7",
      },
    },
  },
  plugins: [],
}

