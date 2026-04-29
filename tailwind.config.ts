import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { primary: '#ff385c', secondary: '#460479', dark: '#222222', light: '#f7f7f7' },
        fuel: { petrol: '#22C55E', diesel: '#3B82F6', blend: '#F59E0B' }
      }
    }
  },
  plugins: []
};
export default config;
