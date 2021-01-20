const { Sequelize, DataTypes, Deferrable } = require('sequelize');
const { db } = require('./index.js');

const property = db.define('property', {
  id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address2: {
    type: DataTypes.TEXT
  },
  neighborhood: {
    type: DataTypes.TEXT
  },
  neighborhood_url: {
    type: DataTypes.TEXT
  },
  rent: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.TEXT
  },
  beds: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  baths: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  sqft: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  petfriendly: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  new: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  new_construction: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  furnished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

const photo = db.define('photo', {
  id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  // property_id: {
  //   type: DataTypes.SMALLINT,
  //   allowNull: false,
  //   references: {
  //     model: property,
  //     key: 'id',
  //     deferrable: Deferrable.NOT // Deferrable.NOT is Default option
  //   }
  // },
  filename: {
    type: DataTypes.TEXT,
  },
  format: {
    type: DataTypes.TEXT,
  },
  height: {
    type: DataTypes.SMALLINT,
  },
  width: {
    type: DataTypes.SMALLINT,
  },
  link: {
    type: DataTypes.TEXT,
  },
  thumbnail: {
    type: DataTypes.TEXT,
  },
  floorplan: {
    type: DataTypes.BOOLEAN,
  }
}, {
  freezeTableName: true,
  timestamps: false
});

property.photo = property.hasMany(photo, {
  foreignKey: 'propertyId'
});
photo.property = photo.belongsTo(property);

// db.sync();

module.exports = { property, photo };
