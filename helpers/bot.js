var SlackBot = require('slackbots');
var mongoose = require('mongoose');

/* Create Bot using Slack bot API KEY */
var bot = new SlackBot({
    token: '',
    name: ''
});


bot.on('start', function() {
    console.log('Bot started');
    if(bot){
        var params = {
            icon_emoji: ':cat:'
        };
        bot.postMessageToChannel('général','Bonjour',params)
    }

});


/**
 * @param {object} data
 */
bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);
});