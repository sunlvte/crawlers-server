 const schedule = require('node-schedule')

 const puppe = require('./puppeteer')

 const job = (item, fn) => {
	 schedule.scheduleJob(item[0],()=>{
		 puppe(item[1], item[2], item[3])
			 .then(res => {
		        fn&&fn();
		        console.log(item[0],res.length);
			 })
	 });
 }
 const  scheduleCronstyle = (scheduleArr = [],fn)=>{
	 scheduleArr.forEach(item => {
		 job(item, fn);
	 })
 }


module.exports = scheduleCronstyle

