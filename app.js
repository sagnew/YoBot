var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    ircBot = require('./ircBot'),
    groupmeBot = require('./groupmeBot');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log(req.query);
  console.log(req.body);
  console.log(req.params);

  var attribution =  "- " + (req.query.username || 'Anonymous');

  ircBot.say('#hackny', "YO" + attribution);
  groupmeBot.say("YO" + attribution);
});

app.post('/groupme_callback', function(req, res) {
  groupmeBot.messaged(req.body.name, undefined, req.body.text);
});

app.listen(2000);
console.log('Listening on port 2000');
