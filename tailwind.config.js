module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        deepBlue: '#002366',
        gold: '#FFD700',
        cream: '#F5F5DC',
        maroon: '#800020',
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