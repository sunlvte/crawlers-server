 const schedule = require('node-schedule')
 const log = require('./log')
 const puppe = require('./puppeteer')
 const util = require('./util')
 let quene = [];
 let initFlag = true;
 const job = (item, fn) => {
		console.log('job do')
		 puppe(item, schedule)
			 .then(res => {
		        fn&&fn(res, item);
				 reHandle();
			 })
			 .catch(err => {
				 log(`[schedule error] err=${err}  时间：${util.DateNow()}`, 'error')
			 })

 }
 const  scheduleCronstyle = (scheduleArr = [],fn)=>{
	 scheduleArr.forEach(item => {
		 quene.push(job.bind(this,item, fn));
	 });
	 initFlag && doHandle();
 }
 const doHandle = () => {
	 initFlag = false;
	 quene[0]();
 }
 const reHandle = () => {
	 quene.shift()
	 if (quene.length) {
		 doHandle();
	 }
 }

 module.exports = scheduleCronstyle

