/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050507',
        panel: '#0C0A12',
        brand: {
          violet: '#8B5CF6',
          indigo: '#6366F1',
        },
      },
      boxShadow: {
        'violet-soft': '0 0 40px rgba(139, 92, 246, 0.10)',
      },
    },
  },
  plugins: [],
};
