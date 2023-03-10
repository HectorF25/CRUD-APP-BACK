require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.dialect,
    pool: {
        max: process.env.max,
        min: process.env.min,
        acquire: process.env.acquire,
        idle: process.env.idle
    }
};