/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0B',
          deep: '#050505',
        },
        bone: '#F1EEE7',
        smoke: '#A7A39B',
        line: '#292824',
        signal: {
          orange: '#FF4D2E',
        }
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Satoshi', 'sans-serif'],
        sans: ['"Inter Tight"', 'Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.055em',
        tight: '-0.035em',
      },
    },
  },
  plugins: [],
}
