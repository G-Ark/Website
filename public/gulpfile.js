var gulp   = require('gulp');
var concat = require('gulp-concat');
var jsonServer = require("gulp-json-srv");

gulp.task('build',['server'], function() {
	var jsFiles = 'components/**/*.js',  
    jsDest = 'dest/';
    
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('server', function(){
	var server = jsonServer.create();
	return gulp.src("../db.json")
        .pipe(server.pipe());
});