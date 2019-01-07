 const schedule = require('node-schedule')
 const log = require('./log')
 const {getPuppeteerPage, getSingle, getAllList} = require('./puppeteer')
 const util = require('./util')
 let quene = [];
 let initFlag = true;
 const job = (item, fn) => {
	 console.log('job do', item)
	 //get page
	 getPuppeteerPage(item)
			 .then(res => {
				 schedule.scheduleJob(item[0], async() => {
				 	let result;
			        if (item[3] === 'single') {
				        result = await getSingle(res, item[2])
			        } else if (item[3] === 'all') {
					    result = await getAllList(res, item[2])
			        };
				    ;fn && fn(result, item, res);
				 })
				  reHandle();
			 })
			 .catch(err => {
				 log(`[schedule error] err=${err}  时间：${util.DateNow()}`, 'error')
				 global.browser.close();
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

