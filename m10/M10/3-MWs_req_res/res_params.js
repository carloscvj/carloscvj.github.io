var express = require('express');
var app = express();

app.get('/mi_ruta', function (req, res){
  res.type('text/plain');
  res.status(200);
  res.send('<html><body><h1>Mi Ruta</h1></body></html>\n');
});

app.listen(8000);