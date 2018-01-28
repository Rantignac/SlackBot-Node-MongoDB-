var SlackBot = require('slackbots');
var mongoose = require('mongoose');

/* Create Bot using Slack bot API KEY */
var bot = new SlackBot({
    token: '',
    name: ''
});


bot.on('start', function() {
    console.log('Bot started');

});


let users =[];
let botUsers = bot.getUsers();

bot.on('message', function handleRtmMessage(message) {
    users = botUsers._value.members;
    const user = users.find(user => user.id === message.user);

    if (message.type === 'message' && message.text) {

            if(message.text==='bonjour' || message.text==='Bonjour'){
                bot.postMessage(message.channel, 'Bonjour' +' '+user.name)
        }
    }
});
