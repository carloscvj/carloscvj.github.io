
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/question', function(req, res){ 
  res.send('<html>'
   	     +   '<body>'
  	     +     '<form   method="post"   action="/check">'
         +       'Who invented the Web? <p>'
         +       '<input  type="text"   name="answer" /><p>'
         +       '<input  type="submit" value="Send"/>'
         +     '</form>'
         +   '</body>'
         + '</html>'
         );
});

app.post('/check', function(req, res) { 
  var answer = req.body.answer;
  var response = "Correct, " + answer + " did";

  if (answer !== 'Tim Berners Lee') {
    response = "Incorrect, " + answer + " didn't";
  }
  
  res.send('<html>'
  	     +   '<body>'
  	     +     response + " invent the Web <p>"
  	     +     '<a href="/question">try again</a>'
         +   '</body>'
         + '</html>'
         );
});

app.listen(8000);

