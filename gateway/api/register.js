
module.exports = async function(req, res) {
  const { userId, country } = req.query;
  const data = global.civilization.gatewayEngine.register(userId, country);
  res.json(data);
};