const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/plantly', {userUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', () => {
  console.log('error connectiong to database');
});

db.once('open', () => {
  console.log('connected to MongoDB');
});

module.exports = db;