var request = require('request'),
    yo = require('./yo');

// Replace with your own Bot's info.
var bot = { name: 'YoBot',
            id: '24145432bce0a5b13451750def'
          };


bot.messaged = function(from, to, text, message) {
  if ( from !== bot.name ) {
    if( text === "YO" ) {
      yo.yoAll();
    }
  }
};

bot.say = function(message) {
  request.post({
      uri:"https://api.groupme.com/v3/bots/post",
        json: true,
        body: {
          'bot_id'  : bot.id,
          'text'    : message
        }
      },function(err,res,body){
        console.log(body);
        console.log(res.statusCode);
  });
}

module.exports = bot;
