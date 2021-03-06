const mongoose = require('mongoose')

const Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost:27017/crawlers', { useNewUrlParser: true });
const modelSchema = new Schema({
	ticker: {
		type: Number,
		require: true
	},
	type: {
		type: String,
		require: true
	},
	time: {
		type: String,
		default: Date.now(),
		require: true
	}
})

const model = mongoose.model('ticker', modelSchema , 'ticker')


module.exports = {
	model
}