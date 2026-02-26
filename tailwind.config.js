/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandDark: '#5F584A',
        brandLight: '#F7F6F3',
        brandAccent: '#CEA51D',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

