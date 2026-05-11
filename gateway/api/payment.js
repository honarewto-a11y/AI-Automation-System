
module.exports = async function(req, res, civilization) {
  const { userId, method, amount, txid } = req.body;
  const data = civilization.economy.processPayment(userId, method, amount, txid);
  res.json(data);
};