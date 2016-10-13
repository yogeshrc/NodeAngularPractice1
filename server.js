var express = require('express');
var app = express();

require('./app/projects')(app);
// require('./app/projects');

var path = require('path');
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/views'));

console.log("__dirname = " + __dirname);

app.listen(8275, function(){
   console.log("Server started on localhost:8275"); 
});

app.get('/', function(req, res){
    res.render(path.join(__dirname + '/app/views/index.html'));
});
