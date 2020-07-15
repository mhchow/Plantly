const express = require('express');
const app = express();
const db = require('./db.js');
const plants = require('../mongoose/models/controllers/plantControllers.js');


const PORT = 4000;

app.use(express.json()); //inbuild body parser instead of having to import middleware since 4.16+ express
app.use(express.urlencoded());
app.use(express.static(__dirname + '/../public'));

//retrive all plants
app.get('/plants', plants.findAll);
//create a new plant entry
app.post('/plants', plants.create);
//update a plant specific plant
app.put('/plants/:plantId', plants.update)
//delte a plant
app.delete('/plants/plantId', plants.delete)

app.listen(PORT, () => {
  console.log('Planty is listening at ' + PORT);
});

