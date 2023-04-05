const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Ticket Schema to update adding a ticket on flightSchema
const ticketSchema = new Schema ({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  },
  flight: [{
    type: Schema.Types.ObjectId,
    ref: 'Flight'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)