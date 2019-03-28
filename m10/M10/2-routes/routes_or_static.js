
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res){
  res.send('Welcome to my first server app\n'
  	        + 'Responds to:  /');
});

app.get('/first_route', function (req, res){
  res.send('Responds to: /first_route');
});

app.get('/my/route', function (req, res){
  res.send('Responds to: /my/route');
});

app.get('/your/route', function (req, res){
  res.send('Responds to: /your/route');
});

app.get('*', function (req, res){
  res.send('Responds to: any other route');
});

app.listen(8000);

