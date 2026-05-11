
module.exports = async function(req, res) {
  const { userId } = req.query;
  const data = global.civilization.economy.getWallet(userId);
  res.json(data);
};