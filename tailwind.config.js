/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "grey": "#f8f8f8",
        "grey-2": "#929292",
        "grey-3": "#f5f5f5",
        "grey-4": "#969696",
        "custom-black": "#565656",
        "blue": "#0066cc",
        "lighter-blue": "#f5f5f9",
        "light-blue": "#0066cc",
        "light-blue-2": "#00b2ff",
        "hover-blue": "#E6E6F1",
        "yellow": "#ebd228",
        "hero": "radial-gradient(circle, rgba(230,230,241,1) 3%, rgba(255,255,255,1) 18%, rgba(255,255,255,1) 40%, rgba(230,230,241,1) 100%);"
      },
      boxShadow: {
        "custom-stuff": "1px 3px 10px 0px #1B1B1B1A;"
      },
    },
    fontFamily: {
      'Uncutsans': ["UncutSans", 'sans-serif'],
      'Poppins': ["Poppins", 'sans-serif'],
    },
  },
  plugins: []
};
