const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define("User", {
    id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User;
