// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/devtools'],
  nitro: {
    preset: 'cloudflare-pages',
  },
})
