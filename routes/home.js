const express = require('express');
const router = express.Router();

const { getApiVersion } = require("../controllers/homeController");
const { getTickets, getTicket } = require("../controllers/ticketController");
const { setTicketAsPurchased } = require("../controllers/purchaseController");

router.get('/', getApiVersion);
router.get('/tickets/', getTickets);
router.get('/tickets/:ticketId', getTicket);
router.get('/purchase/:ticketId', setTicketAsPurchased);

module.exports = router;
