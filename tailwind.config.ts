import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)'
      },
      letterSpacing: {
        tightest: '-.06em'
      },
      keyframes: {
        bar: {
          '0%': { height: '20%' },
          '50%': { height: '100%' },
          '100%': { height: '20%' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        bar: 'bar 0.8s ease-in-out infinite',
        floaty: 'floaty 2.8s ease-in-out infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config
