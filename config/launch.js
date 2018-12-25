


let isOnline = process.env.NODE_ENV === 'production'; // process.env.NODE_ENV === 'online',


const	Options_dev = {
	// 这个属性是控制是否有GUI界面的，我们刚开始学习，这里可以设置成false，让我们可以看着浏览器动
		headless: true,
		timeout: 15000,
	}
const Options_production = {
// 这个属性是控制是否有GUI界面的，我们刚开始学习，这里可以设置成false，让我们可以看着浏览器动
	headless: true,
	timeout: 15000,
	executablePath: '/root/crawlers-server/node_modules/puppeteer/.local-chromium/linux-609904/chrome-linux/chrome',
//  executablePath: '/Users/xiaobei/Downloads/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
// 这个属性里面有很多配置，常见的有下面几个，挂代理，或者在服务器上跑代码的时候需要（后面详细介绍）
	args: [
		// '--proxy-server=127.0.0.1:1087', // 这里可以挂代理
		'--no-sandbox', '--disable-setuid-sandbox' // 这个配置是在服务器环境下才配>的
	]
}
const Export_options =

// 邮件模板
module.exports = isOnline ? Options_production: Options_dev
