const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const House = sequelize.define("House", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
    },
    typeOfHouse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    noOfRooms: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.UUID,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true 
    }
});

module.exports = House;

const User = require('../auth/auth'); 
House.belongsTo(User, { foreignKey: 'userId' });
