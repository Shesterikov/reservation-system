const sequelize = require("../db/connection");
const Ticket = require("../models/Ticket");

const purchaseController = {};

purchaseController.setTicketAsPurchased = function (req, res, next) {
  const { ticketId } = req.params;

  Ticket.findOne({
    where: {
      id: ticketId,
      purchases: sequelize.where(sequelize.literal("purchases"), ">", 0),
    },
    lock: true,
    skipLocked: true,
  })
    .then((ticket) =>
      ticket
        .decrement("purchases")
        .then((ticket) =>
          res.status(201).json({ data: ticket, message: "Success" })
        )
    )
    .catch((err) => res.status(500).json({ message: "Error" }));
};

module.exports = purchaseController;
