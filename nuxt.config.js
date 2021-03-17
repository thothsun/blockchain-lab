export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '区块链研究组',
    meta: [
      {charset: 'utf-8'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
      {hid: 'keywords', name:'keywords', content:'blockchain'},
      {hid: 'author', name: 'author', content: 'sunshuai'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src:'https://hm.baidu.com/hm.js?ed6db3061be10c22ccc4ec93a082d12d'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css', //基于断点的隐藏类
    'theme/index.css',
    'assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/animate',
    '@/plugins/baidu'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
