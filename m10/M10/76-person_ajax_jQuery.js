
const express = require('express');
const app = express();

   // CONTROLADORES

const indexController = (req, res, next) => {
  res.send(vista_index);
}

const resultController = (req, res, next) => {
  let name = req.query.name, response;
  
  let person = model.find(p => p.name === name);
  if (person) {
    response = name + " is " + person.age + " years old";
  } else {
    response = name + " is  not in our DB";
  };

  res.send(response);
};

   // RUTAS

app.get(['/', '/index'], indexController);  // router
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

const vista_index = ` <!-- HTML index view -->
<html>
  <head>
    <title>MVC Example</title>  <meta charset="utf-8">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js" > </script>
    <script type="text/javascript">
      $(function(){
        $('#msg').on('click', function(){
          $('#msg').hide();
          $('#form').show();
        });
        $('#submit').on('click', function(){
          $.ajax( { type:'GET',
                    url: '/result?name=' + $("#name").val(),
                    success: function(response){
                      $('#msg').html(response + '<button>Back to form</button>');
                    }
          })
          $('#msg').show();
          $('#form').hide();
        });
        $('#msg').show();
        $('#form').hide();
      });
    </script>
  </head> 
  <body>
    <h1>MVC Example:</h1>
    <div id='msg'><button>Get query form</button></div>
    <div id='form'>
      What is the age of: <br>
      <input  type="text"  id="name"  placeholder="Name" />
      <button id="submit">submit</button>
    </div>
  </body>
</html>`

   // Arranque del servidor en puerto 8000

app.listen(8000);
