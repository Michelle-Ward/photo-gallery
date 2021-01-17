const { Sequelize } = require('sequelize');
const { username, password } = require('./config.js');

const db = new Sequelize('photo_gallery', username, password, {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
});

const testConnection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    db.close();
  }
};

const initializeDB = async () => {
  try {
    let sync = await db.sync({ force: true });
    console.log('db sync syccessful.');
  } catch (err) {
    console.log("Error with db sync:", err);
  }
}

module.exports = { db, testConnection, initializeDB };