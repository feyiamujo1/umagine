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
        "blue": "#080876",
        "light-blue": "#0066cc",
        "light-blue-2": "#00b2ff",
        "yellow": "#ebd228"
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
