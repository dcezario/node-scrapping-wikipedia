module.exports = function(app) {
	let cityController = app.controllers.city;
	app.get('/', cityController.index);
	app.get('/city/:name', cityController.city);
}