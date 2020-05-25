const express = require('express');
const router = express.Router();

const { getApiVersion } = require("../controllers/homeController");
const { getTickets, getTicket } = require("../controllers/ticketController");
const { setTicketAsPurchased } = require("../controllers/purchaseController");

router.get('/', getApiVersion);
router.get('/tickets/', getTickets);
router.get('/tickets/:id', getTicket);
router.get('/purchase/:id', setTicketAsPurchased);

module.exports = router;
