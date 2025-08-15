const { template } = require("lodash");

// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // ✅ replaces "purge"
  darkMode: 'class', // or 'media' or remove if unused
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Mozilla Headline', 'system-ui', 'sans-serif'],
        'sans': ['Mozilla Headline', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#000', // Twitter blue
        'primary-dark': '#000', // Darker shade for dark mode
        'primary-light': '#000', // Lighter shade for light mode
      },
      backgroundColor: {
        'primary': '#D3D0E3',
        'primary-dark': '#0d8ecf', // Darker shade for dark mode
        'primary-light': '#a0d8f0', // Lighter shade for light mode
      },
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-dark': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
      textColor: {
        'primary': '#000', // Twitter blue
        'primary-dark': '#0d8ecf', // Darker shade for dark mode
        'primary-light': '#a0d8f0', // Lighter shade for light mode
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
