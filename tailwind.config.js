module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        lightSaffron: '#FFCC99',
        gold: '#FFD700',
        deepBlue: '#002366',
        cream: '#F5F5DC'
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Noto Serif', 'serif'],
        alternative: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}