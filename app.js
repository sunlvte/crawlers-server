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
const childprocess = require('child_process')
const log = require('./lib/log')
const util = require('./lib/util')
global.config = config;
connectMongo()
let worker = childprocess.fork('./lib/childprocess.js')
worker.on('exit', (i) => {
	log(`[childprocess error] pid=${i}  时间：${util.DateNow()}`, 'error')
	worker = childprocess.fork('./lib/childprocess.js')
	log(`[create new childprocess info] pid=${i}  时间：${util.DateNow()}`, 'info')
})













