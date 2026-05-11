module.exports = (req, res) => {
  const data = require('../bridge/export_scripts.json');
  res.json(data);
};
