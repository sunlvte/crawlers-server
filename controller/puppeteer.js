const superagent = require('superagent');
const cheerio = require('cheerio')
const async = require('async');
const fs = require('fs');
const url = require('url');
const request =require('request');
const hcoinUrl = 'https://www.hcoin.com/#/trade/usdt/hcoin';
const launchOptions = require('../config/launch')
const puppeteer = require('puppeteer')
let browser;

const getBrowser = async () => {
	var brows = await puppeteer.launch(launchOptions)
	return brows;
}


class Puppeteer {
	constructor() {

	}
	async getSingle (page, els)  {
		const div  = await page.$eval(els, e => e.innerHTML);
		return div;
	}
	async getAllList(page, els) {
		const List = await page.$$eval(els, elements => {
			const ctn = elements.map(v => {
				return v.innerText;
			});
			return ctn;
		});
		return List;
	}
	async getPage(url) {
		if (!browser) {
			browser = await getBrowser()
		}
		const page = await browser.newPage();
		await page.goto(url);
		return page;
	}
	async getData (page) {
		try {
			const sellOrderClass = '.orderlist_top_ .body-row .bd-item';
			const buyOrderClass = '.order_list .bottom .bd-item';
			const tickerElsClass = '.main .mid .left';
			await page.waitForSelector(sellOrderClass,{ timeout: 20000 })

			setInterval(async () => {
				console.log(await  this.getAllList(page, buyOrderClass))
				console.log(await  this.getAllList(page, sellOrderClass))
			}, 10000)
		}catch(e) {
			browser.close();
			console.log(e);
		}

	}
}

module.exports = new Puppeteer()










