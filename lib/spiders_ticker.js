const schedule = require('./schedule')
const tarUrl = require('../config/tarurl')
const tarClass = require('../config/tarclass')
const tickerModel = require('../models/ticker')
const log = require('./log')
const util = require('./util')
const  nodeschedule = require('node-schedule');



var rule = new nodeschedule.RecurrenceRule();
rule.minute = [0, 10, 20, 30, 40, 50];


const scheduleArr = [
	   // ['40 * * * * *', tarUrl.hcoinTradeUsdt, tarClass.tickerElsClass, 'single', 'order-ticker'],
	    [rule, tarUrl.hcoinOTCUsdt, tarClass.OTCTickerClass, 'single', 'otc-usdt'],
	    [rule, tarUrl.hcoinOTCHkdt, tarClass.OTCTickerClass, 'single', 'otc-hkdt'],
]
const spider_ticker = () => {
	schedule(scheduleArr, operation)
}
const operation = (res, item, page) => {
	let result;
	try {
		if (item[4] === 'order-ticker') {
			result = res;
		} else {
			result = (res || '').split(" ")[0]
		}
		// @Todo insetDB
		const time = util.DateNow()
		if (parseFloat(result) > 0) {
			const obj = {
				ticker : parseFloat(result),
				type: item[4],
				time: time
			}
			new tickerModel.model(obj).save();
		} else {
			//@todo inset error log
			log(`[insert model error] result=${result}  时间：${time}`)
		}

		//page && page.close();
	} catch (e) {
		console.log(e)
		log(`[spider_tickcer error] error=${e}  时间：${time}`, 'error')
	}



}
module.exports = spider_ticker
