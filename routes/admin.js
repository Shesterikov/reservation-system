const express = require('express');
const router = express.Router();

const { getRestaurants, storeRestaurant, storeTicket, updateTicket, destroyTicket } = require("../controllers/restaurantController");

router.get('/restaurants', getRestaurants);
router.post('/restaurants', storeRestaurant);
router.post('/restaurants/:restaurantId/tickets', storeTicket);
router.put('/restaurants/:restaurantId/tickets/:ticketId', updateTicket);
router.delete('/restaurants/:restaurantId/tickets/:ticketId', destroyTicket);

module.exports = router;
