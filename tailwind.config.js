/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#1E40AF',
          600: '#1C3992',
          700: '#172F76',
        },
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#EA580C',
          600: '#C2410C',
          700: '#9A3412',
        },
        neutral: '#F8FAFC',
        text: '#1F2937',
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#239174',
          600: '#1d7a62',
          700: '#186250',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#233591',
          600: '#1e2d7a',
          700: '#192463',
        },
        burgundy: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#912351',
          600: '#7a1e44',
          700: '#631937',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};