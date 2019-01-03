const schedule = require('./schedule')
const tarUrl = require('../config/tarurl')
const tarClass = require('../config/tarclass')
const {MAX_SUM_USDT, MAX_SUM_HKDT} = require('../config/util')
const orderModel = require('../models/order')
const log = require('./log')
const util = require('./util')
const scheduleArr = [
	['0 * * * * *', tarUrl.hcoinTradeUsdt, tarClass.sellOrderClass, 'all', 'sell-usdt'],
	['10 * * * * *', tarUrl.hcoinTradeUsdt, tarClass.buyOrderClass, 'all', 'buy-usdt'],
	['20 * * * * *', tarUrl.hcoinTradeHkdt, tarClass.buyOrderClass, 'all', 'buy-hkdt'],
	['30 * * * * *', tarUrl.hcoinTradeHkdt, tarClass.sellOrderClass, 'all', 'sell-hkdt'],
]
const spider_order = () => {
	schedule(scheduleArr, operation)
}
const operation = (res, item) => {
	try{
		let opArr = (res || []).map(item => {
			const SplitArr = item.split(' ');

			if (SplitArr.length === 4) {
				return [SplitArr[0] + SplitArr[1], SplitArr[2], SplitArr[3]]
			} else {
				return [SplitArr[0], SplitArr[1], SplitArr[2]]
			}
		})
		let sun = 0;
		let i_leng = 0;
		let averageBaseTotal = 0;
		let averageBaseNum= 0;
		const SUM = item[4].includes('usdt') ? MAX_SUM_USDT : MAX_SUM_HKDT;
		while(sun <= SUM && opArr[i_leng]) {
			sun += parseFloat(opArr[i_leng][2]);
			averageBaseTotal += parseFloat(opArr[i_leng][2]);
			averageBaseNum += parseFloat(opArr[i_leng][1]);
			i_leng++;
		}
		let average =   averageBaseTotal / averageBaseNum;

		// @Todo insetDB
		const time = util.DateNow()
		if (typeof  parseFloat(average) === "number") {
			const obj = {
				average : average,
				type: item[4],
				time: time
			}
			new orderModel.model(obj).save();
		} else {
			log(`[insert model error] average=${average}  typeof=${parseFloat(average)}  时间：${time}`)
		}
	} catch (e) {
		console.log(e)
		log(`[spider_order error] error=${e}  时间：${time}`, 'error')
	}
}
module.exports = spider_order
