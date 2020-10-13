let mix = require('laravel-mix');

const sourcePath = 'src';
const distPath = 'dist';

mix.setPublicPath(distPath);

mix
    .postCss('src/css/index.css', './dist/css')
    .options({
        postCss: [
            require('postcss-easy-import')(),
            require('tailwindcss'),
            require('autoprefixer'),
        ],
        autoprefixer: false,
        processCssUrls: false,
    })
    .copyDirectory(sourcePath + '/icons', distPath + '/icons')
    .sourceMaps()
;

if(mix.inProduction()) {
    mix.version();
 }