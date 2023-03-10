const db_config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const db = new Sequelize(db_config.DB, db_config.USER, db_config.PASSWORD, {
    host: db_config.HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;