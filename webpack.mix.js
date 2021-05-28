const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/css/font-awesome.min.css',
    'resources/css/simple-line-icons.min.css',
    //Main styles for this application
    'resources/css/style.css',

], 'public/css/plantilla.css')

.scripts([
    // <!-- Bootstrap and necessary plugins -->
    'resources/js/jquery.min.js',
    'resources/js/popper.min.js',
    'resources/js/bootstrap.min.js',
    'resources/js/pace.min.js',
    // <!-- Plugins and scripts required by all views -->
    'resources/js/Chart.min.js',
    //<!-- GenesisUI main scripts -->
    'resources/js/template.js'

], 'public/js/plantilla.js');