global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),
    path: {
        tasks: require('./gulp/config'),
        serverDir: './app/build',
        src: {
            html: './app/src/*.{html,pug}',
            style: './app/src/styles/*.{scss,css}',
            js: './app/src/script/common.js',
            img: './app/src/images/**/*.{png,webp,jpg,svg}',
            video: './app/src/video/*.mp4',
            fonts: './app/src/fonts/**/**/*.*'
        },
        build: {
            html: './app/build/',
            style: './app/build/styles/',
            js: './app/build/script/',
            img: './app/build/images/',
            video: './app/build/video/',
            fonts: './app/build/fonts/'
        },
        watch: {
            html: ['./app/src/*.{html,pug}', './app/src/view/**/*.{html,pug}'],
            style: './app/src/styles/**/*.*',
            js: './app/src/script/**/*.*',
            img: './app/src/images/**/*.{png,jpg,svg,webp}',
            video: './app/src/video/*.mp4',
            fonts: './app/src/fonts/**/*.*'
        }
    },
    tasks: {
        default: ['html','style','js','img','video','fonts','watch','serve'],
        build: ['html','style','js','img','video','fonts']
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)())

for(let value in $.tasks) {
    $.gulp.task(value, $.gulp.series($.gulp.parallel(...$.tasks[value])))
}
