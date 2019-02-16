// Requiere instalar
// Express body-parser

require('./config/config')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
  

app.get('/usuario',  (req, res) => {
  res.json('Get Usuario')
})

app.post('/usuario', (req, res) => {
  // Obtener payload
  let body = req.body;

  res.json({
    persona: body
  });

})

app.put('/usuario', (req, res) =>  {
  res.json('Put Method Usuario')
})


app.delete('/usuario',  (req, res) => {
  res.json('Deelete Method Usuario')
})


app.listen(3000, ()=> {
    console.log (`Escuchadndo pureto ${process.env.PORT}`);
});
