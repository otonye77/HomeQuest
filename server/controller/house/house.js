const createHouseService = require("../../services/house/house");
const House = require("../../models/houses/house");;

const CreateHouse = async (req, res) => {
  try {
    const {
      typeOfHouse,
      address,
      noOfRooms,
      availability,
      userId,
      noOfBathroom,
      price,
      noOfSquareFeet,
      image,
    } = req.body;
    if (
      !typeOfHouse ||
      !address ||
      !noOfRooms ||
      !price ||
      !availability
    ) {
      return res.status(400).json({
        error:
          "typeOfHouse, address, noOfRooms, availability, userId, image cannot be empty",
      });
    }

    const house = await createHouseService.createHouseService(
      typeOfHouse,
      address,
      noOfRooms,
      availability,
      userId,
      noOfBathroom,
      price,
      noOfSquareFeet,
      image
    );
    return res.status(201).json(house);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const GetAllHouses = async (req, res) => {
  try {
    const houses = await createHouseService.GetAllHousesService();
    return res.status(200).json(houses);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const GetHouseById = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const house = await createHouseService.GetHouseById(houseId);
    return res.status(200).json(house);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "House not found" });
  }
};

const DeleteHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const userId = req.body.userId;
    const isAuthorized = await CheckHouseOwnership(houseId, userId);
    if (!isAuthorized) {
      return res.status(403).json({ error: "You are not authorized to delete this house" });
    }
    await createHouseService.DeleteHouse(houseId);
    return res.status(200).json({ message: "House deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const EditHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const updatedData = req.body;
    const userId = req.body.userId;
    console.log('userId', userId)
    const isAuthorized = await CheckHouseOwnership(houseId, userId);
    console.log("a", isAuthorized)
    if (!isAuthorized) {
      return res.status(403).json({ error: "You are not authorized to delete this house" });
    }
    const updatedHouse = await createHouseService.EditHouse(
      houseId,
      updatedData
    );
    return res.status(200).json(updatedHouse);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const CheckHouseOwnership = async (houseId, userId) => {
  try {
    const house = await House.findOne({ where: { id: houseId } });
    console.log("house:", house); // Debugging
    if (house && house.userId === userId) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateHouse,
  GetAllHouses,
  GetHouseById,
  DeleteHouse,
  EditHouse,
};