const yml = require('js-yaml')
const fs  = require('fs');
const path = require('path')

// Get document, or throw exception on error
 const getConfig = () => {
	 try {
		 const Path = path.resolve(__dirname, './mongo.yml')
		 var doc = yml.safeLoad(fs.readFileSync(Path, 'utf8'));
		 return doc;
	 } catch (e) {
		 console.log(e);
	 }
 }

 const mongoConfig = global.mongoConfig = getConfig()

module.exports = mongoConfig;
