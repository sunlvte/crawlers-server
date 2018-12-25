
const puppeteer = require('puppeteer')
const launchOptions = require('../config/launch')
const tarUrl = require('../config/tarurl')
const tarClass = require('../config/tarclass')


let browser;


const getSingle = async (page, els) => {
	return  await page.$eval(els, e => e.innerHTML);
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
	browser = await puppeteer.launch(launchOptions)
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
const getPuppeteer = async (url=tarUrl.hcoinTradeUsdt, cls=tarClass.sellOrderClass, flag) => {
	if (!browser) {
		await getBrowser()
	}
	const page = await getpage(url)

	await page.waitForSelector(tarClass.sellOrderClass,{ timeout: 20000 })
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
			browser.close();
			reject(e);
		}
	})
// 创建浏览器

}
module.exports = getPuppeteer











