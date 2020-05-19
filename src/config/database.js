const Sequelize = require('sequelize');

module.exports = new Sequelize('postgres', 'kobe', 'lakers', {
    host: 'localhost',
    dialect: 'postgres'
});