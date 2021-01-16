var { property } = require('../models.js');

module.exports = {
  get: (req, res) => {
    property.findAll()
      .then(properties => {
        res.status(200).json(properties);
      })
      .catch(err => {
        console.log('Error getting properties from db:', err);
        res.status(500).json(err);
      });
  }
};