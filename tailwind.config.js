import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#FDF2F8',
          card: '#FCE7F3',
          text: '#0f172a',
        },
        dark: {
          bg: '#000000',
          card: '#1d1d1f',
          text: '#f5f5f7',
        },
        brand: {
          primary: '#F472B6',
          secondary: '#F9A8D4',
        },
      },
      boxShadow: {
        glow: '0 30px 80px rgba(0, 0, 0, 0.18)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [typography],
};
