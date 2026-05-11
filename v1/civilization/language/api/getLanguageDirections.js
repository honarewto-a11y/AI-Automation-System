module.exports = (req, res) => {
  const data = require('../bridge/export_directions.json');
  res.json(data);
};
