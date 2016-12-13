var gulp = require('gulp');
var zip = require('gulp-zip');
var apigeetool = require('apigeetool');

var PROXY_NAME = 'openbank-ci-demo';
var opts = {
    organization: process.env.organization,
	username: process.env.username,
	password: process.env.password,
    environments: process.env.environment
};

gulp.task('deploy', ['build'], function() {
	opts.api = PROXY_NAME;
	return apigeetool.getPromiseSDK().deployProxy(opts);
});

gulp.task('build', () => {
    return gulp.src('develop/apiproxy/*')
        .pipe(zip('apiproxy.zip'))
        .pipe(gulp.dest('build'));
});