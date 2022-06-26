export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'TFT 초심자를 위한 가이드',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/logo192.png'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~assets/scss/index.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        '~plugins/api/index.js',
        '~plugins/api/config.js',
        '~plugins/api/request.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/proxy'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },

//   server port
    server: {
        port: 3000,
    },
    axios: {
        proxy: true,
    },
    proxy: {
        '/api/v1': { target: 'https://tocheapi.heekng.com', pathRewrite: { '^/api/v1': '' } },
    }
}
