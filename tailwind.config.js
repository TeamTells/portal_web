/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "tt-main-backgorund": "rgba(255, 255, 255, 1)",
        "tt-main-text": "rgba(34, 34, 34, 1)",
        "tt-secondary-text": "rgba(155, 155, 155, 1)",
        "tt-background-icon": "rgba(226, 227, 228, 1)",
        "tt-field-icon": "rgba(150, 159, 168, 1)",
        "tt-icon": "rgba(104, 105, 105, 1)",
        "tt-primary": "rgba(227, 6, 17, 1)",
        "tt-secondary": "rgba(0, 123, 255, 1)",
        "tt-main-background": "rgba(255, 255, 255, 1)",
        "tt-unaccented-background": "rgba(246, 247, 248, 1)",
        "tt-contrast-text": "rgba(255, 255, 255, 1)",
        "tt-field-background": "rgba(236, 241, 247, 1)",
        "tt-field-border": "rgba(220, 225, 230, 1)",
        "tt-field-border-error": "rgba(255, 216, 216, 1)",
        "tt-field-border-success": "rgba(192, 236, 212, 1)",
        "tt-field-background-error": "rgba(255, 245, 245, 1)",
        "tt-field-background-success": "rgba(241, 255, 244, 1)",


        "tt-light-light-gray": "#F2F3F7",
        "tt-gray": "#88888D",
        "tt-dark-gray": "#5F6367",
        "tt-light-gray": "#9B9EA1",
        "tt-light-blue": "#C2E7FE",
        "tt-lighter-gray": "#BCC1C6",

        "tt-selected-section-text-color": "#1268E4",
        "selected-section-icon-background-color": "#C1D5F4",
        "tt-background-hover-2": "#f3f3f3",
      },
      maxWidth: {
        "tt-field": "334px",
      },
      height: {
        "tt-field": "56px",
      },
      borderRadius: {
        "tt-input": "0.25rem",
        "tt-toast": "0.25rem",
        "tt-card": "1rem",
        "tt-card-large": "4rem",
        "tt-bth": "0.5rem",
      },
      textColor: {
        DEFAULT: "rgba(34, 34, 34, 1)",
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
