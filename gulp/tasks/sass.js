module.exports = () =>
    $.gulp.task('style', () =>
        $.gulp.src($.path.src.style)
            .pipe($.sass({ outputStyle: 'expanded' }))
            .pipe($.gp.autoprefixer())
            .pipe($.sass({ outputStyle: 'compressed' }))
            .pipe($.gp.rename('main.min.css'))
            .pipe($.gulp.dest($.path.build.style))
            .on('end', $.bs.reload)
    )