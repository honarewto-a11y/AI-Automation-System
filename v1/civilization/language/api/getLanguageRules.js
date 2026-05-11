module.exports = (req, res) => {
  const data = require('../bridge/export_rules.json');
  res.json(data);
};
