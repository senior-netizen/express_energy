import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F5821F',
          navy: '#1B2A6B',
          white: '#FFFFFF',
          offwhite: '#F9F9F9',
          dark: '#111827'
        },
        fuel: {
          petrol: '#22C55E',
          diesel: '#3B82F6',
          lpgas: '#F59E0B'
        }
      }
    }
  },
  plugins: []
};

export default config;
