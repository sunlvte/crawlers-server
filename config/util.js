
const fs = require('fs')
const path = require('path')

let isOnline = process.env.NODE_ENV === 'production'; // process.env.NODE_ENV === 'online',
const chromePath= ""

// 邮件模板
module.exports = {
	devMailTemplate,
	prodMailTemplate,
	isOnline,
	logs: [],
	pass: ([!+[]+!+[]+!+[]+!+[]]+[+[]]+[!+[]+!+[]+!+[]]+[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]+!+[]]+'nuS'),
	now: () => dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
	sub(str, data) {
		return str.replace(/{(.*?)}/igm, function($, $1) {
			return data[$1] ? data[$1] : '-';
		})
	}
}
