import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0066ff',
          400: '#4da3ff'
        },
        accent: {
          500: '#00d9ff',
          400: '#4dd5ff'
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,102,255,0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(0,217,255,0.6)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira)', 'Fira Code', 'monospace']
      },
      borderRadius: {
        xl: '16px'
      },
      boxShadow: {
        'glass-low': '0 2px 8px rgba(0,0,0,0.1)',
        'glass-med': '0 4px 16px rgba(0,0,0,0.15)',
        'glass-high': '0 8px 32px rgba(0,0,0,0.2)',
        'glass-xhigh': '0 16px 64px rgba(0,0,0,0.3)'
      }
    }
  },
  plugins: []
};

export default config;
