
var express = require('express');
var app = express();

app.get('/question', function(req, res){ 
  res.send('<html>'
   	     +   '<body>'
  	     +     '<form   method="get"   action="/check">'
         +       'Who invented the Web? <p>'
         +       '<input  type="text"   name="answer" /><p>'
         +       '<input  type="submit" value="Send"/>'
         +     '</form>'
         +   '</body>'
         + '</html>'
         );
});

app.get('/check', function(req, res) { 
  var answer = req.query.answer;
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

