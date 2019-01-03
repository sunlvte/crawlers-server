const mongoose = require('mongoose');
//mongoose.Promise = global.Promise = require('bluebird');
module.exports = function() {
	var uri = global.mongoConfig.MONGO.URL;

    var options = {
        poolSize: 10,
        reconnectTries: Number.MAX_VALUE,
        // user: global.mongoConfig.MONGO.USER,
        // pass: global.mongoConfig.MONGO.PWD,
	    useNewUrlParser: true
    }
    
    mongoose.connect(uri, options);
	var db = mongoose.connection;


    /**
     * 连接成功
     */
    mongoose.connection.on('connected', function () {    
        console.log('Mongoose connection open to ' + uri);  
    });

    /**
     * 连接异常
     */
    mongoose.connection.on('error',function (err) {    
        console.log('Mongoose connection error: ' + err);  
    });
    

    /**
     * 连接断开
     */
    mongoose.connection.on('disconnected', function () {    
        console.log('Mongoose connection disconnected');  
    }); 
}