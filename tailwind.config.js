/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Grounded editorial palette
        // Warm off-white
        parchment: '#F5F4F0',
        // Deep charcoal
        charcoal: '#1A1A1A',
        // Earthy olive/moss
        moss: '#5C6150',
        // Muted forest green
        forest: '#2C352A',
        // Subtle clay/rust
        clay: '#8C5A48',
        // Smoke 
        smoke: '#8F8F8A',
        // Restrained gold-tan
        gold: '#D4C3A3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        '3xl': '2rem',
        '4xl': '3rem'
      },
      boxShadow: {
        soft: '0 20px 45px rgba(26, 26, 26, 0.08)',
      }
    }
  },
  plugins: []
};
