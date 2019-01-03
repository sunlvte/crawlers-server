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

global.config = config;
connectMongo()
spiders_order()
spiders_ticker()
process.on('SIGINT', function () {
	console.log('Exit now!');
	global.browser.close();
	setTimeout(() => {

	process.exit(1);
	}, 5000)
});













