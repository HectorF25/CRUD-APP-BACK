const db_config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const db = new Sequelize('cml-app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;