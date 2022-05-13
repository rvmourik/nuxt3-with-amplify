import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    vite: {
        resolve: {
            alias: {
                './runtimeConfig': './runtimeConfig.browser'
            }
        },
        // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
        define: {
            global: {}
        }
    }
});
