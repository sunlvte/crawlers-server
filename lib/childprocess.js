const spiders_order = require('./spiders_order');
const spiders_ticker = require('./spiders_ticker');
console.log(3);
spiders_order()
console.log(4);

spiders_ticker()
console.log(5);
process.on('SIGINT', function () {
	console.log('Exit now!');
	global.browser.close();
	process.exit(1);
});
