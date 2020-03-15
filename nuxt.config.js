module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  serverMiddleware: [
    '~/api/contact'
  ],
  plugins: [
    '~/plugins/vue-bar'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '',    // Site key for requests
    version: 3,     // Version
  },
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#0059a6"
        }
      }
    }
  },
  /*
  ** Build configuration
  */
 build: {
    /*
    ** You can extend webpack config here
    */
   extend (config, ctx) {
  }
},
  server: {
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'localhost'
  }
}
