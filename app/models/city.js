const mongoose = require('mongoose');
module.exports = function() {
	let schema = mongoose.Schema({
		nome: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		aniversario: {
			type: String
		},
		area: {
			type: String,
			required: true
		},
		fundacao: {
			type: String
		},
		gentilico: {
			type: String
		},
		prefeito: {
			type: String
		},
		unidade_federativa: {
			type: String
		},
		mesoregiao: {
			type: String
		},
		microregiao: {
			type: String
		},
		regiao_metropolitana: {
			type: String
		},
		municipios_limitrofes: {
			type: String
		},
		distancia_ate_a_capital: {
			type: String
		},
		caracteristicas_geograficas: {
			type: String,
			required: false
		},
		populacao: {
			type: String,
			required: true
		},
		densidade: {
			type: String,
			required: true
		},
		altitude: {
			type: String
		},
		clima: {
			type: String
		},
		fuso_horario: {
			type: String
		},
		indicadores: {
			type: String,
			required: false
		},
		idh_m: {
			type: String,
			required: false
		},
		pib: {
			type: String,
			required: false
		},
		pib_per_capita: {
			type: String
		},
		pagina_oficial: {
			type: String,
			required: false
		},
		prefeitura: {
			type: String
		}
	},
	{
		timestamps: true
	});
	return mongoose.model('City', schema, 'cities');
}