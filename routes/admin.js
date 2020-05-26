const express = require('express');
const router = express.Router();

const restaurantController = require("../controllers/restaurantController");

router.get('/restaurants', restaurantController.getRestaurants);
router.post('/restaurants', restaurantController.storeRestaurant);
router.post('/restaurants/:restaurantId/tickets', restaurantController.storeTicket);
router.put('/restaurants/:restaurantId/tickets/:ticketId', restaurantController.updateTicket);
router.delete('/restaurants/:restaurantId/tickets/:ticketId', restaurantController.destroyTicket);

module.exports = router;
