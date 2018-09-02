module.exports = function() {
	var createError = require('http-errors');
	var express = require('express');
	var path = require('path');
	var cookieParser = require('cookie-parser');
	var logger = require('morgan');
	var load = require('express-load');
	var app = express();

	var mongoose = require('./config/database')();
	// view engine setup
	app.set('views', path.join(__dirname, './app/views'));
	app.set('view engine', 'jade');

	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
	  next(createError(404));
	});

	// error handler
	app.use(function(err, req, res, next) {
	  // set locals, only providing error in development
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};
	  console.log(err.message);
	  // render the error page
	  res.status(err.status || 500);
	  res.render('error');
	});
	return app;
}
