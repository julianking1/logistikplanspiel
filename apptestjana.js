//This is just a test. -Jana

var express = require('express');
//var bodyParser = require('body-parser');
//var path = require ('path');

var app = express();

var logger = function(req, res, next){
    console.log('logging...');
    next();
}

app.use(logger);

app.get('/', function(req, res){
    res.send('HelloWorld');
});

app.listen(3001, function(){
    console.log('Server started on port 3001.')
})
