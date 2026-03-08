// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      canonicalHost: process.env.NUXT_PUBLIC_CANONICAL_HOST || '',
      copyAlertWebhook: process.env.NUXT_PUBLIC_COPY_ALERT_WEBHOOK || ''
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  typescript: {
    strict: true
  },

  nitro: {
    preset: (process.env.NITRO_PRESET as any) || 'github_pages'
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: "Andrew Chakdahah - Technical Project Manager & DevSecOps Engineer",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'author', content: 'Andrew Chakdahah' },
        { name: 'copyright', content: '© 2026 Andrew Chakdahah. All rights reserved.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap'
        }
      ]
    }
  }
})
