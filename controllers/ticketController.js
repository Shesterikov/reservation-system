const Ticket = require("../models/Ticket");

async function getTickets(req, res, next) {
  Ticket.findAll()
    .then((data) => res.status(201).json({ data, message: "Success" }))
    .catch((err) => res.status(500).json({ message: "Error" + err }));
}

async function getTicket(req, res, next) {
  const { id } = req.params;

  Ticket.findByPk(id)
    .then((data) => res.status(201).json({ data, message: "Success" }))
    .catch((err) => res.status(500).json({ message: "Error" + err }));
}

module.exports = {
  getTickets,
  getTicket,
};
