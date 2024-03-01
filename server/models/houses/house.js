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
    availability: {
        type: Sequelize.ENUM('rent', 'sale'),
        allowNull: false
    },
    userId: {
        type: Sequelize.UUID,
        allowNull: false
    },
    noOfBathroom: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    noOfSquareFeet: {
        type: Sequelize.STRING,
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true 
    }
});

module.exports = House;
