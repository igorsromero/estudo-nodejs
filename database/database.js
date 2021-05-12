const Sequelize = require("sequelize");
const connection = new Sequelize('perbr', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;