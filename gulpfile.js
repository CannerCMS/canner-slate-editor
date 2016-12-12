const gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./src/**/*.scss')
    .pipe(gulp.dest('./lib'));
});
