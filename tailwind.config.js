/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#060B17',
          850: '#091024',
          800: '#0E172F',
          750: '#142142',
          700: '#1E293B',
        },
        electric: {
          cyan: '#00F0FF',
          blue: '#3B82F6',
          sky: '#38BDF8',
          violet: '#8B5CF6',
          purple: '#A855F7',
        },
        brand: {
          primary: '#0284C7',
          accent: '#06B6D4',
          glow: '#38BDF8',
          dark: '#030712',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.15), rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
        'card-glow': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.08), transparent 50%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-blue': '0 0 40px -5px rgba(59, 130, 246, 0.35)',
        'glow-violet': '0 0 40px -5px rgba(139, 92, 246, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-card': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
