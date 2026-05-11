
module.exports = async function(req, res, civilization) {
  const { userId, action } = req.body;
  const data = civilization.gatewayEngine.checkGate(userId, action);
  res.json(data);
};