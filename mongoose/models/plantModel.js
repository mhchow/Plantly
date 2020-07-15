const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
  commonName: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    default: 'unknown'
  },
  family: {
    type: String,
    default: 'unknown'
  },
  location: {
    type: String,
    default: 'unknown'
  },
  care: {
    light: {
      type: String,
      default: 'unknown'
    },
    water: {
      type: String,
      default: 'unknown'
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

module.exports = mongoose.model('Plant', PlantSchema);