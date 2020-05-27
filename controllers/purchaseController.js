const sequelize = require("../db/connection");
const Ticket = require("../models/Ticket");

const purchaseController = {};

purchaseController.setTicketAsPurchased = async function (req, res, next) {
  const { ticketId } = req.params;

  const transaction = await sequelize.transaction();

  try {
    Ticket.findOne({
      where: {
        id: ticketId,
        purchases: sequelize.where(sequelize.literal("purchases"), ">", 0),
      },
      lock: true,
      skipLocked: true,
    })
    .then((ticket) => {
      ticket
        .decrement("purchases", {transaction})
        .then((ticket) => {
          transaction.commit();
          res.status(201).json({ data: ticket, message: "Success" });
        })
    })
    .catch((err) => {
      transaction.rollback();
      res.status(500).json({ message: "Error" });
    })
  } catch (err) {
    transaction.rollback();
    res.status(500).json({ message: "Error" })
  }
};

module.exports = purchaseController;
