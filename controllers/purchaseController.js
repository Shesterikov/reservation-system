async function setTicketAsPurchased(req, res, next) {
  try {
    const id = req.params.id;
    const data = await Ticket.findByPk(id);

    res.status(201).json({ data, message: 'Success' });

  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
}

module.exports = {
    setTicketAsPurchased,
};
  