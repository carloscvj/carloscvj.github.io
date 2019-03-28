
var express = require('express');
var app = express();

app.get('/user/:id', function(req, res, next){
  var user = req.params.id;
  if (user === 'Ana' || user === 'Pit'){
  	res.send('Systems user');
  }
  else {
  	next(new Error('Unknown user'));
  }
});

app.get('*', function(req, res){
  	res.send('Invalid operation');  	
});

app.use(function(err, req, res, next){
  	res.send(err.toString());
});

app.listen(8000);
console.log('Listening on port 8000');

