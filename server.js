var express = require('express');
var app = express();
app.listen(8275, function(){
   console.log("Server started on localhost:8275"); 
});
app.get('/', function(req, res){
   res.send("Hello Node Express"); 
});