// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@zadigetvoltaire/nuxt-gtm'
  ],
  gtm: {
    id: 'GTM-KV5TDWS4',
    enabled: true,
    debug: true,
    enableRouterSync: true
  }
})
