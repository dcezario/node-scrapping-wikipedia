const mongoose = require('mongoose');
module.exports = function() {
	let schema = mongoose.Schema({
		name: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		area: {
			type: String,
			required: true
		},
		population: {
			type: String,
			required: true
		},
		density: {
			type: String,
			required: true
		},
		idh: {
			type: String,
			required: false
		},
		pib: {
			type: String,
			required: false
		},
	},
	{
		timestamps: true
	});
	return mongoose.model('City', schema, 'cities');
}