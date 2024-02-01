/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}", "./static/js/*.js"],
  theme: {
    extend: {
      colors: {
        "white": "#F0F0F0",
        "darker-white": "#E7E7E7", 
        "green-l": "#57FF6C",
        "green-m": "#2C9F2A",
        "green-h": "#03610C",
        "gray": "#C0C0C0"
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
        custom: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

