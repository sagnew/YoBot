var irc = require("irc"),
    yo = require('./yo');

var config = {
  channels: ["#hackny"],
  server: "irc.freenode.net",
  botName: "YoBot"
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

bot.addListener("message", function(from, to, text, message) {
  if( text === "YO" ) {
    yo.yoAll();
  }
});
