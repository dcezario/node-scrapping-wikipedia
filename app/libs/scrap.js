let request = require('request');
const cheerio = require('cheerio');
const removeAccents = require('remove-accents');

module.exports = {
	scrap: async function(cityName) {
		console.log('scrapping...');
		const url = 'https://pt.wikipedia.org/wiki/';
		const searchUrl = url + cityName;
		return new Promise(function(resolve, reject) {
			request(searchUrl, function(error, response, html) {
				if (!error) {
					let info = {};
					info.nome = cityName;
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
						delete info['localizacao'];	
					});
					console.log("Info from scrapping: ", info);
					resolve(info);
				} else {
					reject("An error occured");
				}
			})
		});
	}
}