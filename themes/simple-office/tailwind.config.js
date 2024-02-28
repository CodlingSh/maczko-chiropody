/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}", "./static/js/*.js", "../../layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white": "#F9FBFE",
        "darker-white": "#E7E7E7", 
        "green-l": "#90E58F",
        "green-m": "#2C9F2A",
        "green-h": "#03610C",
        "gray": "#A2AF9F",
        "dark-gray": "#222E50"
      },
      height: {
        "hero-image": "78.016vh"
      },
      maxWidth: {
        "full": "1000px"
      },
      backgroundImage: {
        "hero-image": "url('/images/hero.jpg)"
      },
      fontFamily: {
        custom: ['hind', 'sans-serif']
      }
    },
  },
  plugins: [],
}

