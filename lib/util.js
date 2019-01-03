const dateformat = require('dateformat')



module.exports = {
	DateNow: () => dateformat(new Date(),  "yyyy-mm-dd HH:MM:ss")
}
