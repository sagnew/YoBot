var express = require('express'),
    app = express(),
    bot = require('./bot');

  app.get('/', function(req, res) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    bot.say('#hackny', "YO");
  });

app.listen(2000);
console.log('Listening on port 2000');
