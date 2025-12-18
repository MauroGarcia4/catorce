/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf7f4',
          100: '#f6efe9',
          200: '#efdfd2',
          300: '#e6cdb8',
          400: '#bfa28a',
          DEFAULT: '#6B4F3A',
          600: '#523b2d',
          700: '#3f2d24',
          800: '#2b2018'
        },
        coffee: '#6B4F3A',
        cream: '#FAF7F2',
        beige: '#F5F1ED',
        muted: '#6B7280'
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 20px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};
