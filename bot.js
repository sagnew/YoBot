var irc = require("irc");

var buttons = {
  "up": "w",
  "down": "s",
  "left": "a",
  "right": "d",
  "a": "z",
  "b": "x",
  "start": "c"
};

var config = {
  channels: ["#hackny"],
  server: "irc.freenode.net",
  botName: "YoBot"
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

var yoAll = function() {
  console.log("YOALL");
};

bot.addListener("message", function(from, to, text, message) {
  if( text === "YO" ) {
    yoAll();
  }
});
