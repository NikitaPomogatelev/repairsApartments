const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier2');
var tinypng = require('gulp-tinypng-compress');
var uglyfly = require('gulp-uglyfly');
var rename = require("gulp-rename");


gulp.task('minify-css', function(done) {
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))

    done();
});

gulp.task('minify-html', function(done) {
    return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))

    done();
});

gulp.task('fonts', function(done) {
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))

    done();
});

gulp.task('tinypng', function (done) {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'BQR7Cjv4gGyTy4yKj79zn4XdH137jlyy',
            log: true
        }))
        .pipe(gulp.dest('./dist/img/'));
        done();
});

gulp.task('compress-js', function(done) {
    return gulp.src(['./src/js/*.js', '!src/js/*.min.js'])
      .pipe(uglyfly())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/js/'))

      done();
  });

  gulp.task('move-js', function(done) {
    return gulp.src('./src/js/*.min.js')
    .pipe(gulp.dest('./dist/js'))

    done();
});

gulp.task('default', gulp.parallel('minify-css', 'compress-js', 'move-js', 'fonts', 'tinypng', 'minify-html', function(done) {

    done();
}));
