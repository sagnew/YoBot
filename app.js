var express = require('express'),
    bodyParser = require('body-parser')
    app = express(),
    ircBot = require('./ircBot');
    groupmeBot = require('./groupmeBot')

app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log(req.query);
  console.log(req.body);
  console.log(req.params);
  ircBot.say('#hackny', "YO");
  groupmeBot.say("YO");
});

app.post('/groupme_callback', function(req, res) {
  groupmeBot.messaged(req.body.name, undefined, req.body.text)
});

app.listen(2000);
console.log('Listening on port 2000');
