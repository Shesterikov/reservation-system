const sinon = require('sinon');
const Controller = require("../controllers/purchaseController");
const Ticket = require('../models/Ticket');
require("../config");

describe('Purchase Controller', function () {
    const req = {
        body: {
            name: "test ticket",
            purchases: 2,
        },
        params: { 
            ticketId: "test_d60-9ecb-11ea-8715-1d85ccb67ce7"
        }
    };
    

    let error = new Error({ error: "Error" }),
        res = {}, 
        expectedResult;


    describe('buy', function () {
        beforeEach(function () {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() }) // to spy res.status(500).end()
            };
        });
        it('should return created vehicle obj', sinon.test(function () {
            expectedResult = req.body
            this.stub(Ticket, 'create').yields(null, expectedResult); 
            Controller.setTicketAsPurchased(req, res);
            sinon.assert.calledWith(Ticket.create, req.body.data);
            // sinon.assert.calledWith(res.json, sinon.match({ model: req.body.model }));
            // sinon.assert.calledWith(res.json, sinon.match({ manufacturer: req.body.manufacturer }));
        }));
    });

})