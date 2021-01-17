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
  },
  patch: (req, res) => {
    property.update(req.body, {
      where: {
        id: req.params.propertyId
      }
    })
      .then(() => {
        res.status(200);
      })
      .catch(err => {
        console.log('Error updating property in db:', err);
        res.status(500).json(err);
      });
  }
};
