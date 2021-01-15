const { Sequelize } = require('sequelize');
const { username, password } = require('./config.js');

const db = new Sequelize('photo_gallery', username, password, {
  host: 'localhost',
  dialect: 'mysql'
});

const testConnection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    db.close()
  }
};

testConnection();

module.exports.db = db;