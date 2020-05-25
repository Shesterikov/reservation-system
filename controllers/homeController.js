function getApiVersion(req, res, next) {
    res.send('Reservation system API v1');
}

module.exports = {
    getApiVersion,
};
  