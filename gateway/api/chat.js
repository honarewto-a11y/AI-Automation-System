
module.exports = async function(req, res, civilization) {
  const { userId, message } = req.body;
  const data = civilization.gatewayEngine.chat(userId, message);
  res.json(data);
};