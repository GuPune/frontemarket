export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontemarket',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://static.line-scdn.net/liff/edge/2.1/sdk.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      }
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/nav.css',
    '@/assets/css/ads.css',
    '@/assets/css/categories.css',
    '@/assets/css/related.css',
    '@/assets/css/footer.css',
    '@/assets/css/loginform.css',
    '@/assets/css/regis.css',
    '@/assets/css/shopregis.css',
    '@/assets/css/productdetail.css',
    '@/assets/css/store.css',
    '@/assets/css/order.css',
    '@/assets/css/confirmorder.css',
    '@/assets/css/userprofile.css',
    '@/assets/css/adsshop.css',
    '@/assets/css/shipping.css',
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-product-zoomer.js', mode: 'client' },
    '~plugins/local-storage.js',
   // "./plugins/mixins/user.js",
   // "~/plugins/axios.js",
   // "~/plugins/mixins/validation.js",
    { src: '~/plugins/vuelidate', ssr: true },
  
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
    "@nuxtjs/auth"
    
  ],

  router: {
    middleware: ["clearValidationErrors"]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "http://127.0.0.1:8000/api",
    ImageURL: "http://127.0.0.1:8000/public/product/",
  
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "login",
            method: "post",
            propertyName: "data.token"
          },
          user: {
            url: "user",
            method: "get",
            propertyName: "meta"
          },
          logout: {
            url: "logout",
            method: "post"
          }
        }
      }
    },
    redirect: {
      logout: '/form/login'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
