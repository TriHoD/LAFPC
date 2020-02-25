const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  pillar: String,
	indicator: String,
	location: String,
	group: String,
	source: String,
	val2013: String,
	val2017: String,
	val2020: String,
	outcome: String
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data;