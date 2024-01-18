/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white": "#F0F0F0",
        "green": "#00FF00",
        "gray": "#C0C0C0"
      },
      height: {
        "hero-image": "calc(100vh - 290px)"
      },
      maxWidth: {
        "full": "1000px"
      },
      backgroundImage: {
        "hero-image": "url('/images/hero.jpg)"
      }
    },
  },
  plugins: [],
}

