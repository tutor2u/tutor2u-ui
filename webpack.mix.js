let mix = require('laravel-mix');

mix
    .postCss('src/css/index.css', './dist/css')

    .setPublicPath('./dist')

    .options({
        postCss: [
            require('postcss-easy-import')(),
            require('tailwindcss'),
            require('autoprefixer'),
        ],

        // CSSNext already processes our css with Autoprefixer, so we don't
        // need mix to do it twice.
        autoprefixer: false,

        // Since we don't do any image preprocessing and write url's that are
        // relative to the site root, we don't want the css loader to try to
        // follow paths in `url()` functions.
        processCssUrls: false,
    })

    .sourceMaps()

    .version()
;