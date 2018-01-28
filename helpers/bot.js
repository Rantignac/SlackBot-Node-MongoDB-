var SlackBot = require('slackbots');
var mongoose = require('mongoose');
var word = require('../models/word');

/* Create Bot using Slack bot API KEY */
var bot = new SlackBot({
    token: '',
    name: ''
});

bot.on('start', function () {
    console.log('Bot started');

});

let users = [];
let botUsers = bot.getUsers();
let keyword = '';
let usr = '';

bot.on('message', function handleRtmMessage(message) {

    if (message.type === 'message' && message.text) {
        users = botUsers._value.members;
        const user = users.find(user => user.id === message.user);
            if (message.text === 'bonjour' || message.text === 'Bonjour') {
                bot.postMessage(message.channel, 'Bonjour' +' '+ user.name)
                keyword = message.text;
                usrs = user.id;
            }
            saveWord(usr, keyword);
        }

});

bot.on('error', function(data) {
    console.log(data);
});

var saveWord = (usr, keyword) =>{
    word.create({user_id: usr, keyword: keyword}, (err, post) => {
        if(err) {
            console.log(err);
            return;
        } else {
            findWord(usr, keyword);
}
});
}

var findWord = (usr, keyword) =>{
    word.find({user_id: usr}).exec((err, words) => {
        words.forEach(function (word, index) {
        // bot.postMessage('général', word.keyword);
    });
});


}
