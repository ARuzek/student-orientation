export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'student-orientation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Still I Rise Student Orientation',
      },
      { name: 'theme-color', content: '#ec7026' },
    ],
    script: [
      { src: 'https://storage.googleapis.com/vrview/2.0/build/vrview.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icons/favicon-32x32.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/components'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/pwa',
  ],

  pwa: {
    meta: {
      /* meta options */
      theme_color: '#ec7026',
    },
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'Boif8PtWnC8XyQT3vrb82wtt',
        cacheProvider: 'memory',
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
