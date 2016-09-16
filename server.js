var express = require("express");
var app     = express();
var path    = require("path");


//app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/assests'));
app.use(express.static(__dirname ));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
var port = process.env.PORT||3000;
app.listen(port);