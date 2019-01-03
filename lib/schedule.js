 const schedule = require('node-schedule')
 const log = require('./log')
 const puppe = require('./puppeteer')
 const util = require('./util')
 const job = (item, fn) => {
	 schedule.scheduleJob(item[0],()=>{
		 puppe(item[1], item[2], item[3])
			 .then(res => {
		        fn&&fn(res, item);
			 })
			 .catch(err => {
				 log(`[schedule error] err=${err}  时间：${util.DateNow()}`, 'error')
			 })
	 });
 }
 const  scheduleCronstyle = (scheduleArr = [],fn)=>{
	 scheduleArr.forEach(item => {
		 job(item, fn);
	 })
 }


module.exports = scheduleCronstyle

