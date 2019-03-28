var express = require('express');
var app = express();

app.get('/mi_ruta', function (req, res){
  res.send('Bienvenido a mi primera aplicacion');
  console.log("req.method =      " + req.method);
  console.log("req.path =        " + req.path);
  console.log("req.get('host') = " + req.get('host'));
});
app.listen(8000);