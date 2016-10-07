var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/views'));

app.listen(8275, function(){
   console.log("Server started on localhost:8275"); 
});
app.get('/', function(req, res){
    res.render(path.join(__dirname + '/app/views/index.html'));
});
app.get('/projects', function(req, res){
   res.json({
       'title': 'My Hobby Projects',
       'projects': [ 'NodeJS', 'AngularJS', 'ExpressJS', 'Arduino', 'GitHub']
   });
});