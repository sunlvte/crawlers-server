const superagent = require('superagent');
const cheerio = require('cheerio')
const async = require('async');
const fs = require('fs');
const url = require('url');
const request =require('request');
const hcoinUrl = 'https://www.hcoin.com/#/trade/usdt/hcoin';


const puppeteer = require('puppeteer')

const gitChat = async () => {
// 创建浏览器
	const browser = await puppeteer.launch({
// 这个属性是控制是否有GUI界面的，我们刚开始学习，这里可以设置成false，让我们可以看着浏览器动
		headless: false,
		timeout: 15000,
//  executablePath: '/Users/xiaobei/Downloads/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
// 这个属性里面有很多配置，常见的有下面几个，挂代理，或者在服务器上跑代码的时候需要（后面详细介绍）
		args: [
			// '--proxy-server=127.0.0.1:1087', // 这里可以挂代理
			//  '--no-sandbox', '--disable-setuid-sandbox' // 这个配置是在服务器环境下才配的
		]
	})
	const page = await browser.newPage();
	await page.goto(hcoinUrl);
	await page.waitForSelector('.main .mid .left',{ timeout: 10000 })
	// console.log(await page.$('.main .mid .left'));
	const div  = await page.$eval('.main .mid .left', e => e.innerHTML);
	console.log(div);



	//orderlist_top_ body-row  bd-item   first/second/third
}


setInterval(() => {gitChat()}, 60000)








