const superagent = require('superagent');
const cheerio = require('cheerio')
const async = require('async');
const fs = require('fs');
const url = require('url');
const request =require('request');
const hcoinUrl = 'https://www.hcoin.com/#/trade/usdt/hcoin';
const launchOptions = require('./config/launch')
const spiders = require('./lib/spiders')
spiders()
// let browser;
//
//
//  const getSingle = async (page, els) => {
// 	 const div  = await page.$eval(els, e => e.innerHTML);
// 	 return div;
//  }
//  const getAllList = async (page, els) => {
// 	 const List = await page.$$eval(els, elements => {
// 		 const ctn = elements.map(v => {
// 			 return v.innerText;
// 		 });
// 		 return ctn;
// 	 });
// 	 return List;
//  }
// const gitChat = async () => {
// // 创建浏览器
// 	try {
// 		browser = await puppeteer.launch(launchOptions)
// 		const page = await browser.newPage();
// 		await page.goto(hcoinUrl);
// 		const sellOrderClass = '.orderlist_top_ .body-row .bd-item';
// 		const buyOrderClass = '.order_list .bottom .bd-item';
// 		const tickerElsClass = '.main .mid .left';
//
// 		await page.waitForSelector(sellOrderClass,{ timeout: 20000 })
//
// 		setInterval(async () => {
// 			console.log(await  getAllList(page, buyOrderClass))
// 			console.log(await  getAllList(page, sellOrderClass))
// 		}, 10000)
//
//
// 	} catch(e) {
// 		browser.close();
// 		console.log(e);
// 	}
//
//
//
//
// 	//orderlist_top_ body-row  bd-item   first/second/third
// }
//
// gitChat();











