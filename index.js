
var express = require('express'),
    path = require('path'),
    app = express();
const dirname = path.resolve();

app.get('/index.html',function(req,res){
   res.sendFile(path.join(dirname + '/index.html')); 
});

app.get('/style.css',function(req,res){
    res.sendFile(path.join(dirname + '/style.css')); 
});

app.get('/swapi.js',function(req,res){
    res.sendFile(path.join(__dirname + '/swapi.js')); 
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.listen(8080);