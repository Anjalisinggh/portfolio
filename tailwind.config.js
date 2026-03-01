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
        primary: '#C6A667',
        'primary-dark': '#8D8D8D',
        'primary-light': '#EDEADE',
        lime: '#a3e635',
        'lime-dark': '#84cc16',
        'lime-glow': 'rgba(163, 230, 53, 0.15)',
      },
      backgroundColor: {
        'primary': '#0D0D0D',
        'primary-dark': '#1A1A1A',
        'primary-light': '#242424',
        cinematic: '#000000',
      },
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-dark': '0 4px 12px rgba(14, 165, 233, 0.3)',
        'lime-glow': '0 0 60px rgba(163, 230, 53, 0.15), 0 0 120px rgba(163, 230, 53, 0.08)',
      },
      textColor: {
        'primary': '#EDEADE',
        'primary-dark': '#8D8D8D',
        'primary-light': '#C6A667',
      },
      animation: {
        spinSlow: 'spin 8s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

