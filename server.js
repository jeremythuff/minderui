var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var app = express();

app.use(express.static(__dirname + '/app'));
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/app/index.html');
});
	
app.listen(9090);
console.log("Node Server Listening on port 9090");
