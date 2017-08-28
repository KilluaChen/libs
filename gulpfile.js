var gulp = require('gulp'),
    uglify= require('gulp-uglify');

gulp.task('jsmin', function () {
    //压缩icc目录下的所有js文件
    gulp.src(['icc/*.js']).pipe(uglify()).pipe(gulp.dest('dist/icc'));
});