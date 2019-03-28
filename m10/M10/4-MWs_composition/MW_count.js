
var express = require('express');
var app = express();


app.use(function(req, res, next){
  app.locals.count = (++app.locals.count || 1);
  console.log("Visits: " + app.locals.count);
  next();
});


app.get('*', function(req, res){
  res.send('Visit number: ' + app.locals.count);
});


app.listen(8000);
console.log('Listening on port 8000');

