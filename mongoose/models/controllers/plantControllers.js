const Plant = require('../plantModel.js');

//Create and Save a new plant
exports.create = (req, res) => {
  if (!req.body.commonName) {
    return res.status(400).send('Fields cannot be empty');
  }

  const plantEntry = new Plant({
    commonName: req.body.commonName,
    locaton: req.body.location
  });

  plantEntry.save()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send(err.message || 'Error saving your plant.');
  })

};

//Retrieve and retun all plants form the database
exports.findAll = (req, res) => {
  Plant.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send(err.message || 'Some error occured fetching plants')
  })

};

//filter by certain plants by search term
exports.find = (req, res) => {

};

//delete a plant
exports.delete = (req, res) => {

};

//update the plant info
exports.update = (req, res) => {

};
