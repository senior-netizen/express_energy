import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { primary: '#ff385c', secondary: '#460479', dark: '#222222', light: '#f7f7f7' },
        fuel: { petrol: '#22C55E', diesel: '#3B82F6', blend: '#F59E0B' }
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms'
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'spring-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(10px, -4px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2.2s linear infinite',
        float: 'float 3.6s ease-in-out infinite',
        drift: 'drift 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
export default config;
