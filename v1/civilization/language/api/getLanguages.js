module.exports = (req, res) => {
  const data = require('../bridge/export_languages.json');
  res.json(data);
};
