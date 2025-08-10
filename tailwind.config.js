/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your color palette
        brand: {
          light: '#00A8CC',
          DEFAULT: '#0C7B93',
          dark: '#142850',
        },
        // Background colors
        bgc: {
          light: '#FFFFFF',
          dark: '#1F2937'
        },
        // Text colors
        txt: {
          light: '#142850',  // Dark blue
          dark: '#F2EFE7'    // Off-white
        }
      },
      // Add CSS variables for easier theming
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        primary: 'var(--color-brand-light)',
        secondary: 'var(--color-brand-dark)',
      },
    }
  },
  plugins: [
    function({ addVariant }) {
      // Add an 'inverted' variant that works in both light and dark modes
      addVariant('inverted', '&.inverted');
    }
  ],
}
