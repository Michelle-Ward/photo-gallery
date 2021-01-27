const { photo } = require('../models.js');

module.exports = {
  get: (req, res) => {
    photo.findAll({
      where: {
        propertyId: req.params.propertyId,
      },
    })
      .then((photos) => {
        res.status(200).json(photos);
      })
      .catch((err) => {
        console.log(`No records found for propertyId ${req.params.propertyId}: ${err}`);
        res.status(404).json(err);
      });
  },
};
