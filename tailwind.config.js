/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
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
        "tt-blue": "#007BFF",
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
      boxShadow: {
        "tt-popup-menu": "0px 0px 30px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
