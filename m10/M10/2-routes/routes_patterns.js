
var express = require('express');

var app = express();

app.get('/cars?', function (req, res){
  res.send('Responds to: /car or /cars');
});

app.get('/car/:model', function (req, res){
  var model = req.params.model;
  res.send('Model of your car: ' + model);
});

app.get('/add/:x([0-9]+)/:y([0-9]+)', function (req, res){
  var x = req.params.x;
  var y = req.params.y;
  res.send(x + ' + ' + y + ' = ' + (+x + +y));
});

app.get('*', function (req, res){
  res.send('Unknown request');
});

app.listen(8000);

