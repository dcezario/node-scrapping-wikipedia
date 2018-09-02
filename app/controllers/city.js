module.exports = function(app) {
	let City = app.models.city;
	let request = require('request');
	const cheerio = require('cheerio');
	const removeAccents = require('remove-accents');

	let controller = {
		index: function(req, res) {
			res.status(200);
			res.end('teste');
		},
		city: function(req, res) {
			const url = 'https://pt.wikipedia.org/wiki/';
			const cityName = req.params.name.replace(/ /g,"_");
			const searchUrl = url + cityName;
			request(searchUrl, function(error, response, html) {
				if (!error) {
					let info = {};
					let $ = cheerio.load(html);
					$('.infobox tr').each(function() {
						let title = $(this).children('th').first().text().replace("\n","");
						let data = $(this).children('td').first().text().replace("\n","");
						if (title !== '') {
							let newData = removeAccents(data);
							let newTitle = removeAccents(title).toLowerCase().replace(/ /g,"_");
							newTitle = newTitle.replace('-','_');
							newTitle = newTitle.replace('(a)','');
							info[`${newTitle}`] = newData;
						}
					});
					delete info['localizacao'];
					res.json(info);
				} else {
					res.status(500).send("An error occured");
				}
			})
		}
	}
	return controller;
}