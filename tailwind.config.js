// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // ✅ replaces "purge"
  darkMode: 'class', // or 'media' or remove if unused
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
