const mongoose = require('mongoose')
// Shortcut the "mongoose.Schema" to keep it short and easier to use.
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
  arrivalAirport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ORD']
  },
  arrival: {
    type: Date,
    default: Date.now
  }
}, {})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Southwest', 'Frontier', 'United', 'American', 'Delta']
  },

  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ORD']
  },

  flightNo: {
    type: Number,
  },

  departs: {
    type: Date,
    default: Date.now
  },
  destinations: [destinationSchema],
}, {
  // Every time we create or update it will store the time it was created. Created is constant and update is updated when edited.
  timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)