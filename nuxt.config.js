export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'BAP COMPANY TRIP',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
            },
            {
                rel: 'preconnect',
                type: 'text/css',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css?family=Pacifico',
            },
            
        ],
        script: [{
                src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.js',
                type: 'text/javascript',
            },

            {
                src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
                type: 'text/javascript',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/global.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~plugins/i18n' },
        { src: '~plugins/axios' },
        { src: '~plugins/vee-validate' },
        { src: '~plugins/bootstrap-vue' },
        { src: '~/plugins/repositories.js' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        // 'nuxt-lazy-load',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // Login

    auth: {
        strategies: {
            google: {
                // clientId: process.env.OAUTH2_CLIENT_ID,
                // clientId: '166677980566-5chojuatld2rcvnhnb36p0a8108032ih.apps.googleusercontent.com',
                clientId: '797736889333-j01hnn309tqmg28q3htc6psb5c8hd9ab.apps.googleusercontent.com',
                codeChallengeMethod: '',
                // redirect_uri: '/',
                responseType: 'token id_token',
            },
        },
    },
}
