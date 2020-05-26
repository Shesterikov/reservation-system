const sequelize = require("../db/connection");
const Ticket = require("../models/Ticket");

const purchaseController = {};

purchaseController.setTicketAsPurchased = function (req, res, next) {
  const { ticketId } = req.params;

  Ticket.decrement("purchases", {
    where: {
      id: ticketId,
      purchases: sequelize.where(sequelize.literal("purchases"), ">", 0),
    },
    lock: true,
    skipLocked: true,
  })
    .then((data) => res.status(201).json({ data, message: "Success" }))
    .catch((err) => res.status(500).json({ message: "Error" + err }));
};

module.exports = purchaseController;
