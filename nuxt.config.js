export default {
  mode: "spa",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Thaionzon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Thaionzon | Thailand ซื่อขายสินค้าออนไลน์' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://static.line-scdn.net/liff/edge/2.1/sdk.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    link: [
     
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      },
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
  pwa: {
    icon: {
         fileName: 'log.png',
    },
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
    '@/assets/css/banner.css',
    '@/assets/css/about.css',
    '@/assets/css/blog.css',
    '@/assets/css/contact.css',
    '@/assets/css/salepage.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-cookies.js',
    { src: '~/plugins/vue-product-zoomer.js', mode: 'client' },
    // { src: './plugins/echo', mode: 'client' },
    '~plugins/local-storage.js',
    '~/plugins/helper',
   // "./plugins/mixins/user.js",
   // "~/plugins/axios.js",
   // "~/plugins/mixins/validation.js",
     { src: '~/plugins/gtag.js'},
    { src: '~/plugins/vuelidate', ssr: true },
    { src: './plugins/vue-fb-customer-chat.js' },
    { src: './plugins/vue-slick-carousel.js' }
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module

    [
      '@nuxtjs/router',
      '@nuxtjs/pwa',
      {
        path: 'router',
        fileName: 'index.js',
        keepDefaultRouter: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    "vue2-editor/nuxt",
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
    "@nuxtjs/auth",
    '@nuxtjs/recaptcha',
    '@nuxtjs/recaptcha'
  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6Ldh4g0dAAAAAP80q0x4ZGMxJwF1408EghK2P6RR', // Site key for requests
    version: 2, // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  router: {
    middleware: ["clearValidationErrors"],
    linkActiveClass: 'your-custom-active-link',
    linkExactActiveClass: 'your-custom-exact-active-link',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
//   axios: {
//     // See https://github.com/nuxt-community/axios-module#options
//     baseURL: "http://127.0.0.1:8000/api",
//     ImageURL: "http://127.0.0.1:8000/public/product/",
//     ImageSoc: "http://127.0.0.1:8000/public/images/",
//       ImageSoc: "http://127.0.0.1:8000/public/images/",

//   },

//   env: {
//     baseURL: "http://127.0.0.1:8000/api",
//     ImageURL: "http://127.0.0.1:8000/public/product/",
//     ImageSoc: "http://127.0.0.1:8000/public/images/",
//     backend:"http://127.0.0.1:8000",
// },

axios: {
  // See https://github.com/nuxt-community/axios-module#options
  baseURL: "https://cmsecom.idtest.work/api",
  ImageURL: "https://cmsecom.idtest.work/public/product/",
  ImageSoc: "https://cmsecom.idtest.work/public/images/",

 },

env: {
 baseURL: "https://cmsecom.idtest.work/api",
  ImageURL: "https://cmsecom.idtest.work/public/product/",
  ImageSoc: "https://cmsecom.idtest.work/public/images/",
  backend:"https://cmsecom.idtest.work",
},


// axios: {
//   // See https://github.com/nuxt-community/axios-module#options
//   baseURL: "https://backoffice.thaionzon.com/api",
//   ImageURL: "https://backoffice.thaionzon.com/public/product/",
//   ImageSoc: "https://backoffice.thaionzon.com/public/images/",

//  },

// env: {
//  baseURL: "https://backoffice.thaionzon.com/api",
//   ImageURL: "https://backoffice.thaionzon.com/public/product/",
//   ImageSoc: "https://backoffice.thaionzon.com/public/images/",
//   backend:"https://backoffice.thaionzon.com",
// },




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
          },
          home: false
        }
      }
    },
    redirect: {
      login: '/form/login',
      // logout: '/form/login',
    }
    // redirect: {
    //   logout: '/xxxxxxxx',
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor:["vue2-google-maps"]
  },

}
