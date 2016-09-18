var express = require('express');
var app = express();
var path = require('path')
app.listen(8275, function(){
   console.log("Server started on localhost:8275"); 
});
app.get('/', function(req, res){
    console.log(__dirname);
    console.log(__filename);
    res.sendFile(path.join(__dirname + '/index.html')); 
});