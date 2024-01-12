/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#e2e2e2',
        primary: '#001f5a',
        secondary: '#0039ac',
        ash: '#808080',
        box: '#7c7c7c',
      },
      fontFamily: {
        serif: ['Lora', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
