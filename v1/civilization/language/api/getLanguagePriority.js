module.exports = (req, res) => {
  const data = require('../bridge/export_priority.json');
  res.json(data);
};
