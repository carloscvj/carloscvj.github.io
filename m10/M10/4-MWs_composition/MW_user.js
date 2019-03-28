
var express = require('express');
var app = express();

app.get('/user/:id', function(req, res, next){
  var user = req.params.id;
  if (user === 'Ana' || user === 'Pit'){
  	res.send('Systems user');
  }
  else {
  	next();
  }
});

app.get('*', function(req, res){
  	res.send('Unknown user');  	
});

app.listen(8000);
console.log('Listening ooon port 8000');

