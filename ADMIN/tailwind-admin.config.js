/** @type {import('tailwindcss').Config} */
export default {
  content: ['./ADMIN/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        // Admin Dashboard Colors
        easternBlue: {
          50: '#f0fdfe',
          100: '#ccfbfc',
          500: '#16a0aa',
          600: '#138a93',
          700: '#10737c',
        },
        saffron: {
          50: '#fffcf0',
          100: '#fef7cc',
          500: '#f7c12c',
          600: '#e6ad25',
          700: '#d49820',
        },
        neptune: {
          50: '#f0fffe',
          100: '#ccfdf9',
          500: '#7ac3bd',
          600: '#6bb0aa',
          700: '#5c9c97',
        },
        amaranth: {
          50: '#fef2f4',
          100: '#fce7ea',
          500: '#e63e56',
          600: '#d0374e',
          700: '#b93045',
        },
        royalHeath: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#9f2c89',
          600: '#8f267a',
          700: '#7f216b',
        },
        gothic: {
          50: '#f8fafb',
          100: '#f1f5f7',
          500: '#6f8e9a',
          600: '#627f8b',
          700: '#56707c',
        },
        buttercup: {
          50: '#fffcf0',
          100: '#fef7cc',
          500: '#f4a414',
          600: '#e09312',
          700: '#cc8210',
        },
        // Base colors from main theme
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#1E40AF',
          600: '#1C3992',
          700: '#172F76',
        },
        neutral: '#F8FAFC',
        text: '#1F2937',
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