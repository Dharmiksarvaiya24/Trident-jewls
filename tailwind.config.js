/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Ensure these paths are correct
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#E69E7F',
      },
    },
  },
  plugins: [],
};
