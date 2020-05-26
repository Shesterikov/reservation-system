const indexController = {}

indexController.getApiVersion = function (req, res, next) {
    res.send('Reservation system API v1');
}

module.exports = indexController;
