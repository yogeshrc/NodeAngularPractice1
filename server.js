var express = require('express');
var app = express();

var path = require('path')
app.listen(8275, function(){
   console.log("Server started on localhost:8275"); 
});
app.get('/', function(req, res){
    res.render(path.join(__dirname + '/app/views/index.html'));
});