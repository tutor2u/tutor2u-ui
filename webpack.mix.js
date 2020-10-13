let mix = require('laravel-mix');

const sourcePath = 'src';
const distPath = 'dist';

mix.setPublicPath(distPath);

mix
    .postCss(sourcePath + '/css/index.css', distPath + '/css')
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