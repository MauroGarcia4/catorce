/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        coffee: '#6B4F3A',
        'cream': '#FAF7F2',
        'beige': '#F5F1ED'
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
