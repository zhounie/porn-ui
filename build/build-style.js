const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')

gulp.task('css', async function() {
    await gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename('pornUI.css'))
        .pipe(gulp.dest('../dist/styles'))
})


gulp.task('default', gulp.series('css', (done) => done()))