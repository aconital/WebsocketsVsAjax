var express = require('express');
var router = express.Router();


module.exports=function(app,api) {

  app.get('/ajax',function(req,res,next){
      res.writeHead(200, {'Content-Type' : 'text/plain'});
      res.end('_Ajax(\'{"message": "' + randomString(4096) + '"}\')');
  });


  /* GET home page. */
  app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
  });


      function randomString (len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
    }
};