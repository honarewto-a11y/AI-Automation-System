
module.exports = async function(req, res) {
  const { country } = req.query;
  const data = global.civilization.gatewayEngine.selectCountry(country);
  res.json(data);
};