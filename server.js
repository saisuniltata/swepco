var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var path    = require('path');


//app.use(express.static(__dirname + '/View'));
app.use('/', express.static(__dirname));
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/lubricants/*',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'),{root:__dirname+'/lubricants'});
    
  //__dirname : It will resolve to your project folder.
});
var port = process.env.PORT||3000;
app.listen(port);
console.log("Node Server Listening on port 3000");