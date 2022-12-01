const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apirest', 'root', 'Mysecretpassword_1', {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize