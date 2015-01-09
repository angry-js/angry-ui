var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');

gulp.task('default', [ 'less', 'jade', 'watch' ]);

gulp.task('less', function(){
  gulp
    .src('src/less/angry.less')
    .pipe(less())
    .pipe(gulp.dest('build/css'))
});


gulp.task('jade', function(){
  gulp
    .src('src/jade/*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
  gulp.watch('src/jade/*.less', [ 'less' ])
  gulp.watch('src/jade/*.jade', [ 'jade' ])
});
