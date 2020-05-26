const Ticket = require("../models/Ticket");
const Restaurant = require("../models/Restaurant");

const restaurantController = {};

const userId = "c8eaf5b0-9ea7-11ea-a356-618d80ca4026";

restaurantController.getRestaurants = function (req, res, next) {
  Restaurant.findAll()
    .then((restaurants) =>
      res.status(201).json({ data: restaurants, message: "Success" })
    )
    .catch((err) => res.status(500).json({ message: "Error" + err }));
}

restaurantController.storeRestaurant = function (req, res, next) {
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

restaurantController.storeTicket = function(req, res, next) {
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

restaurantController.updateTicket = function (req, res, next) {
  const { name, purchases } = req.body;
  const { ticketId, restaurantId } = req.params;

  Ticket.update({ name, purchases }, { where: { id: ticketId, restaurantId }, returning: true, plain: true })
    .then((ticket) =>
      res.status(201).json({ data: ticket[1], message: "Success" })
    )
    .catch((err) => res.status(500).json({ message: "Error" }));
}

restaurantController.destroyTicket = function (req, res, next) {
    const { restaurantId, ticketId } = req.params;
  
    Ticket.destroy({ where: { id: ticketId, restaurantId } })
      .then(() =>
        res.status(201).json({ message: "Success" })
      )
      .catch((err) => res.status(500).json({ message: "Error" + err }));
  }

module.exports = restaurantController;
