/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['Archivo', 'sans-serif']
      },
      colors: {
        neo: '#E8FF3C',
        ink: '#0a0a0a',
        paper: '#FFFDF5'
      },
      boxShadow: {
        brutal: '4px 4px 0 #000',
        brutalSm: '2px 2px 0 #000'
      }
    }
  },
  plugins: []
}
