var slackbot = require('./helpers/bot');
var mongoose = require('mongoose');

var http = require('http');
http.createServer((req, res) => {}).listen(1337, '127.0.0.1');

/* Create MongoDB Connection with boot2docker */
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://192.168.59.103:27017', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));

