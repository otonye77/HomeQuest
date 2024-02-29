const House = require('../../models/houses/house');
const { v4: uuidv4 } = require("uuid");

const createHouseService = async (typeOfHouse, address, noOfRooms, availability, userId, noOfBathroom, noOfSquareFeet, image) => {
    try {
        const newHouse = await House.create({
            id: uuidv4(),
            typeOfHouse,
            address,
            noOfRooms,
            availability,
            userId,
            noOfBathroom,
            noOfSquareFeet,
            image
        })
        return newHouse;
    } catch (error) {
        throw error;
    }
}

const GetAllHousesService = async () => {
    try {
        const houses = await House.findAll();
        return houses;
    } catch (error) {
        console.log(error);
    }
}

const GetHouseById = async (houseId) => {
    try {
        const house = await House.findByPk(houseId);
        if(!house){
            throw new Error('House not found');
        }
        return house;
    } catch (error) {
        throw error;
    }
}


const DeleteHouse = async (houseId) => {
    try {
        const deletedHouse = await House.destroy({
            where: {
                id: houseId
            }
        });
        return deletedHouse;
    } catch (error) {
        throw error;
    }
}

const EditHouse = async (houseId, updatedData) => {
    try {
        const [updatedHouseCount, updatedHouse] = await House.update(updatedData, {
            where: {
                id: houseId
            },
            returning: true 
        });
        if (updatedHouseCount === 0) {
            throw new Error('House not found');
        }
        return updatedHouse[0];
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createHouseService,
    GetAllHousesService,
    GetHouseById,
    DeleteHouse,
    EditHouse
};
  
