const Ticket = require("../models/Ticket");

const ticketController = {};

ticketController.getTickets = function (req, res, next) {
  Ticket.findAll()
    .then((data) => res.status(201).json({ data, message: "Success" }))
    .catch((err) => res.status(500).json({ message: "Error" + err }));
};

ticketController.getTicket = function (req, res, next) {
  const { ticketId } = req.params;

  Ticket.findByPk(ticketId)
    .then((data) => res.status(201).json({ data, message: "Success" }))
    .catch((err) => res.status(500).json({ message: "Error" + err }));
};

module.exports = ticketController;
