const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
  new: newTicket,
  create,
}

async function create(req, res) {
  const currentFlight = await Flight.findById(req.params.id)
  try {
    const ticket = await Ticket.create(req.body)
    ticket.flight.push(currentFlight._id)
    await ticket.save();
    res.redirect(`/flights/${currentFlight._id}`)
  } catch (err) {
    console.log(err);
    res.render(`/flights`, { errorMsg: err.message });
  }
}

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id)
  res.render('tickets/new', { title: 'New Tickets' , flight})
}