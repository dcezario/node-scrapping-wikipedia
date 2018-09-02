const mongoose = require("mongoose");
const mongo = 'mongodb://mongo:27017/cidades';

module.exports = function() {
	mongoose.connect(mongo, {useNewUrlParser: true});
	mongoose.set('debug', true);
	mongoose.connection.on('connected', function() {
		console.log('Mongoose connected');
	});
	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose disconnected');
	});
	mongoose.connection.on('error', function(err) {
		console.log('Connection error: ', err);
	});
	process.on('SIGINT', function() {
		mongoose.connection.close();
	});
}