const superagent = require('superagent');
const cheerio = require('cheerio')
const async = require('async');
const fs = require('fs');
const url = require('url');
const request =require('request');
const hcoinUrl = 'https://www.hcoin.com/#/trade/usdt/hcoin';
const launchOptions = require('./config/launch');
const spiders_order = require('./lib/spiders_order');
const spiders_ticker = require('./lib/spiders_ticker');
const config = require('./config/start');
const connectMongo = require('./models/connect')
const child_process = require('child_process');

const log = require('./lib/log')
const util = require('./lib/util')
global.config = config;
connectMongo()


spiders_order()
spiders_ticker()

// 例子一：会打印出 output from the child
// 默认情况，silent 为 false，子进程的 stdout 等
// 从父进程继承
// child_process.fork('./lib/childprocess.js', {
// 	silent: false
// });




process.on('SIGINT', function () {
	console.log('Exit now!');
	global.browser.close();
	process.exit(1);
});











