const Sequelize = require('sequelize')
const db = require('../src/config/database')

const quote = db.define('quotes', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  quote: {
    allowNull: false,
    type: Sequelize.STRING(2048),
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = quote;
