const Sequelize = require("sequelize");
const db = require("./database.js");

const User = db.define("user", {
    idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    stateUser: {
        type: Sequelize.BOOLEAN
    },
    token: {
        type: Sequelize.STRING
    },
    identification: {
        type: Sequelize.STRING
    },
}, {
    timestamps: false,
    tableName: 'user',
    modelName: 'User',
});

module.exports = User;