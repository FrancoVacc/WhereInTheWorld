/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "Dark-Blue": "#2b3945",
        "Very-Dark-Blue-dm-bg": "#202c37",
        "Very-Dark-Blue-lm-text": "#111517",
        "Dark-Gray-lm-input": "#858585",
        "Very-Light-Gray-lm-bg": "#fafafa",
        "White-dm-text-lm-elements": "#ffffff",
      },

      fontFamily: {
        nunito: ['"nunito sans"']
      },
    },

  },
  darkMode: 'class',
}

