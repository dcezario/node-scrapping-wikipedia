const redis = require('redis')
const client = redis.createClient('6379','redis');

module.exports = function() {
	client.on('connect', function() {
		console.log('redis connected');
	});
	client.on('error', function(err) {
		console.log('Something went wrong: ', err);
	});
	return client;
}