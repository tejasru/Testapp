var express = require("express");
var path = require("path");
var app = express();

//server config

app.use(express.static(path.join(__dirname,"Public")));


app.get('/',function(req,res){

res.sendFile(path.join(__filename,"/index.html"))

})

var server = app.listen(8888, function(){

var host = server.address().address;
var port = server.address().port;
console.log("App listening at http://localhost:8888", host, port)

})
