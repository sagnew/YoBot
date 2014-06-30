var request = require('request'),
    queryString = require('querystring'),
    postData={
      api_token: process.env.YO_API_KEY
    },
    yoAll;

yoAll = function() {
  request.post({
      uri:"http://api.justyo.co/yoall/",
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: queryString.stringify(postData)
      },function(err,res,body){
        console.log(body);
        console.log(res.statusCode);
  });
};

module.exports = { 'yoAll': yoAll };
