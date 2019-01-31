const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: 'green'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/srv': {
      target: 'http://teach.test.codingle.com.cn',
      pathRewrite: {
        '^/srv' : '/srv'
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
    extend(config, ctx) {
      module: {
        rules: [
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader', options: {
                  sourceMap: true, modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: {
                    path: 'postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader', options: { sourceMap: true }
              }
            ]
          }
        ]
      }
    }
  }
}
