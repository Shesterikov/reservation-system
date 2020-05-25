const Ticket = require("../models/Ticket");
const Restaurant = require("../models/Restaurant");

const userId = "c8eaf5b0-9ea7-11ea-a356-618d80ca4026";

async function getRestaurants(req, res, next) {
  Restaurant.findAll()
    .then((restaurants) =>
      res.status(201).json({ data: restaurants, message: "Success" })
    )
    .catch((err) => res.status(500).json({ message: "Error" + err }));
}

async function storeRestaurant(req, res, next) {
  const { name } = req.body;

  Restaurant.create({
    name,
    userId,
  })
    .then((restaurant) =>
      res.status(201).json({ data: restaurant, message: "Success" })
    )
    .catch((err) => res.status(500).json({ message: "Error" + err }));
}

async function storeTicket(req, res, next) {
  const { name, purchases } = req.body;
  const { restaurantId } = req.params;

  Ticket.create({
    name,
    purchases,
    restaurantId,
  })
    .then((ticket) =>
      res.status(201).json({ data: ticket, message: "Success" })
    )
    .catch((err) => res.status(500).json({ message: "Error" + err }));
}

async function updateTicket(req, res, next) {
  const { name, purchases } = req.body;
  const { restaurantId, ticketId } = req.params;

  Ticket.update({ name, purchases }, { where: { id: ticketId, restaurantId } })
    .then((ticket) =>
      res.status(201).json({ data: ticket, message: "Success" })
    )
    .catch((err) => res.status(500).json({ message: "Error" + err }));
}

async function destroyTicket(req, res, next) {
    const { restaurantId, ticketId } = req.params;
  
    Ticket.destroy({ where: { id: ticketId, restaurantId } })
      .then(() =>
        res.status(201).json({ message: "Success" })
      )
      .catch((err) => res.status(500).json({ message: "Error" + err }));
  }

module.exports = {
    getRestaurants,
    storeRestaurant,
    storeTicket,
    updateTicket,
    destroyTicket
};
