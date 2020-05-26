const express = require('express');
const router = express.Router();

const indexController = require("../controllers/homeController");
const ticketController = require("../controllers/ticketController");
const purchaseController = require("../controllers/purchaseController");

router.get('/', indexController.getApiVersion);
router.get('/tickets/', ticketController.getTickets);
router.get('/tickets/:ticketId', ticketController.getTicket);
router.get('/purchase/:ticketId', purchaseController.setTicketAsPurchased);

module.exports = router;
