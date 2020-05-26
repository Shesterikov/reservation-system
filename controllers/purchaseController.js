const sequelize = require("../db/connection");
const Ticket = require("../models/Ticket");

const purchaseController = {};

purchaseController.setTicketAsPurchased = function (req, res, next) {
  const { ticketId } = req.params;

  //   const t = await ;

  sequelize
    .transaction()
    .then((t) => {
      Ticket.decrement(
        "purchases",
        {
          where: {
            id: ticketId,
            purchases: sequelize.where(sequelize.literal("purchases"), ">", 0),
          },
        },
        { transaction: t }
      )
        .then((data) => res.status(201).json({ data, message: "Success" }))
        .catch((err) => res.status(500).json({ message: "Error" + err }));
    })
    .catch((err) => {
      res.status(500).json({ message: "Error" + err });
    });

  // Ticket.findByPk(ticketId)
  //   .then((ticket) => {
  //     ticket
  //       .decrement("purchases", )
  //       .then((data) => {
  //           t.commit();
  //           res.status(201).json({ data, message: "Success" });
  //       })
  //   })
  //   .catch((err) => res.status(500).json({ message: "Error" + err }));

  //   Ticket.decrement("purchases", {
  //     where: {
  //       id: ticketId,
  //       purchases: sequelize.where(sequelize.literal("purchases"), ">", 0),
  //     },
  //   }, { transaction: t })
  //     .then((data) => res.status(201).json({ data, message: "Success" }))
  //     .catch((err) => res.status(500).json({ message: "Error" + err }));
}

module.exports = purchaseController
