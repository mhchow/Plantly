const mongoose = require('mongoose');

var PlantSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
    unique: true
  },
  commonName: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    default: 'unkown'
  }
  family: {
    type: String,
    default: 'unkown'
  },
  location: {
    type: string,
    default: 'unkown'
  },
  care: {
    light: {
      type: string,
      default: 'unkown'
    },
    water: {
      type: string,
      default: 'unkown'
    }
  },
  lastWater: {
    type: Date,
    default: Date.now()
  },
  other: {
    type: String
  }
});
