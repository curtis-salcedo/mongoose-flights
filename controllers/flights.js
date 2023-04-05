const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
  index,
  new: newFlight,
  create,
  show
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id)
  const tickets = await Ticket.find({ flight: flight._id })
  res.render('flights/show', { title: 'Flight Details', flight, tickets })
}

function create(req, res) {
  if (req.body.flightNo < 10 || req.body.flightNo > 9999) {
    return res.redirect('/flights/new')}
  const newFlight = new Flight (req.body)
  newFlight.save()
  res.redirect( '/flights' )
}

function newFlight(req, res) {
  res.render('flights/new');
}

async function index(req, res) {
  const flights = await Flight.find( {} )
  res.render( 'flights/index', { flights } )
}