
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
const getPuppeteer = async (url, cls, flag) => {
	if (!browser) {
		await getBrowser()
	}

	const page = await getpage(url)

	await page.waitForSelector(cls, { timeout: 20000 })
	return new Promise(async(resolve, reject) => {
		try {
			if (flag === 'single') {
			  resolve(await getSingle(page, cls))
			} else if (flag === 'all') {
				resolve(await getAllList(page, cls))
			} else {
				reject()
			}
		} catch(e) {
			log(`[Puppeteer error] e=${e}  时间：${util.DateNow()}`, 'error')
			browser.close();
			reject(e);
		}
	})
}
module.exports = getPuppeteer











