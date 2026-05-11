
module.exports = async function(req, res) {
  const { nc_code } = req.query;
  const data = global.civilization.gatewayEngine.login(nc_code);
  res.json(data);
};