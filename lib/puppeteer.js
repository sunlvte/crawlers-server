
const puppeteer = require('puppeteer')
const launchOptions = require('../config/launch')
const log = require('./log')
const util = require('./util')

let browser;


const getSingle = async (page, els) => {
	return  await page.$eval(els, e => e.innerText);
}
const getAllList = async (page, els) => {
	const List = await page.$$eval(els, elements => {
		const ctn = elements.map(v => {
			return v.innerText;
		});
		return ctn;
	});
	return List;
}
const getBrowser = async () => {
	browser = await puppeteer.launch(launchOptions);
	console.log('browser   open')
	global.browser = browser;

}
const getpage = async (url) => {
	const page = await browser.newPage();
	await page.goto(url);
	return page;
}
/*
	@params
	url string  需要抓取的url地址
	cls string  需要抓取的类名
	flag  string  single或者all  single为单点  all为list
 */
const getPuppeteerPage = async (item) => {
	if (!browser) {
		await getBrowser()
	}

	const page = await getpage(item[1])

	await page.waitForSelector(item[2], { timeout: 20000 })
	return page;

}
module.exports = {
	getPuppeteerPage, getSingle, getAllList
}











