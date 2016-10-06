var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static(__dirname));

var path = require('path')
app.listen(8275, function(){
   console.log("Server started on localhost:8275"); 
});
app.get('/', function(req, res){
    console.log(__dirname);
    console.log(__filename);
    // res.sendFile(path.join(__dirname + '/index.html')); 
    res.render(path.join(__dirname + '/index.html'));
});