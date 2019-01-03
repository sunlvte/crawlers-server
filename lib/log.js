const log4js = require('log4js')
const path = require('path')
const baseLogPath = path.resolve(__dirname, '../log/')
log4js.configure({
	appenders: {
		resLogger: {
			type: 'dateFile',
			filename: path.resolve(baseLogPath, 'log'),
			pattern: "-yyyy-MM-dd-hh.log",    //后缀，每小时创建一个新的日志文件
			alwaysIncludePattern: true, //将模式包含在当前日志文件的名称和备份中。
			daysToKeep: 30,
			compress: true,
			keepFileExt: true,
		}
	},
	categories: {
		default: { appenders: ['resLogger'], level: 'all' },
	},
	pm2: true,
	//logs根目录
	baseLogPath: baseLogPath
})

const logger = log4js.getLogger()

const log = (msg, type = 'trace') => {
	logger[type](msg)
}

module.exports = log


