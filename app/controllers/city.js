module.exports = function(app) {
	let City = app.models.city;
	const client = require('../../config/redis')();
	const scrapper = require('../libs/scrap');

	let controller = {
		index: function(req, res) {
			res.status(200).send('olar!');
		},
		city: function(req, res, next) {
			const cityName = req.params.name.replace(/ /g,"_");
			client.get(cityName, function(err, data) {
				if (err) {
					console.log(err);
				}
				if (data) {
					console.log('Via redis');
					res.send(JSON.parse(data));
				} else {
					console.log('Via mongoose');
					City.find({nome: cityName})
					.select('-_id')
					.select('-createdAt')
					.select('-updatedAt')
					.select('-__v')
					.then((city) => {
						if (city.length) {
							client.set(cityName, JSON.stringify(city[0]));
							res.json(city[0]);
						} else {
							console.log('via wikipedia');
							try {
								let scrapResult = scrapper.scrap(cityName)
								scrapResult.then(function(result) {
									newCity = new City(result);
									newCity.save(function(err) {
										console.log(err);
									});
									res.json(result);
								}).catch((err) => {
									res.status(500).send(err);
								});
							} catch(err) {
								console.log(err);
							}
						}
					}).catch((err) => {
						res.json(err);
					});
				}
			});
		}
	}
	return controller;
}