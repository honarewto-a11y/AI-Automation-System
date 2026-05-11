module.exports = (req, res) => {
  const data = require('../bridge/export_versions.json');
  res.json(data);
};

