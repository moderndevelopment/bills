let path = require('path');
let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

mix.js('resources/js/main.js', 'public/js');
mix.copy('node_modules/vue-snotify/styles/material.css', 'public/css/vendor/notify.css');
mix.copy('resources/sass/vendor/vue-multiselect.css', 'public/css/vendor/vue-multiselect.css');
mix.sass('resources/sass/app.scss', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('./tailwind.js')],
   })
   .disableNotifications()
   .webpackConfig({
      resolve: {
         alias: {
            JS: path.resolve(__dirname, 'resources/js'),
            App: path.resolve(__dirname, 'resources/js/app'),
            Helpers: path.resolve(__dirname, 'resources/js/helpers'),
            Libraries: path.resolve(__dirname, 'resources/js/lib'),
            Components: path.resolve(__dirname, 'resources/js/components'),
            GeneralComponents: path.resolve(__dirname, 'resources/js/components/general'),
            Events: path.resolve(__dirname, 'resources/js/events'),
            Mixins: path.resolve(__dirname, 'resources/js/mixins'),
            Models: path.resolve(__dirname, 'resources/js/store/models'),
         }
      },
      devtool: 'inline-source-map',
   })
   .sourceMaps();