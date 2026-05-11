module.exports = (req, res) => {
  const data = require('../bridge/export_status.json').active;
  res.json({ active: data });
};
