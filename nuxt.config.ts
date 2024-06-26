// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiEndpoint: process.env.NUXT_PUBLIC_API_ENDPOINT || ''
    }
  }
})
