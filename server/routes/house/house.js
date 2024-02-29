const express = require('express');
const router = express.Router();
const {CreateHouse, GetAllHouses, GetHouseById, DeleteHouse, EditHouse} = require("../../controller/house/house");

router.post('/createhouse', CreateHouse);
router.get('/getallhouses', GetAllHouses);
router.get('/:houseId', GetHouseById);
router.delete('/:houseId', DeleteHouse);
router.put('/:houseId', EditHouse);

module.exports = router;
