const schedule = require('./schedule')
const tarUrl = require('../config/tarurl')
const tarClass = require('../config/tarclass')
const scheduleArr = [
	['10 * * * * *', tarUrl.hcoinTradeUsdt, tarClass.sellOrderClass, 'all'],
	['20 * * * * *', tarUrl.hcoinTradeUsdt, tarClass.buyOrderClass, 'all'],
	['30 * * * * *', tarUrl.hcoinTradeHkdt, tarClass.buyOrderClass, 'all'],
	['40 * * * * *', tarUrl.hcoinTradeHkdt, tarClass.sellOrderClass, 'all'],
	['50 * * * * *', tarUrl.hcoinTradeUsdt, tarClass.tickerElsClass, 'all'],
]
const spider = () => {
	schedule(scheduleArr, null)
}

module.exports = spider
