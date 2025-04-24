const express = require("express");
const router = express.Router();
const UserAddressesController = require("../contrillers/userAddressesController");
//const verifyToken = require("../middleware/authMiddleware");

//-+*router.use(verifyToken);

router.get("/", UserAddressesController.getUserAddresses);
router.post("/", UserAddressesController.addUserAddres);
router.delete("/:id", UserAddressesContorller.deleteUserAddress);

module.exports = router;
