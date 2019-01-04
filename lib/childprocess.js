const spiders_order = require('./spiders_order');
const spiders_ticker = require('./spiders_ticker');

spiders_order()
spiders_ticker()

process.on('SIGINT', function () {
	console.log('Exit now!');
	global.browser.close();
	process.exit(1);
});
