
const express = require('express');
const app = express();

   // CONTROLADORES

const indexController = (req, res, next) => {
  res.send(vista_index);
}

const formController = (req, res, next) => {
  res.send(vista_form);
}

const resultController = (req, res, next) => {
  let name = req.query.name, response;
  
  let person = model.find(p => p.name === name);
  if (person) {
    response = name + " is " + person.age + " years old";
  } else {
    response = name + " is  not in our DB";
  };

  res.send(vista_result.replace("<% response %>", response));
};

   // RUTAS

app.get(['/', '/index'], indexController);  // router
app.get('/form',         formController);
app.get('/result',       resultController);

app.get('*', (req, res) =>
  res.send("Error: resource not found")
);        

   // MODELO

const model = [ {name:'Peter', age:22}, 
                {name:'Anna',  age:23}, 
                {name:'John', age:30}
              ];

   // VISTAS

const vista_index = ` <!-- HTML view -->
<html>
  <head><title>MVC Example</title><meta charset="utf-8"></head> 
  <body> 
    <h1>MVC Example:</h1>
    Access the <a href="/form">query form</h1>.
  </body>
</html>`

const vista_form = ` <!-- HTML view -->
<html>
  <head><title>MVC Example</title><meta charset="utf-8"></head> 
  <body> 
    <h1>Request: form</h1>
    <form   method="get"   action="/result">
      What is the age of: <br>
      <input  type="text"   name="name" placeholder="Name" />
      <input  type="submit" value="Send"/> <br>
    </form>
  </body>
</html>`

const vista_result = ` <!-- HTML view -->
<html>
  <head><title>MVC Example</title><meta charset="utf-8"></head> 
  <body>
    <h1>Response: result</h1>
    <strong><div id='answer'><% response %></div></strong>
    Go back to the <a href="/form">age query form</h1>
  </body>
</html>`

   // Arranque del servidor en puerto 8000

app.listen(8000);
