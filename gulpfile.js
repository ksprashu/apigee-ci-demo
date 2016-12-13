var gulp = require('gulp');
var zip = require('gulp-zip');
var apigeetool = require('apigeetool');

var PROXY_NAME = 'openbank-ci-demo';
var opts = {
    organization: process.env.org,
	username: process.env.username,
	password: process.env.password,
	api: PROXY_NAME,
	directory: 'develop'
};

gulp.task('deploy-test', function() {
	opts.environments = process.env.env_test;
	return apigeetool.getPromiseSDK().deployProxy(opts);
});

gulp.task('deploy-prod', function() {
	opts.environments = process.env.env_test;
	return apigeetool.getPromiseSDK().deployProxy(opts);
});

gulp.task('build', () => {
    return gulp.src('develop/apiproxy/*')
        .pipe(zip('apiproxy.zip'))
        .pipe(gulp.dest('build'));
});